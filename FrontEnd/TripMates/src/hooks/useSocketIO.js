import { useEffect, useState } from "react";
import io from "socket.io-client";

const TEST_URL = "http://localhost:5173";
const useSocketIO = (userId) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(TEST_URL, {
      query: { userId },
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [userId]);

  return socket;
};

export default useSocketIO;
