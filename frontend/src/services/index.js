export const getPostsService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};


export const getSinglePostsService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};



export const getProtectAnimalsService = async () => {
  const response = await fetch(
    `"https://www.zaragoza.es/sede/servicio/mascotas.json"/adopta`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};


export const registerUserService = async ({ name, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {

    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-type": "application/json",
    },

  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getMyDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};



export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const updateProfileService = async (name, password) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "PUT",
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify({name, password})
  });

  if(!response.ok){
    throw new Error("No se han podido realizar los cambios")
  }

  const updatedUser = await response.json();
  return updatedUser;
}
