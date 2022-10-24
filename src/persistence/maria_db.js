import mariadb from "mariadb";
import dotenv from "dotenv";

dotenv.config();

let pool;

const init = () => {

  const password = process.env.MARIA_DB_PASSWORD;
  const host = process.env.MARIA_DB_HOST;
  const user = process.env.MARIA_DB_USER;

  pool = mariadb.createPool({
    host,
    user,
    password,
    connectionLimit: 5
  });
  
  pool.getConnection()
  .then(conn => {
    conn.query("SELECT 1 AS val")
    .then(rows => {
      console.log(rows);
      console.log("연결 확인 성공");
    })
    .then(res => {
      console.log(res);
      conn.end();
    })
    .catch(err => {
      console.log(err);
      conn.end();
    })
  })
  .catch(err => {});
}

export {init};