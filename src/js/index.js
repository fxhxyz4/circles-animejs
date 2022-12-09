const block = document.getElementById("body");
for (let i = 1; i < 400; i++) {
  let div = document.createElement("div");
  animationCircle = block.appendChild(div);
  animationCircle.classList.add("circle");
}

let circles = document.querySelectorAll(".circle");
let animaTion = anime({
  targets: circles,
  translateX: ()=> {
    return anime.random(-100,100,-100,100) + "vh";
  },
  translateY: ()=> {
    return anime.random(-100,100,-100,100) + "vh" 
  },
  duration: ()=> {
    return anime.random(300, 5000);
  },
  delay: ()=> {
    return anime.random(400, 900);
  },
  loop: true,
  direction: "alternate",
  easing: "easeOutExpo"
});

document.querySelector('#btn').onclick = animaTion.play; 
document.querySelector('#pse').onclick = animaTion.pause; 
document.querySelector('#res').onclick = animaTion.restart; 

