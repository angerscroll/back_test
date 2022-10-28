import mariadb from "mariadb";
import dotenv from "dotenv";

dotenv.config();

let pool;
let conn;

const init = async () => {

  const password = process.env.MARIA_DB_PASSWORD;
  const host = process.env.MARIA_DB_HOST;
  const user = process.env.MARIA_DB_USER;
  const database = process.env.MARIA_DB_DATABASE;
  pool = mariadb.createPool({
    host,
    user,
    password,
    connectionLimit: 5,
    database
  });
  
  
  try{
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * from test_table");
    console.log(rows);

  } catch(err){
      throw err;
  } finally {
    if(conn) return conn.end();
  }
}


const insertUser = async () => {
  try{
    const rows = await conn.query(`insert into test_user(user_id,e_mail,certification,nick_name,password) values (?,?,?,?,?)`,[1,2,3,4,5]);
    console.log(rows);
  } catch(err){
    throw err;
  }
  
}


export {init,insertUser};