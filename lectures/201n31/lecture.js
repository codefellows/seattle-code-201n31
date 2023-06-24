async function getP() {
  const response = await fetch('https://codefellows-lecture-videos.s3.us-west-2.amazonaws.com/index.html');
  const pc = await response.text();
  console.log(response);
  return pc;
}

document.querySelector("#passcode").append(getP())

console.log("hello world")
