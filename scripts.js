
let add = document.querySelector('#web_botton');
let web_text = document.querySelector('#web_text');

// listen click events
add.addEventListener("click", function () {
    if (web_text.innerHTML == "what?") {
        web_text.innerHTML = 'Hello, web!'
    }
    else {
        web_text.innerHTML = 'what?'
    }
})
