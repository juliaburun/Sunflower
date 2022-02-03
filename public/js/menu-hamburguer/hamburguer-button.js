window.addEventListener("load", function(){
    const nav = document.querySelector(".main-menu");
    const hamburguerButton = document.querySelector(".hamburguer-buttom");
    const list = document.querySelector(".menu");

    hamburguerButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (nav.classList.contains("open")) {
            nav.classList.remove("open")
        } else {
            nav.classList.add("open")
        }
    })
})
