import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, collection } from "firebase/firestore";
import { configs } from "@/app/configs";
import { DB_NAMES } from "@/constants";

const credentials = {
  apiKey: configs.API_KEY,
  authDomain: configs.AUTH_DOMAIN,
  projectId: configs.PROJECT_ID,
  storageBucket: configs.STORAGE_BUCKET,
  messagingSenderId: configs.MESSAGING_SENDER_ID,
  appId: configs.APP_ID,
};

/** Firebase app */
export const fireApp = initializeApp(credentials);

/** Firestore database */
export const db = getFirestore(fireApp);

/** Firebase auth app */
export const auth = getAuth(fireApp);

export const dbRefs = {
  xformUsersCollection: () => collection(db, DB_NAMES.xforms, DB_NAMES.users),
  xformUsersDoc: (id: string) => doc(db, DB_NAMES.xforms, DB_NAMES.users, id),
};
