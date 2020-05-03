let el = "br";

document.querySelector("main").appendChild(document.createElement(el));


function* nextNum(bound) {
    let num = 0;
    while (num < bound) {
        yield num;
        num += 1;
    }
}

function* readFile(file) {
    
}

console.log(...nextNum(12))