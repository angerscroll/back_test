import mariadb from "mariadb";
import dotenv from "dotenv";

dotenv.config();

let pool;

const init = async () => {

  const password = process.env.MARIA_DB_PASSWORD;
  const host = process.env.MARIA_DB_HOST;
  const user = process.env.MARIA_DB_USER;

  pool = mariadb.createPool({
    host,
    user,
    password,
    connectionLimit: 5
  });
  
  let conn;
  try{
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 AS val");
    console.log(rows);

  } catch(err){
      throw err;
  } finally {
    if(conn) return conn.end();
  }
}

export {init};