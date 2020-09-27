// install npm i @vue/reactivty
import {
  ref,
  reactive,
  effect,
} from "./node_modules/@vue/reactivity/dist/reactivity.esm-browser.js";

// vue2 收集依赖 触发依赖，object.defineProperty get set 函数触发

// vue3 effect 函数来收集依赖 触发依赖

//响应式最简模型

// debugger;
//让b 成为一个变量
let a = ref(10);
let b = 0;

effect(() => {
  console.log(b);
  b = a.value * 10;
});

a.value = 30;

console.log(b);

//让b 成为一个视图
// 响应式视图 effect
function render(context) {
  // body
  // af
  effect(() => {
    document.querySelector("#app").innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML = context.texture.value;

    const btn = document.createElement("button");
    btn.innerHTML = "click";
    btn.onclick = context.clickEvent;

    document.querySelector("#app").append(p);
    document.querySelector("#app").append(btn);
  });
}

function setup() {
  const texture = ref("Ellen");

  function clickEvent() {
    texture.value = "Shally";
  }
  return {
    texture,
    clickEvent,
  };
}

function mountApp() {
  render(setup());
}

mountApp();
