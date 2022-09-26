const $buttonCLick = document.getElementById('buttonCLick');
const $body = document.getElementById('body');

$buttonCLick.addEventListener('click', function(e){
    let hexaColor = '#'
    e.defaultPrevented;
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * 16)
        switch(random){
            case 0:
                hexaColor = hexaColor + "A"
            break;
            case 1:
                hexaColor = hexaColor + "B"
            break;
            case 2:
                hexaColor = hexaColor + "C"
            break;
            case 3:
                hexaColor = hexaColor + "D"
            break;
            case 4:
                hexaColor = hexaColor + "E"
            break;
            case 5:
                hexaColor = hexaColor + "F"
            break;
            case 6:
                hexaColor = hexaColor + "0"
            break;
            case 7:
                hexaColor = hexaColor + "1"
            break;
            case 8:
                hexaColor = hexaColor + "2"
            break;
            case 9:
                hexaColor = hexaColor + "3"
            break;
            case 10:
                hexaColor = hexaColor + "4"
            break;
            case 11:
                hexaColor = hexaColor + "5"
            break;
            case 12:
                hexaColor = hexaColor + "6"
            break;
            case 13:
                hexaColor = hexaColor + "7"
            break;
            case 14:
                hexaColor = hexaColor + "8"
            break;
            case 15:
                hexaColor = hexaColor + "9"
            break;
        }
    console.log(hexaColor);
    }
    let ntcMatch = ntc.name(hexaColor);
    console.log(ntcMatch[0]);
    console.log(ntcMatch[1]);
    document.getElementById('span1').innerHTML = hexaColor;
    document.getElementById('span2').innerHTML = ntcMatch[1];
    $body.style.backgroundColor = hexaColor;
})