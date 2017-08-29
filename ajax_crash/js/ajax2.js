document.getElementById("button1").addEventListener("click", loadUser);
document.getElementById("button2").addEventListener("click", loadUsers);
userDiv = document.getElementById("user");
usersDiv = document.getElementById("users");

function loadUser() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'user.json', true);

    xhr.onload = function() {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = '';

            output += '<ul><li>ID: ' + user.id + '</li>' + '<li>Name: ' + user.name + '</li>'
            + '<li>Email: ' + user.email + '</li></ul>';

            userDiv.innerHTML = output;
        }
    }

    xhr.send();
}

function loadUsers() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'users.json', true);

    xhr.onload = function() {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            var output = '';
            for(var i in users) {
                output += '<ul><li>ID: ' + users[i].id + '</li>' + '<li>Name: ' + users[i].name + '</li>'
                + '<li>Email: ' + users[i].email + '</li></ul>';
            }

            usersDiv.innerHTML = output;
        }
    }

    xhr.send();
}