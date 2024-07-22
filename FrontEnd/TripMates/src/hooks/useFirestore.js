import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"

export const useFirestore = (collectionName , condition) => {
    const [documents , setDocuments] = useState([])

    useEffect(() => {
        let collectionRef = collection(db, collectionName)
        console.log(collectionRef);
        // codition = {
        //     fieldName : 'query field',
        //     operator : 'query operator',
        //     compareValue : 'query compareValue'
        // }
        if(condition){
          console.log(condition);
            const { fieldName, operator, compareValue } = condition;
            if (fieldName && operator && compareValue) {
              collectionRef = query(collectionRef, where(fieldName, operator, compareValue) , orderBy('createdAt'));
            } else {
              console.log("Invalid condition:", condition);
              return; // Không có điều kiện hợp lệ, không làm gì cả
            }
        }

        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
          const documents = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
            // const updatedDocuments = [];
            // querySnapshot.forEach((doc) => {
            //   updatedDocuments.push({
            //     ...doc.data(),
            //     id: doc.id,
            //   });
            // });
            setDocuments(documents);
        });

        return () => unsubscribe();


    } , [collectionName , condition])

    return documents
}