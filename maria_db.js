import mariadb from "mariadb";
import dotenv from "dotenv";

dotenv.config();

const pw = process.env.db_pw;

const pool = mariadb.createPool({
  host: 'localhost',
  user:'root',
  password: pw,
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