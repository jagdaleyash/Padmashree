let currentPage = 1;

function moveBox() {
    document.getElementById('no').style.marginLeft = '30px';
    document.getElementById('panda').style.backgroundImage = 'url("Yash Sad.jpg")'; /* Replace with sad panda image */
}

function resetBox() {
    document.getElementById('no').style.marginLeft = '0';
    document.getElementById('panda').style.backgroundImage = 'url("Yash Happy.jpg")'; /* Replace with happy panda image */
}

function nextPage(answer) {
    const content = document.getElementById('content');
    const panda = document.getElementById('panda');

    if (currentPage === 1) {
        if (answer) {
            currentPage++;
            panda.style.backgroundImage = 'url("Yash Happy.jpg")';
            setTimeout(() => {
                content.innerHTML = '<h1>Should we wear color-coordinated outfits?</h1>' +
                    '<div class="options">' +
                    '<div class="option" id="yes" onclick="nextPage(true)">Yes</div>' +
                    '<div class="option" id="no" onmouseover="moveBox()" onmouseout="resetBox()">No</div>' +
                    '</div>';
            }, 1000);
        } else {
            alert('Sorry, you cannot choose "No"');
        }
    } else if (currentPage === 2) {
        if (answer) {
            currentPage++;
            content.innerHTML = '<h1>Should we go to Kharghar and have puchkas?</h1>' +
                '<div class="options">' +
                '<div class="option" id="yes" onclick="nextPage(true)">Yes</div>' +
                '<div class="option" id="no" onmouseover="moveBox()" onmouseout="resetBox()">No</div>' +
                '</div>';
        } else {
            alert('Sorry, you cannot choose "No"');
        }
    } else if (currentPage === 3) {
        if (answer) {
            currentPage++;
            content.innerHTML = '<h1>Did you know this crazy guy who made this stupid website loves you?</h1>' +
                '<div class="options">' +
                '<div class="option" id="yes" onclick="nextPage(true)">Yes</div>' +
                '<div class="option" id="no" onclick="nextPage(false)">No</div>' +
                '</div>';
        } else {
            alert('Sorry, you cannot choose "No"');
        }
    } else if (currentPage === 4) {
        if (answer) {
            currentPage++;
            panda.style.backgroundImage = 'url("Yash Happy.jpg")';
            setTimeout(() => {
                content.innerHTML = '<h1>Cant wait to meet you!</h1>';
            }, 1000);
        } else {
            currentPage++;
            panda.style.backgroundImage = 'url("Yash Sad.jpg")';
            setTimeout(() => {
                content.innerHTML = '<h1>Cant wait to meet you!</h1>';
            }, 1000);
        }
    }
}
