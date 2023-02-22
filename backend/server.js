require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(fileUpload());
app.use(cors());

//Aquí requerimos los controllers de los users
const {
  activateUser,
  createUser,
  loginUser,
  deleteUser
} = require("./src/controllers/users");

//Aquí requerimos los controllers de los post

const {
  createPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
} = require("./src/controllers/posts");

// Aqui requerimos los controllers de los likes

const { togglePostLike } = require("./src/controllers/likes");

//Aquí requerimos los middlewares
const {
  handleError,
  handleNotFound,
  validateAuth,
} = require("./src/middlewares");
const { selectUserById } = require("./src/repositories/users");

//Endpoints Users
app.post("/registro", createUser);
app.post("/login", loginUser);
app.get("/activate/:registrationCode", activateUser);


/////////////////VER QUE ESTAS FUNCIONEN BIEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.get("/users/:id", selectUserById);
app.delete("/users/:id", validateAuth, deleteUser);

// Endpoints Post

app.get("/posts", getPosts);
app.get("/posts/:idPost", getPost);
app.post("/new", validateAuth, createPost);
app.delete("/posts/:idPost", validateAuth, deletePost);
app.post("/like/:idPost", validateAuth, togglePostLike);

//Middlewares
app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
