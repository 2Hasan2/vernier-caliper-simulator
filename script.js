let contant = document.createElement("div");
contant.setAttribute("class", "contant");
document.body.appendChild(contant);
let caliper = document.createElement("div");
caliper.setAttribute("class", "vernier-caliper");
contant.appendChild(caliper);
let upScale = document.createElement("div");
upScale.setAttribute("class", "up-scale");
caliper.appendChild(upScale);
let downScale = document.createElement("div");
downScale.setAttribute("class", "down-scale");
caliper.appendChild(downScale);
for (i = 0; i <= 200; i++) {
    let span = document.createElement("span");
    span.setAttribute("id", `${i}cm`);
    let cm = document.createElement("span");
    if (i % 5 == 0) {
        if (i % 10 == 0) {
            cm.innerHTML = `${i/10}`;
            span.setAttribute("class", "cm-mark-10");
            cm.setAttribute("class", "cm-num-10");
            span.appendChild(cm);
            upScale.appendChild(span);
        } else {
            cm.innerHTML = `${i/10}`;
            span.setAttribute("class", "cm-mark-5");
            cm.setAttribute("class", "cm-num");
            span.appendChild(cm);
            upScale.appendChild(span);
        }
    } else {
        cm.innerHTML = `${i%10}`;
        span.setAttribute("class", "cm-mark");
        cm.setAttribute("class", "cm-num");
        span.appendChild(cm);
        upScale.appendChild(span);
    }
};
for (i = 0; i <= 20; i++) {
    let mark = document.createElement("div");
    mark.setAttribute("id", `${i}cm`);
    let cm = document.createElement("span");
    if (i % 2 == 0) {
        cm.innerHTML = `${i/2}`;
        mark.setAttribute("class", "mark");
        cm.setAttribute("class", "cm-num-down");
    } else {
        cm.innerHTML = `${i/2}`;
        mark.setAttribute("class", "mark-5");
        cm.setAttribute("class", "cm-num-down-5");
    }
    mark.appendChild(cm);
    downScale.appendChild(mark);
};
let input = document.createElement("input");
input.setAttribute("class", "input");
input.setAttribute("type", "number");
input.setAttribute("step", "0.05");
input.style.margin = "10px auto";
contant.appendChild(input);
input.addEventListener('change', function() {
    if (input.value == leftPos / 4) {
        input.style.background = 'green'
    } else {
        input.style.background = 'red'
    }
});
let randomBTN = document.createElement("button");
randomBTN.innerHTML = "Random";
contant.appendChild(randomBTN);
randomBTN.addEventListener("click", function() {
    leftPos = 4 * (Math.floor((Math.floor(Math.random() * 3000) + 1)) * 0.05).toFixed(2);
    downScale.style.left = `${leftPos}px`;
    let ww = window.innerWidth;
    caliper.style.translate = `${-leftPos+320}px`
});