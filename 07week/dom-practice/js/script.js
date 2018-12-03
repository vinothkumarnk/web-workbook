'use strict';


// You code here
window.onload = function () {

  let list = document.getElementsByTagName('li');
  let message = "This list has: " + list.length + " items";
  console.log(message);

  let newh2 = document.createElement('h2');
  newh2.innerHTML = "You have " + list.length + " items in your shopping cart";
  document.getElementsByTagName('h1')[0].after(newh2);


  let inp = document.createElement('input');
  document.getElementsByTagName('div')[0].before(inp);


  let button = document.createElement('button');
  document.getElementsByTagName('input')[0].after(button);
  button.innerText = "Add";
  button.style.margin = '10px';

  let b = document.getElementsByTagName('button')[0];
  b.onclick = function add() {

    let userinput = document.getElementsByTagName('input')[0].value;

    let para = document.createElement("li");
    let t = document.createTextNode(userinput);

    let r = document.createElement('button');
    // document.getElementsByTagName('li')[i].appendChild(button);
    r.innerText = "Remove";
    r.style.margin = '10px';

    para.appendChild(t);
    para.appendChild(r);

    document.getElementsByTagName('li')[list.length - 1].after(para);
    newh2.innerHTML = "You have " + list.length + " items in your shopping cart";

    for (var i = 0; i < list.length; i++) {

      document.getElementsByTagName('li')[i].addEventListener("click", function () {
        this.parentNode.removeChild(this);
        newh2.innerHTML = "You have " + list.length + " items in your shopping cart";
      });
    }

  };


  for (var i = 0; i < list.length; i++) {
    let r = document.createElement('button');
    document.getElementsByTagName('li')[i].appendChild(r);
    r.innerText = "Remove";
    r.style.margin = '10px';

  }


  for (var i = 0; i < list.length; i++) {

    document.getElementsByTagName('li')[i].addEventListener("click", function () {
      this.parentNode.removeChild(this);
      
      newh2.innerHTML = "You have " + list.length + " items in your shopping cart";
    });
  }




};