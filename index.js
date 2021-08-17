
//calculator function code
const keys = document.getElementById("keypad").children;
const screen = document.getElementById("screen-input");
keys[0].addEventListener('click', function (event) {
  screen.value += keys[0].innerHTML;
});
keys[1].addEventListener('click', function (event) {
  screen.value += keys[1].innerHTML;
});
keys[2].addEventListener('click', function (event) {
  screen.value += keys[2].innerHTML;
});
keys[3].addEventListener('click', function (event) {
  str = screen.value.toString();
  screen.value = str.substring(0, str.length - 1);
});
keys[4].addEventListener('click', function (event) {
  screen.value += keys[4].innerHTML;
});
keys[5].addEventListener('click', function (event) {
  screen.value += keys[5].innerHTML;
});
keys[6].addEventListener('click', function (event) {
  screen.value += keys[6].innerHTML;
});
keys[7].addEventListener('click', function (event) {
  screen.value += keys[7].innerHTML;
});
keys[8].addEventListener('click', function (event) {
  screen.value += keys[8].innerHTML;
});
keys[9].addEventListener('click', function (event) {
  screen.value += keys[9].innerHTML;
});
keys[10].addEventListener('click', function (event) {
  screen.value += keys[10].innerHTML;
});
keys[11].addEventListener('click', function (event) {
  screen.value += keys[11].innerHTML;
});
keys[12].addEventListener('click', function (event) {
  screen.value += keys[12].innerHTML;
});
keys[13].addEventListener('click', function (event) {
  screen.value += keys[13].innerHTML;
});
keys[14].addEventListener('click', function (event) {
  screen.value += keys[14].innerHTML;
});
keys[15].addEventListener('click', function (event) {
  screen.value += '*';
});
keys[16].addEventListener('click', function (event) {
  screen.value = "";
});
keys[17].addEventListener('click', function (event) {
  try {
    screen.value = eval(screen.value);
  }
  catch (err) {
    screen.value = "ERROR!!";
  }
});

//theme change code
const r = document.querySelector(':root');
const theme1 = document.getElementById("theme1-btn");
const theme2 = document.getElementById("theme2-btn");
const theme3 = document.getElementById("theme3-btn");

theme1.addEventListener('click', function () {
  r.style.setProperty('--main-bg', '#3a4764');
  r.style.setProperty('--keypad-bg', '#232c43');
  r.style.setProperty('--screen-bg', '#182034');
  r.style.setProperty('--del-key-bg', '#637097');
  r.style.setProperty('--del-key-shadow', '#404e72');
  r.style.setProperty('--equal-key-bg', '#d03f2f');
  r.style.setProperty('--equal-key-shadow', ' #93261a');
  r.style.setProperty('--key-bg', '#eae3dc');
  r.style.setProperty('--key-shadow', '#b4a597');
  r.style.setProperty('--text-color', '#ffffff');
  r.style.setProperty('--text-color2', '#444b5a');

})
theme2.addEventListener('click', function () {

  r.style.setProperty('--main-bg', 'hsl(0, 0%, 90%)');
  r.style.setProperty('--keypad-bg', 'hsl(0, 5%, 81%)');
  r.style.setProperty('--screen-bg', 'hsl(0, 0%, 93%)');
  r.style.setProperty('--del-key-bg', 'hsl(185, 42%, 37%)');
  r.style.setProperty('--del-key-shadow', 'hsl(185, 58%, 25%)');
  r.style.setProperty('--equal-key-bg', 'hsl(25, 98%, 40%)');
  r.style.setProperty('--equal-key-shadow', ' hsl(25, 99%, 27%)');
  r.style.setProperty('--key-bg', 'hsl(45, 7%, 89%)');
  r.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)');
  r.style.setProperty('--text-color', '#ffffff');
  r.style.setProperty('--text-color2', 'hsl(60, 10%, 19%)');


})
theme3.addEventListener('click', function () {

  r.style.setProperty('--main-bg', 'hsl(268, 75%, 9%)');
  r.style.setProperty('--keypad-bg', 'hsl(268, 71%, 12%)');
  r.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)');
  r.style.setProperty('--del-key-bg', 'hsl(281, 89%, 26%)');
  r.style.setProperty('--del-key-shadow', 'hsl(285, 91%, 52%)');
  r.style.setProperty('--equal-key-bg', 'hsl(176, 100%, 44%)');
  r.style.setProperty('--equal-key-shadow', ' hsl(177, 92%, 70%)');
  r.style.setProperty('--key-bg', 'hsl(268, 47%, 21%)');
  r.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)');
  r.style.setProperty('--text-color', '#ffffff');
  r.style.setProperty('--text-color2', 'hsl(52, 100%, 62%)');
})
