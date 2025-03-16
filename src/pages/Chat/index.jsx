import { useEffect, useState, useCallback } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAuth, fetchUsers } from "../../redux/slices/userSlice";

// Используем реальный сервер, а не localhost
// const socket = io("https://yourserver.com");

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const users = useSelector((state) => state.user.users.profiles);
  const userId = useSelector((state) => state.user.userAuth.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserAuth());
  }, [dispatch]);

  // Функция для загрузки чатов
  const fetchChats = async () => {
    try {
      const chatsResponse = await axios.get("/api/chat");
      setChats(chatsResponse.data || []);
    } catch (err) {
      console.error("Ошибка загрузки чатов", err);
    }
  };

  // Загружаем чаты при запуске
  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    if (!activeChat) return;

    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chat/${activeChat}`);
        setMessages(response.data.messages || []);
      } catch (err) {
        console.error("Ошибка загрузки сообщений", err);
      }
    };

    fetchMessages();
    socket.emit("join_chat", { chat_id: activeChat, user_id: userId });

    const handleReceiveMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.emit("leave_chat", { chat_id: activeChat });
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [activeChat, userId]);

  const startChat = async (user) => {
    try {
      const existingChat = chats.find((chat) =>
        chat.participants.includes(user.userId)
      );

      if (existingChat) {
        setActiveChat(existingChat.id);
      } else {
        const response = await axios.post("/api/chats", {
          user1: userId,
          user2: user.userId,
        });

        fetchChats(); // Обновляем список чатов после создания нового
        setActiveChat(response.data.id);
      }
    } catch (err) {
      console.error("Ошибка при создании чата", err);
    }
  };

  const sendMessage = useCallback(() => {
    if (!userId) {
      console.error("Ошибка: userId отсутствует!");
      return;
    }
    if (message.trim()) {
      socket.emit(
        "send_message",
        { chat_id: activeChat, sender_id: userId, content: message },
        () => {
          setMessage("");
        }
      );
    }
  }, [message, activeChat, userId]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.chatList}>
          {(Array.isArray(chats) ? chats : [])
            .filter((chat) =>
              chat.participants.some((participant) =>
                participant.toLowerCase().includes(search.toLowerCase())
              )
            )
            .map((chat) => (
              <div
                key={chat.id}
                className={`${styles.chatItem} ${
                  activeChat === chat.id ? styles.activeChat : ""
                }`}
                onClick={() => setActiveChat(chat.id)}
              >
                <div className={styles.chatInfo}>
                  <div className={styles.chatName}>
                    {chat.participants.join(", ")}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className={styles.userList}>
          <h3>Пользователи</h3>
          {(Array.isArray(users) ? users : []).map((user) => (
            <div
              key={user.userId}
              className={styles.userItem}
              onClick={() => startChat(user)}
            >
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.firstName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.chatMain}>
        {activeChat ? (
          <>
            <div className={styles.messageContainer}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${
                    msg.sender_id === userId ? styles.sent : styles.received
                  }`}
                >
                  {msg.content}
                  <div className={styles.messageTime}>
                    {new Date(msg.created_at).toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.inputArea}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Введите сообщение..."
                className={styles.inputField}
              />
              <button onClick={sendMessage} className={styles.sendButton}>
                ➤
              </button>
            </div>
          </>
        ) : (
          <div className={styles.emptyChat}>Выберите чат для общения</div>
        )}
      </div>
    </div>
  );
}
