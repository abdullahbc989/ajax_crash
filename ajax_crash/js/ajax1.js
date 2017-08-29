document.getElementById("button").addEventListener('click', loadText());
p = document.getElementById("p");

function loadText() {
    // Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN, type, url/file, async
    xhr.open('GET', 'sample2.txt', true);

    console.log('Readystate = ', xhr.readyState);

    xhr.onprogress = function() {
        console.log('Readystate = ', this.readyState);
    }

    // Optional - Used for loaders
    xhr.onload = function() {
        if (this.status == 200) {
            console.log('Readystate = ', this.readyState);
            p.innerHTML = (this.responseText);
        } else if (this.status == 404) {
            p.innerHTML = 'Not Found - 404';
        }
    }

    xhr.onerror = function() {
        console.log('Request Error. . .');
    }

    //xhr.onreadystatechange = function() {
    //    if (this.readyState == 4 && this.status == 200) {
    //        p.innerHTML = (this.responseText);
    //    }
    //}

    // Sends request
    xhr.send();
}

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"