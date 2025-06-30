import axios from 'axios';
import { API_BASE_URL } from "./consts.js";

const generateBtn = document.getElementById("generate");
const topic = document.getElementById("topic");
const post = document.getElementById("generated-post");

const generatePost = async () => {
  post.innerText = 'Generating Post...';
  try {
    let response = await axios.get(API_BASE_URL + `/post/${topic.value}`);
    response = await response.data;
    post.innerText = response;
    topic.value = "";
  } catch (error) {
    post.innerHTML = 'Something went wrong :(';
    console.error(error);
  }
}

generateBtn.addEventListener("click", generatePost);
