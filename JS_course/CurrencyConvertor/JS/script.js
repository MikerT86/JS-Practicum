'use strict';

let inputRub    = document.getElementById('rub'),
    inputValue  = document.getElementById('currency-input'),
    selectorCur = document.querySelector('.currency');

let promiseHandler = function() {

    let evaluateCurrency = function() {
    
        let promise = new Promise((resolve, reject) => {
        
            let request = new XMLHttpRequest();
        
            request.open('GET', 'JS/currency.json');
            request.setRequestHeader('Content-type', 'application/json; charset: utf-8');
        
            request.onload = () => {
                resolve(JSON.parse(request.response));
            };
            request.onerror = () => {
                reject('error');
            };
    
            request.send();
    
        });
    
        return promise;
        
    };     

    evaluateCurrency()
        .then(data => {
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
        })
        .then(() => {console.log(`За ${inputRub.value} RUB, вы получите ${inputValue.value} ${selectorCur.value}`)})
        .catch(error => {
            inputValue.value = error;   
        });
};

inputRub.addEventListener('change', promiseHandler);
selectorCur.addEventListener('change', promiseHandler);
