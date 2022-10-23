
const ws = new WebSocket('ws://localhost:3000');

// on ws connection, load all posts
ws.onopen = function () {
  console.log('Connected to server');
  ws.send('load');
}

// on ws message, load all posts
ws.onmessage = function (event) {
// console.log(event.data);
// let jsonF = JSON.stringify(event.data);
let post = JSON.parse(event.data);

// Loop through array of posts
for (let i = 0; i < 3; i++) {
  // Create a new html instance using template
  let template = document.getElementById("my-paragraph");
    let templateContent = template.content;
    console.log(post);
    templateContent.querySelector("p").innerHTML = post[i].title;
    document.body.appendChild(templateContent);
}
};