const getDb = require("../../db/getDb");

const insertUser = async (user) => {
  const { name, email, encryptedPass, registrationCode } = user;

  const pool = getDb();

  const [{ insertId }] = await pool.query(
    "INSERT INTO users (name, email, password, registrationCode) VALUES(?, ?, ?, ?)",
    [name, email, encryptedPass, registrationCode]
  );
  return insertId;
};
module.exports = insertUser;
