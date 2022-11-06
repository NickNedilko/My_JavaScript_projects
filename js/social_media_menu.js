const refs = {
  menuEl: document.querySelector(".menu"),
  menuTextEl: document.querySelector(".menu p"),
  socialListEl: document.querySelector(".social-lists"),
  iconEl: document.querySelector(".fas"),
  liEls: document.querySelectorAll(".social-lists li"),
};

const { menuEl, socialListEl, menuTextEl, iconEl, liEls } = refs;

menuEl.addEventListener("click", onClickMenu);

function onClickMenu() {
  socialListEl.classList.toggle("hide");
  iconEl.classList.toggle("rotate");
}

liEls.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    menuTextEl.innerHTML = liEl.innerHTML;
    socialListEl.classList.add("hide");
    iconEl.classList.toggle("rotate");
  });
});

function betterThanAverage(classPoints, yourPoints) {
  let allPoints = 0;
  for (const point of classPoints) {
    console.log(point);
    allPoints += point;
  }
  console.log(allPoints);
  let avPoint = allPoints / classPoints.length;
  return avPoint > yourPoints ? "false" : "true";
}

console.log(betterThanAverage([2, 3], 5));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// betterThanAverage([2, 3], 5);

function repeatStr(n, s) {
  let i = "";
  for (let i = 0; i < n; i += 1) {
    console.log(i);
    i += s;
  }
  return i;
}

console.log(repeatStr(3, "*"));

function openOrSenior(data) {
  let members = [];
  for (const oneMember of data) {
    if ((oneMember[0] >= 55) & (oneMember[1] > 7)) {
      members.push("Senior");
    } else {
      members.push("Open");
    }
  }
  return members;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);

function digitize(n) {
  let x = String(n)
    .split("")
    .map((y) => +y);
  return x.reverse();
}

console.log(digitize(352031));

console.log(digitize(0));

let x = "return";

let y = x.reverse();
console.log(y);
