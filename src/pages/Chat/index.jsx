import { useEffect, useState, useRef } from "react";
import { create } from "zustand";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUser } from "../../redux/slices/userSlice";
import axios from "axios";
import Frame from "../../assets/icons/Frame.svg";
import Vector from "../../assets/icons/Vector.svg"

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
  const [file, setFile] = useState(null);
  const [receiverId, setReceiverId] = useState(null);

  const dispatch = useDispatch();
  const senderId = useSelector((state) => state.user.user?.id);
  const users = useSelector((state) => state.user.users?.users || []);
  const token = useSelector((state) => state.auth.accessToken);

  const ws = useRef(null);
  const wsConnected = useRef(false);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!senderId || wsConnected.current) return;

    ws.current = new WebSocket("wss://jobify.api-coreinno.ru");
    wsConnected.current = true;

    ws.current.onopen = () => console.log("✅ WebSocket подключен");

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("📩 Получено сообщение:", data);

      if (data.system) {
        setSystemMessage(data.system);
      } else if (data.error) {
        setError(data.error);
      } else {
        addMessage(
          data.senderId === senderId ? data.receiverId : data.senderId,
          data
        );
      }
    };

    ws.current.onerror = (error) =>
      console.error("❌ WebSocket ошибка:", error);

    ws.current.onclose = () => {
      console.log("🔌 WebSocket отключен, переподключаемся...");
      wsConnected.current = false;
      setTimeout(() => {
        ws.current = new WebSocket("wss://jobify.api-coreinno.ru");
        wsConnected.current = true;
      }, 3000);
    };

    return () => ws.current?.close();
  }, [senderId]);

  const loadChatHistory = async (receiverId) => {
    try {
      const response = await axios.get(
        `https://jobify.api-coreinno.ru/api/message?receiverId=${receiverId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessages(receiverId, response.data.messages);
    } catch (error) {
      console.error("Ошибка загрузки чата:", error);
    }
  };

  const sendMessage = () => {
    if (!receiverId) {
      setError("Выберите пользователя для чата!");
      return;
    }

    if (!ws.current || ws.current.readyState !== WebSocket.OPEN) {
      console.error("🚫 WebSocket не открыт, не удалось отправить сообщение.");
      return;
    }

    const messageData = {
      senderId,
      receiverId,
      text,
      time: new Date().toISOString(),
    };
    if (file) {
      messageData.fileUrl = URL.createObjectURL(file);
    }
    console.log("📤 Отправка сообщения:", messageData);
    ws.current.send(JSON.stringify(messageData));

    addMessage(receiverId, messageData);
    setText("");
    setFile(null);
  };

  // Получаем имя собеседника
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
                loadChatHistory(user.id);
              }}
            >
              {user.firstName}
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
              msg.senderId === senderId ? styles.myMessage : styles.otherMessage
            }
          >
            <strong>
              {msg.senderId === senderId ? "Вы" : getReceiverName(receiverId)}:
            </strong>{" "}
            {msg.text}
            {msg.fileUrl && (
              <div>
                <a href={msg.fileUrl} target="_blank" rel="noopener noreferrer">
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

      <img className={styles.vector} width={20} height={20} src={Vector} alt="" />

      <input
        className={styles.inputField}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите сообщение..."
        disabled={!receiverId}
      />
      <img className={styles.send} width={40} height={40} onClick={sendMessage} disabled={!receiverId} src={Frame} alt="" />
      {/* <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className={styles.fileInput}
      /> */}
      
    </div>
    </div>
    
  );
}
