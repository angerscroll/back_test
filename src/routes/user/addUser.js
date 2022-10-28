import { insertUser  } from "../../persistence/maria_db.js";

const addUser = async () => {
  await insertUser();
}

export {addUser};