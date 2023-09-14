// AuthProvider.tsx
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/store";
import { auth, dbRefs } from "@/firebase";
import { getDoc, setDoc, DocumentReference } from "firebase/firestore";
// import { Firestore } from "firebase/firestore";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        // User is signed in.
        const userData = {
          id: authUser.uid,
          fullname: authUser.displayName || "",
          email: authUser.email || "",
          avatar: authUser.photoURL || "",
        };

        // Check if user document exists in Firestore
        // const userDocRef = firestoreDb
        //   .collection("xfoms")
        //   .doc("users")
        //   .collection("users")
        //   .doc(userData.id);
        // const userDoc = await userDocRef.get();

        const userDocRef: DocumentReference = dbRefs.xformUsersDoc(userData.id);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists) {
          // User document doesn't exist, create it in Firestore
          await setDoc(userDocRef, userData);
        }

        setUser(userData);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe from the Firebase observer when the component unmounts.
      unsubscribe();
    };
  }, [setUser]);

  return <>{children}</>;
};
