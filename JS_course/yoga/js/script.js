window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';

    let tab         = document.querySelectorAll('.info-header-tab'),
        info        = document.querySelector('.info-header'),
        tabContent  = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }    

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);  
                        showTabContent(i);   
                        break;       
                }   
            }
        } 
    });

    //Timer
    let deadLine = '2019-05-01';

    function getTimeRemaining(endtime) {
        
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = '00',
            minutes = '00',
            hours = '00';
        
        if (t > 0) {
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours   = Math.floor(t/(1000*60*60));
        }
        
        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
    
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = (t.hours < 10) ? '0' + t.hours : t.hours;
            minutes.textContent = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
            seconds.textContent = (t.seconds < 10) ? '0' + t.seconds : t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('time', deadLine);

    //Modal window
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';     
    });

    btn.forEach(function(item) {
        item.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });
    
});

class Options {

    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height; 
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize; 
        this.textAlign = textAlign;
    }

    createDiv() {

        let newDiv = document.createElement('div'); 

        // newDiv.classList.add('cssText');

        newDiv.style.cssText = `height: ${this.height}px; \
                                width: ${this.width}px; \
                                frontSize: ${this.fontSize}; \
                                text-align: ${this.textAlign}; \
                                background-color: ${this.bg};`;

        newDiv.textContent = "Hello yoga!"; 

        document.body.appendChild(newDiv);
    }  
}

let newObj = new Options(100, 100, 'green', 12, 'center'); 

newObj.createDiv();