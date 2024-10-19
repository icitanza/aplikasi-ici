const endPoint = "http://192.168.100.132"

function getDapur() {
    fetch(endPoint + '/dapur', {
        method: 'GET',
    }).then(response => response.text()).then(result => {
        if (result == 'ON') {
            dapurLed.style.background = 'green';
            dapurLed.innerHTML = 'Turn Off';
            dapurLedImage.src = './assets/led-on.png';
        } else {
            dapurLed.style.background = 'blueviolet';
            dapurLedImage.src = './assets/led-off.png';
        }
    });
}

function getKamarBawah() {
    fetch(endPoint + '/kamarBawah', {
        method: 'GET',
    }).then(response => response.text()).then(result => {
        if (result == 'ON') {
            kamarBawahLed.style.background = 'green';
            kamarBawahLed.innerHTML = 'Turn Off';
            kamarBawahLedImage.src = './assets/led-on.png';
        } else {
            kamarBawahLed.style.background = 'blueviolet';
            kamarBawahLedImage.src = './assets/led-off.png';
        }
    });
}

function getKamarAtas() {
    fetch(endPoint + '/kamarAtas', {
        method: 'GET',
    }).then(response => response.text()).then(result => {
        if (result == 'ON') {
            kamarAtasLed.style.background = 'green';
            kamarAtasLed.innerHTML = 'Turn Off';
            kamarAtasLedImage.src = './assets/led-on.png';
        } else {
            kamarAtasLed.style.background = 'blueviolet';
            kamarAtasLedImage.src = './assets/led-off.png';
        }
    });
}
function getRuangTamu() {
    fetch(endPoint + '/ruangTamu', {
        method: 'GET',
    }).then(response => response.text()).then(result => {
        if (result == 'ON') {
            ruangTamuLed.style.background = 'green';
            ruangTamuLed.innerHTML = 'Turn Off';
            ruangTamuLedImage.src = './assets/led-on.png';
        } else {
            ruangTamuLed.style.background = 'blueviolet';
            ruangTamuLedImage.src = './assets/led-off.png';
        }
    });
}

function getRuangTamu() {
    fetch(endPoint + '/sanyo', {
        method: 'GET',
    }).then(response => response.text()).then(result => {
        if (result == 'ON') {
            sanyo.style.background = 'green';
            sanyo.innerHTML = 'Turn Off';
            sanyoImage.src = './assets/led-on.png';
        } else {
            sanyo.style.background = 'blueviolet';
            sanyoImage.src = './assets/led-off.png';
        }
    });
}


function setDapur() {
    fetch(endPoint + '/dapur', {
        method: 'POST',
    }).then(response => response.text()).then(() => location.reload());
    // dapurLed.style.background = 'red';
    // dapurLedImage.src = './assets/led-on.png';
}
function setKamarBawah() {
    fetch(endPoint + '/kamarBawah', {
        method: 'POST',
    }).then(response => response.text()).then(() => location.reload());
    // kamarBawahLed.style.background = 'red';
    // kamarBawahLedImage.src = './assets/led-on.png';
}
function setKamarAtas() {
    fetch(endPoint + '/kamarAtas', {
        method: 'POST',
    }).then(response => response.text()).then(() => location.reload());
    // kamarAtasLed.style.background = 'red';
    // kamarAtasLedImage.src = './assets/led-on.png';
}

function setRuangTamu() {
    fetch(endPoint + '/ruangTamu', {
        method: 'POST',
    }).then(response => response.text()).then(() => location.reload());
    // ruangTamuLed.style.background = 'red';
    // ruangTamuLedImage.src = './assets/led-on.png';
}

function setSanyo() {
    fetch(endPoint + '/sanyo', {
        method: 'POST',
    }).then(response => response.text()).then(() => location.reload());
    // ruangTamuLed.style.background = 'red';
    // ruangTamuLedImage.src = './assets/led-on.png';
}

getDapur();
getKamarBawah();
getKamarAtas();
getRuangTamu();
getSanyo();