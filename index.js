let yb = document.getElementById("yes_button")
let nb = document.getElementById("no_button")
let preR = document.getElementById("pre_response")
let postR = document.getElementById("post_response")
let inc = 5

noClicked = () => {
  let currentFS = window.getComputedStyle(yb).getPropertyValue('font-size');
  let newFS = parseInt(currentFS.split("p")[0])+ 4 + ++inc + "px"
  yb.style.fontSize = newFS
}

yesClicked = () => {
  animate();
  animate();
  preR.style.display = "none"
  postR.style.display = "inline"
}

var container = document.getElementById('animate');
var emoji = ['❤️','🤎','💘','💓','💗','💖','😻','💞','🤍','💜','🧡','💚','💕','😍','🥰','💑','💙','💛'];
var circles = [];

for (var i = 0; i < 15; i++) {
  addCircle(i * 100, [10 + 0, 900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 100, [10 + 0, -900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 100, [10 - 200, -900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 100, [10 + 200, 900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 100, [10 - 400, -900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 100, [10 + 400, 900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 100, [10 - 600, -900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 100, [10 + 600, 900], emoji[Math.floor(Math.random() * emoji.length)]);
}



function addCircle(delay, range, color) {
  setTimeout(function() {
    var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
      x: -0.15 + Math.random() * 0.3,
      y: 1 + Math.random() * 1
    }, range);
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > 800) {
      _this.y = 80 + Math.random() * 4;
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

function animate() {
  for (var i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

