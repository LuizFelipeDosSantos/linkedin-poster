const generateBtn = document.getElementById("generate");
const topic = document.getElementById("topic");
const post = document.getElementById("post");

const generatePost = () => {
  topic.value = "";
}

generateBtn.addEventListener("click", generatePost);
