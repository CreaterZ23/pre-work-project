const h1 = document.getElementsByClassName('header')[0];

function addHeader() {
    alert('you created another line of text');

    const h2 = document.createElement('h2');
    h2.textContent = "This content added by JavaScript";
    h2.classList.add('h3')
    document.querySelector('body').appendChild(h2);
}

h1.addEventListener('click', addHeader);




function addSecondHeader() {
    console.log('added header');
    alert('you created another line of text');

    const h3 = document.createElement('h3');
    h3.textContent = "This content added by JavaScript";
    document.querySelector('body').appendChild(h3);
}

const h2 = document.getElementsByClassName('h3')[0];

h1.addEventListener('click', addSecondHeader);