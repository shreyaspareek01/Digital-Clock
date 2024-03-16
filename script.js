setInterval(function () {
  let date = new Date();
  const clock = document.querySelector(".clock");
  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");
  let a = date.getHours();
  let b = date.getMinutes();
  let c = date.getSeconds();
  clock.textContent = `${a}:${b}:${c}`;
}, 1000);
