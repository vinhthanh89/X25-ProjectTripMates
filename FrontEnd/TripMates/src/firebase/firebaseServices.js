import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "./config";

export const addDocument = async (collectionName, data) => {
  try {
    console.log(data);
    await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const checkRoomChatId = async (userLogin, friend) => {
  const roomChatCollection = collection(db, "roomChats");

  const q = query(
    roomChatCollection,
    where("member", "array-contains", userLogin._id)
  );

  const querySnapshot = await getDocs(q);

  let roomExists = false;
  let roomId = null;

  querySnapshot.forEach((doc) => {
    const members = doc.data().member;
    if (members.includes(friend.userFollow._id)) {
      roomExists = true;
      roomId = doc.id;
    }
  });

  if (roomExists) {
    console.log(`Room already exists with ID: ${roomId}`);
    return roomId;
  }

  if (!roomExists) {
    const newRoomChatRef = doc(roomChatCollection);
    await setDoc(newRoomChatRef, {
      createdAt: serverTimestamp(),
      member: [friend.userFollow._id, userLogin._id],
    });
    console.log(`New room created with ID: ${newRoomChatRef.id}`);

    return newRoomChatRef.id;
  }
};
