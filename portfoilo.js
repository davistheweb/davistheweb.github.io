// function([string1, string2], target id, [color1, color2])
consoleText(['Josiah Davis C.',], 'name', ['#4040e9',]);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  const visible = true;
  const con = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        const usedColor = colors.shift();
        colors.push(usedColor);
        const usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden';
    } else {
      con.className = 'console-underscore';
    }
    visible = !visible;
  }, 400);
}
/*
const typed = new Typed(".multiple-text", {
  strings:["Josiah Davis", "Also Known As Davistheweb"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

*/
