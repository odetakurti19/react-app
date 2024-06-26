const TOKEN = "jwt";

const getToken = () => {
  return localStorage.getItem(TOKEN);
};

const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

export { getToken, setToken, removeToken };