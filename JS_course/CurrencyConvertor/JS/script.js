let inputRub    = document.getElementById('rub'),
    inputValue  = document.getElementById('currency-input'),
    selectorCur = document.querySelector('.currency');

function evaluateCurrency() {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass); 

    request.open('GET', 'JS/currency.json');
    request.setRequestHeader('Content-type', 'application/json; charset: utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
    
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            switch (selectorCur.value) {
                case 'USD':
                    inputValue.value = (inputRub.value / data.usd).toFixed(2);
                    break;
                case 'EUR':
                    inputValue.value = (inputRub.value / data.eur).toFixed(2);
                    break;
                case 'CHF':
                    inputValue.value = (inputRub.value / data.chf).toFixed(2);
                    break;
                default:
                    inputValue.value = 'currency pick';
                    break;
            }

        } else {
            inputValue.value = "ERROR";
        }
    })   
}

inputRub.addEventListener('input', evaluateCurrency);
selectorCur.addEventListener('change', evaluateCurrency);
