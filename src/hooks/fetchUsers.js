import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchUsers(url) {
  const [users, setUsers] = useState();
  useEffect(() => {
    const getUsers = async () => {
      const userData = await axios
        .get(url)
        .catch((error) => console.log(error.message));
      if (userData) {
        setUsers(userData.data);
      }
    };
    getUsers();
  }, []);
  return users;
}