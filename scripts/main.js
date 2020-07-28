const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
myHeading.onclick = function() {
    myHeading.textContent = prompt('What do you want to display in this heading?');
}

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let imgSrc = myImage.getAttribute('src');
    if (imgSrc === "./images/firefox-icon.png") {
        myImage.setAttribute('src','./images/firefox-icon2.png');
        myImage.setAttribute('alt','3d picture of a gradient-colored fox embracing, from below, a purple circle that represents the world');    
    } else {
        myImage.setAttribute('src','./images/firefox-icon.png');
    }
}
