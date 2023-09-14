import { getIdToken } from "firebase/auth";
import { auth } from "@/app/firebase";
import axios from "axios";
import { configs } from "@/app/configs";

export function getCoreApiUri(path = "", version = "v1"): string {
  let uri = configs.SERVER_API_URL + "/" + version;
  // Add path
  uri += path;
  return uri;
}

export const http = async () => {
  let headers: Record<string, string>;
  const user = auth.currentUser;
  if (user) {
    const token = await getIdToken(user);
    headers = {
      "Authorization": "Bearer " + token,
      "User-Id": user.uid,
    };
  } else {
    headers = {};
  }

  return {
    coreApi: axios.create({ headers, baseURL: getCoreApiUri() }),
  };
};
