let config1;
let config2;
let config3;
let config1Val;
let config2Val;
let config3Val;
window.onkeydown = (key) => {
    if (key.keyCode < 65 || key.keyCode > 90) return;
    char = String.fromCharCode(key.keyCode).toLowerCase();
    main(char);
}
function main(char) {
    config1 = document.getElementById('config1')
    config2 = document.getElementById('config2')
    config3 = document.getElementById('config3')
    config3Val = config3.value.toLowerCase();
    config2Val = config2.value.toLowerCase();
    config1Val = config1.value.toLowerCase();
    increment()
}

function increment() {
    if(letterValue(config3Val) < 26){
        config3.value = numValue(letterValue(config3Val)+1);
    } else {
        config3.value = numValue(1);
        if(letterValue(config2Val) < 26){
            config2.value = numValue(letterValue(config2Val)+1);
        } else {
            config2.value = numValue(1);
            if(letterValue(config1Val) < 26){
                config1.value = numValue(letterValue(config1Val)+1);
            } else {
                config1.value = numValue(1);
            }
        }
    }
}