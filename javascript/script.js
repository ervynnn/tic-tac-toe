const boxTTT = document.querySelectorAll('td');
const row = document.querySelectorAll('tr');

// COUNT OF ALL THE BOX
const count = boxTTT.length;
var occupied = 0;

// EVENT LISTENER FOR EVERY BOX
boxTTT.forEach(td => {
    td.addEventListener('click', handleClick);
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
        }else{
            span.textContent = 'trip_origin';
        }
        td.classList.add('selected');
        checker();
    }
}

// FUNCTION FOR CHECKING IF SOMEONE WON ALREADY
function checker(){

    let spanTD = [];

    for (let i = 0; i < row.length; i++) {
        spanTD[i] = row[i].querySelectorAll('td span');
        if (spanTD[i].length >= 3) {
            if( spanTD[i][0].textContent != "" && 
                spanTD[i][0].textContent === spanTD[i][1].textContent && 
                spanTD[i][1].textContent === spanTD[i][2].textContent){
                removeClicks();
            }
        }
    }
    
    for (let i = 0; i < row.length; i++) {
            if( spanTD[0][i].textContent != "" &&
                spanTD[0][i].textContent === spanTD[1][i].textContent && 
                spanTD[1][i].textContent === spanTD[2][i].textContent){
                removeClicks();
            }
    }

    if( spanTD[0][0].textContent != "" &&
        spanTD[0][0].textContent === spanTD[1][1].textContent && 
        spanTD[1][1].textContent === spanTD[2][2].textContent){
        removeClicks();
    }
    
    if( spanTD[0][2].textContent != "" &&
        spanTD[0][2].textContent === spanTD[1][1].textContent && 
        spanTD[1][1].textContent === spanTD[2][0].textContent){
        removeClicks();
    }
    
    
}

// REMOVING CLICKS AFTER SOMEONE HAS ALREADY WON
function removeClicks(){
    boxTTT.forEach(td => {
        td.removeEventListener('click', handleClick);
        td.classList.add('selected');
    });
}