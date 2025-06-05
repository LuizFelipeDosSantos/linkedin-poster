const generateBtn = document.getElementById("generate");
const topic = document.getElementById("topic");
const post = document.getElementById("generated-post");

const generatePost = () => {
  post.innerText = `Post about ${topic.value} generated`;
  topic.value = "";
}

generateBtn.addEventListener("click", generatePost);
