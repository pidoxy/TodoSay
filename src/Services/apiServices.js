import axios from "axios";

const baseUrl = "https://todosay.herokuapp.com/api/";
const baseUrl_auth = `${baseUrl}auth/`;
let token = localStorage.getItem("user").token;
let uid = localStorage.getItem("user").uid;

const createTodo = (data) => {
    return axios({
      method: "post",
      url: `${baseUrl}todo/`,
      data,
    headers: {
      clientId: "A6w0Xu6",
      Authorization: `Bearer ${token}`,
      uid: `${uid}`,
      // authId: "JZNJY9YQSwWaoQ5gd71iuA==",
    },
    });
  };

//   Fetch all todos by a user
  const fetchTodos = () => {
    return axios({
      method: "get",
      url: `${baseUrl}todo`,
    });
  };

  const fetchTodo = () => {
    return axios({
      method: "get",
      url: `${baseUrl}todo`,
    });
  };

//   All todos
  const fetchAllTodo = () => {
    return axios({
      method: "get",
      url: `${baseUrl}todo/`,
    });
  };

  const updateTodo = () => {
    return axios({
      method: "get",
      url: `${baseUrl}todo`,
    });
  };

  const deleteTodo = () => {
    return axios({
      method: "get",
      url: `${baseUrl}todo`,
    });
  };

  const extractTodo = () => {
    return axios({
      method: "get",
      url: `${baseUrl}todo`,
    });
  };