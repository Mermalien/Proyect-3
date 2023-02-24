require("dotenv").config();
const bcrypt = require("bcrypt");
const getDb = require("./getDb");

//Datos de prueba para la DB

const populateDb = async () => {
  try {
    const pool = getDb();

    await pool.query(`INSERT INTO users (name, email, password) VALUES 
    ("Laura", "laura@email.com", "${await bcrypt.hash("12345678", 10)}"),
        ("Marcos", "marcos@email.com", "${await bcrypt.hash("12345678", 10)}"),
          ("Paula", "paula@email.com", "${await bcrypt.hash("12345678", 10)}"),
          ("Sergio", "sergio@email.com", "${await bcrypt.hash(
            "12345678",
            10
          )}"),
          ("Lucia", "lucia@email.com", "${await bcrypt.hash("12345678", 10)}"),
          ("Pablo", "pablo@email.com", "${await bcrypt.hash("12345678", 10)}")
          `);

    console.log(`Usuarios insertados correctamente`);

    await pool.query(`INSERT INTO posts (title, url, description, userId) 
    VALUES ("Consejos adiestramiento", "https://www.youtube.com/watch?v=Z5QIHkcGBxg", "Aquí puedes echar un ojo al canal de Dalecan y ver algo de información sobre adiestramiento", 1),
        ("Cursos adiestramiento", "https://dalecan.com/", "Manu de Dalecan te cuenta un poquito sobre sus cursos de adiestramiento", 2),
        ("Rascadores de gato", "https://www.zooplus.es/shop/tienda_gatos/rascadores_muebles?mkt_source=12215&gclid=CjwKCAiA3KefBhByEiwAi2LDHA17b28mqn57s0YdT5GjFAru3qQxPtZwMYL8GH7LKMEth3DDnXeguRoCwlUQAvD_BwE", "Aquí puedes encontrar el rascador perfecto para tu Michi", 5)
        `);

    console.log(`Posts insertados correctamente`);

    await pool.query(`
        INSERT INTO likes (postId, userId) VALUES (1, 2), (2, 1)`);

    console.log("Datos insertados correctamente");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};
populateDb();
