const boxTTT = document.querySelectorAll('td');
const row = document.querySelectorAll('tr');
const divHeader = document.querySelector('header .div-player-info');
const divFooter = document.querySelector('footer .div-player-info');
const player2Score = document.querySelector('header .div-player-info .score p');
const player1Score = document.querySelector('footer .div-player-info .score p');

// COUNT OF ALL THE BOX
const count = boxTTT.length;
var occupied = 0;
var win = false;

// EVENT LISTENER FOR EVERY BOX
boxTTT.forEach(td => {
    td.addEventListener('click', handleClick);

    td.addEventListener('mouseenter', onMouseEnter);
    
    td.addEventListener('mouseleave', onMouseLeave);

});

// FUNCTION FOR CLICK HANDLING OF TIC TAC TOE
function handleClick(event){
    var td = event.currentTarget;

    if (td.classList.contains('selected')) {
    } else {
        occupied++;
        span = td.querySelector('span');
        if(occupied % 2 != 0){
            span.textContent = 'close';
            span.style.color = 'rgb(255, 255, 255)';
        }else{
            span.textContent = 'trip_origin';
            span.style.color = 'rgb(252, 163, 17)';
        }
        td.removeEventListener('mouseenter', onMouseEnter);
        td.removeEventListener('mouseleave', onMouseLeave);
        td.classList.add('selected');
        checker();
        if(win == false && occupied < 9){
            if(occupied %2 != 0){
            divHeader.style.border = '0rem solid rgba(252, 163, 17, 0.8)';
            divHeader.style.borderWidth = '0 0.1rem 0.3rem 0.1rem';
            divFooter.style.border = 0;
            }else{
                divFooter.style.border = '0.3rem solid rgba(255, 255, 255, 0.8)';
                divFooter.style.borderWidth = '0.3rem 0.1rem 0 0.1rem';
                divHeader.style.border = 0;
            }
        }else if(occupied == 9){
            divFooter.style.border = 0;
            divHeader.style.border = 0;
        }
    }
}

// FUNCTION FOR CHECKING IF SOMEONE WON ALREADY
function checker(){

    let spanTD = [];

    // CHECKING HORIZONTAL
    for (let i = 0; i < row.length; i++) {
        spanTD[i] = row[i].querySelectorAll('td span');
        if (spanTD[i].length >= 3) {
            if( spanTD[i][0].textContent != "" && 
                spanTD[i][0].textContent === spanTD[i][1].textContent && 
                spanTD[i][1].textContent === spanTD[i][2].textContent){
                removeClicks(spanTD[i][0]);
            }
        }
    }
    
    // CHECKING VERTICAL
    for (let i = 0; i < row.length; i++) {
            if( spanTD[0][i].textContent != "" &&
                spanTD[0][i].textContent === spanTD[1][i].textContent && 
                spanTD[1][i].textContent === spanTD[2][i].textContent){
                removeClicks(spanTD[0][i]);
            }
    }

    // CHECKING DIAGONALS
    if( spanTD[0][0].textContent != "" &&
        spanTD[0][0].textContent === spanTD[1][1].textContent && 
        spanTD[1][1].textContent === spanTD[2][2].textContent){
        removeClicks(spanTD[0][0]);
    }
    
    if( spanTD[0][2].textContent != "" &&
        spanTD[0][2].textContent === spanTD[1][1].textContent && 
        spanTD[1][1].textContent === spanTD[2][0].textContent){
        removeClicks(spanTD[0][2]);
    }
    
    
}

// REMOVING CLICKS AFTER SOMEONE HAS ALREADY WON
function removeClicks(winner){
    win = true;
    if(winner.textContent === 'trip_origin'){
        player2Score.textContent++;
    }else{
        player1Score.textContent++;
    }
    boxTTT.forEach(td => {
        td.removeEventListener('click', handleClick);
        td.classList.add('selected');
        td.removeEventListener('mouseenter', onMouseEnter);
        td.removeEventListener('mouseleave', onMouseLeave);
    });
}

// WHENEVER THE MOUSE IS HOVER ON THE TIC TAC TOE GAME
function onMouseEnter(event){
    var td = event.currentTarget;

    span = td.querySelector('span');
    if(occupied % 2 == 0){
        span.textContent = 'close';
        span.style.color = 'rgb(255, 255, 255)';
    }else{
        span.textContent = 'trip_origin';
        span.style.color = 'rgb(252, 163, 17)';
    }
}

// WHENEVER THE MOUSE IS HOVER OFF THE TIC TAC TOE GAME
function onMouseLeave(event) {
    var td = event.currentTarget;

    span = td.querySelector('span');
    span.textContent = '';
}