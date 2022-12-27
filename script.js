<script>
var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
})

function spaceFunction() {
    document.getElementById("start").innerHTML = "Loading...";
}

function startFunction() {
    document.getElementById("start").innerHTML = "Press Enter"

}
</script>
