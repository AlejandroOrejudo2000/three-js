var proyectButtons = document.getElementsByClassName("pr-item");
var selectedProyectButton = document.querySelector(".pr-item", ".active");
for (var i = 0; i < proyectButtons.length; i++) {
    proyectButtons[i].addEventListener("click",
        function () {
            selectedProyectButton.classList.remove("active")
            this.classList.add("active");
            selectedProyectButton = this;
        })
}