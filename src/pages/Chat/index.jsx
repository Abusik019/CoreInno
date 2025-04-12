import { useEffect, useState, useRef } from "react";
import { create } from "zustand";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUser } from "../../redux/slices/userSlice";
import axios from "axios";
import Frame from "../../assets/icons/Frame.svg";
import Vector from "../../assets/icons/Vector.svg";
import { Centrifuge } from "centrifuge";

const useChatStore = create((set) => ({
  messages: {},
  setMessages: (receiverId, msgs) =>
    set((state) => ({ messages: { ...state.messages, [receiverId]: msgs } })),
  addMessage: (receiverId, msg) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [receiverId]: [...(state.messages[receiverId] || []), msg],
      },
    })),
  systemMessage: null,
  setSystemMessage: (msg) => set(() => ({ systemMessage: msg })),
  error: null,
  setError: (msg) => set(() => ({ error: msg })),
}));

export default function Chat() {
  const {
    messages,
    setMessages,
    addMessage,
    systemMessage,
    setSystemMessage,
    error,
    setError,
  } = useChatStore();

  const [text, setText] = useState("");
  const [receiverId, setReceiverId] = useState(null);
  const centrifugoRef = useRef(null);
  const channelRef = useRef(null);

  const dispatch = useDispatch();
  const senderId = useSelector((state) => state.user.user?.id);
  const users = useSelector((state) => state.user.users?.users || []);
  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchUsers());
  }, [dispatch]);

 
 
  

 
  const connectToCentrifugo = async (receiverId) => {
    
    try {
      const response = await axios.get(
        `https://jobify.api-coreinno.ru/api/chat/connect?receiverId=${receiverId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          "Cache-Control": "no-cache",
        }
      );

      const { token: centrifugoToken, channel } = response.data;

      // 👉 Если уже подключены к нужному каналу — выходим
      if (centrifugoRef.current && channelRef.current === channel) {
        console.log("🔁 Уже подписаны на канал:", channel);
        return;
      }

      channelRef.current = channel;

      // 🔌 Отключаем старый экземпляр, если он есть
      if (centrifugoRef.current) {
        centrifugoRef.current.disconnect();
      }

      const centrifuge = new Centrifuge(
        "ws://jobify.api-coreinno.ru:8000/connection/websocket",
        { token: centrifugoToken }
      );

      centrifuge.on("connect", () => {
        console.log("✅ Подключен к Centrifugo");
      });

      centrifuge.on("disconnect", (ctx) => {
        console.warn("🔌 Отключен от Centrifugo", ctx);
      });

      const sub = centrifuge.newSubscription(channel);

      

      sub.on("publication", (ctx) => {
        const data = ctx.data;
        console.log("📩 Новое сообщение:", data);

        if (data.system) {
          setSystemMessage(data.system);
          if (data.messages) {
            setMessages(receiverId, data.messages);
          }
        } else {
          addMessage(receiverId, data);
        }
      });

      sub.subscribe();
      centrifuge.connect();

      centrifugoRef.current = centrifuge;
    } catch (err) {
      setError("Ошибка подключения к чату");
      console.error(err);
    }
  };

  const loadChatHistory = async (receiverId) => {
    try {
      const response = await axios.get(
        `https://jobify.api-coreinno.ru/api/chat/messages?receiverId=${receiverId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(receiverId, response.data.messages);
    } catch (error) {
      console.error("Ошибка загрузки чата:", error);
    }
  };

  const sendMessage = async () => {
    if (!receiverId) {
      setError("Выберите пользователя для чата!");
      return;
    }

    try {
      const response = await axios.post(
        "https://jobify.api-coreinno.ru/api/chat/send",
        { receiverId, text },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("📤 Сообщение отправлено:", response.data);
      // Оно придёт само через Centrifugo, можно не дублировать вручную
      setText("");
    } catch (err) {
      console.error("Ошибка отправки сообщения:", err);
    }
  };

  const getReceiverName = (receiverId) => {
    const receiver = users.find((user) => user.id === receiverId);
    return receiver ? receiver.firstName : "Собеседник";
  };

  return (
    <div className={styles.rod}>
      <div className={styles.users}>
        <h2>Пользователи:</h2>
        <ul className={styles.userList}>
          {users.map((user) => (
            <li
              key={user.id}
              className={receiverId === user.id ? styles.activeUser : ""}
              onClick={() => {
                setReceiverId(user.id);
                connectToCentrifugo(user.id);
                loadChatHistory(user.id);
              }}
            >
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.chatContainer}>
        <h1 className={styles.chatTitle}>Чат</h1>
       

        {systemMessage && (
          <div className={styles.systemMessage}>{systemMessage}</div>
        )}
        {error && <div className={styles.errorMessage}>{error}</div>}

        <div className={styles.chatBox}>
          {(messages[receiverId] || []).map((msg, index) => (
            <div
              key={index}
              className={
                msg.senderId === senderId
                  ? styles.myMessage
                  : styles.otherMessage
              }
            >
              <strong>
                {msg.senderId === senderId ? "Вы" : getReceiverName(receiverId)}
                :
              </strong>{" "}
              {msg.text}
              {msg.fileUrl && (
                <div>
                  <a
                    href={msg.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📎 Прикрепленный файл
                  </a>
                </div>
              )}
              <div className={styles.timestamp}>
                {new Date(msg.time).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: "relative", width: "720px", }}>
          <img
            className={styles.vector}
            width={20}
            height={20}
            src={Vector}
            alt=""
          />
            <img
              className={styles.send}
              width={40}
              height={40}
              onClick={sendMessage}
              src={Frame}
              alt=""
            />
          <input
            className={styles.inputField}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите сообщение..."
            disabled={!receiverId}
          />
        </div>
      </div>
    </div>
  );
}
