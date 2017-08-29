document.getElementById("button").addEventListener("click", getName);
document.getElementById("getForm").addEventListener("submit", getName);

function getName(e) {
    e.preventDefault();

    var name = document.getElementById("name1").value;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'process.php?name='+name, true);

    xhr.onload = function() {
        if (this.status == 200){
            console.log(this.responseText);
        }
    }

    xhr.send()
}