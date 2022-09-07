function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
        }
    }
function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    document.body.innerHTML+= "<p>Welcome Holberton!</p>"
    let button1 = document.createElement('button')
    button1.id = "btn1";
    button1.innerText = 'Spooky';
    document.body.append(button1);
    let button2 = document.createElement('button');
    button2.id = "btn2";
    button2.innerText = 'darkMode';
    document.body.append(button2);
    let button3 = document.createElement('button');
    button3.id = "btn3";
    button3.innerText = 'screamMode';
    document.body.append(button3);

    document.getElementById("btn1").onclick = spooky;
    document.getElementById("btn2").onclick = darkMode;
    document.getElementById("btn3").onclick = screamMode;
}
main();
