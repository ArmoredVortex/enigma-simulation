let config1;
let config2;
let config3;
let config1Val;
let config2Val;
let config3Val;
let output;
let length = 0;

function addSpace() {
    output.innerHTML += ' '
}

function increment() {
    if(letterValue(config3Val) < 26){
        config3.value = numValue(letterValue(config3Val)+1);
        config3Val = config3.value
    } else {
        config3.value = numValue(1);
        config3Val = config3.value
        if(letterValue(config2Val) < 26){
            config2.value = numValue(letterValue(config2Val)+1);
            config2Val = config2.value
        } else {
            config2.value = numValue(1);
            config2Val = config2.value
            if(letterValue(config1Val) < 26){
                config1.value = numValue(letterValue(config1Val)+1);
                config1Val = config1.value
            } else {
                config1.value = numValue(1);
                config1Val = config1.value
            }
        }
    }
}

window.onkeydown = (key) => {
    var elm1 = document.getElementById('config1');
    var elm2 = document.getElementById('config2');
    var elm3 = document.getElementById('config3');
    var focus1 = (document.activeElement === elm1);
    var focus2 = (document.activeElement === elm2);
    var focus3 = (document.activeElement === elm3);
    if(focus1 || focus2 || focus3){
        return;
    }
    if (key.keyCode < 65 || key.keyCode > 90) return;
    char = String.fromCharCode(key.keyCode).toLowerCase();
    main(char);
}
function rotorVal(rotor,configVal,char) {
    let index = letterValue(configVal.toLowerCase()) + char - 1;
    if(index > 26){
        index -= 26;
    }
    let indexVal = rotor[index]
    let outVal = indexVal - letterValue(configVal.toLowerCase()) + 1;
    if(outVal < 1){
        outVal += 26;
    }
    return outVal;
}
function reverseRotorVal(rotor,configVal,char) {
    index = letterValue(configVal.toLowerCase()) + char -1;
    if(index > 26){
        index -= 26;
    }
    indexVal = getKeyByValue(rotor,index);
    let outVal = indexVal - letterValue(configVal.toLowerCase()) + 1;
    if(outVal < 1){
        outVal += 26;
    }
    return outVal;
}    
function main(char) {
    output = document.getElementById('output-text');
    config1 = document.getElementById('config1')
    config2 = document.getElementById('config2')
    config3 = document.getElementById('config3')
    config3Val = config3.value.toLowerCase();
    config2Val = config2.value.toLowerCase();
    config1Val = config1.value.toLowerCase();
    increment()
    let rotor3Out = rotorVal(rotor3,config3Val,letterValue(char));
    let rotor2Out = rotorVal(rotor2,config2Val,rotor3Out);
    let rotor1Out = rotorVal(rotor1,config1Val,rotor2Out);
    let reflectorOut = reflector[rotor1Out];
    let reverseRotor1Out = reverseRotorVal(rotor1,config1Val,reflectorOut);
    let reverseRotor2Out = reverseRotorVal(rotor2,config2Val,reverseRotor1Out);
    let reverseRotor3Out = reverseRotorVal(rotor3,config3Val,reverseRotor2Out);
    output.innerHTML += numValue(reverseRotor3Out);
    length += 1;
    if(length == 5){
        length = 0;
        addSpace();
    }
}

function clear() {
    console.log('hi')
}