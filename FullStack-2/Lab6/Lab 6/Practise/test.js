var container = document.getElementById('container');
var content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

var p = document.createElement("p");
p.textContent = "Hey I'm blue!";
p.style.color = "blue"; 
container.appendChild(p);

var h = document.createElement("h3");
h.textContent = "Hey I'm blue h3!";
h.style.color = "red";
container.appendChild(h);

var div = document.createElement("div");
div.setAttribute('style', 'color: pink;'); 
var h1 = document.createElement("h1")
h1.innerText = "I’m in a div "
div.appendChild(h1);
var para = document.createElement("p");
para.innerText = "ME TOO!";
div.appendChild(para);

container.appendChild(div);

btn.addEventListener('click', function (e) {
    console.log(e);
  });
  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });


