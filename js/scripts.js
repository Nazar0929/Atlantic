var modal_content = document.getElementById("myModal");
var text = document.getElementById("openModalBtn")
var span = document.getElementsByClassName("close")[0]
text.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}
 