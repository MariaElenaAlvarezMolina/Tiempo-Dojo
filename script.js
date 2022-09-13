function display_alert() {
    alert("Loading weather report...")
}
function dismissCookie() {
    var cookie_element = document.querySelector('.cookies');
    cookie_element.remove();
}
function changeTemperature(elemento_select) {
    var fOc = elemento_select.value;
    console.log(fOc);

    for(var i=1; i<=8; i++) {
        var elemento_temp = document.querySelector('#temp'+i);
        var temperatura = elemento_temp.innerText;
        temperatura = parseInt(temperatura);

        var new_temp = 0

        if(fOc === "C") {
            new_temp = Math.round((temperatura-32) * 5/9);
        }
        else {
            new_temp = Math.round((temperatura*9/5) + 32);
        }

        elemento_temp.innerText = new_temp;
    }
}