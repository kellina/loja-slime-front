import { v4 as uuid } from "uuid";

export default function getUserId() {
  let userId = localStorage.getItem("user_id");
  if (!userId) {
    userId = uuid();
    localStorage.setItem("user_id", userId);
  }
  return userId;
}
