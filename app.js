
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Right Arrow pressed')  
    }
})

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
        index()
        // console.log('Left - arrow pressed')  
    }
    else if (e.keyCode == '39') {
       // right arrow
        project()
        // console.log('Right - arrow pressed')  
    }
}

//functions for changing display between the 2 pages
function index(){
    document.getElementById('index').style.display = "block"
    document.getElementById('project').style.display = "none"
}
function project(){
    document.getElementById('index').style.display = "none"
    document.getElementById('project').style.display = "block"
}

//stock the today's Date, not really usefull here
const today = new Date()
let tday = today.getDate()
let tmonth = today.getMonth() + 1
let tyear = today.getFullYear()
console.log('Today Date : ', tday, tmonth, tyear)

// const date = new Date()

// let day = date.getDate()
// let month = date.getMonth() * 29
// let year = (date.getFullYear() - 2003) * 365
// console.log(day, month, year)
// var fvalue = (day + month + year) - 2 
// console.log(fvalue)

// //display age values    
// document.getElementById('age').innerHTML = date.getFullYear() - 2003 + ' years'
// document.getElementById('day').innerHTML = fvalue + ' days'

// https://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript#:~:text=Assuming%20you%20have%20two%20Date,to%20derive%20the%20other%20values.
var date2 = new Date(tyear, tmonth, tday);
var date1 = new Date(2003, 01, 22);
var diff = new Date(date2.getTime() - date1.getTime());

var day = diff.getUTCDate() - 1
var month = (diff.getUTCMonth()) *30
var year = (diff.getUTCFullYear() - 1970) *365

console.log(day, month, year);
console.log((diff.getUTCFullYear() - 1970)* 365 );
console.log(diff.getUTCMonth() * 30);
console.log(diff.getUTCDate() - 1);
var t = day + month + year + 9
console.log(t)
document.getElementById('age').innerHTML = diff.getUTCFullYear() - 1970 + ' years'
document.getElementById('day').innerHTML = t + ' days'

// let day = 22 - date.getDate()
// let month = date.getMonth()
// let year = date.getFullYear() - 2003
// // console.log('day : ' + day);
// // console.log('month : ' + month);
// // console.log('year : ' + year);

// dayvalue = year * 365
// dayvalue = dayvalue + (month * 30)
// dayvalue = dayvalue + day - 3

// console.log('> Age :', year, dayvalue)












// CSS settings for the first open of the page
document.getElementById('project').style.display = "none"
document.getElementById('card-content1').style.display = "none"
document.getElementById('card-content2').style.display = 'block'
document.getElementById('card-content3').style.display = 'none'

document.getElementById('minimized1').style.display = 'flex'
document.getElementById('minimized2').style.display = 'none'
document.getElementById('minimized3').style.display = 'flex'

//card display
function projectdisplay(x){
    //x = the card clicked on
    if(x === 1){
        //display '[ open ]' tag of each project's card
        document.getElementById('minimized1').style.display = 'none'
        document.getElementById('minimized2').style.display = 'flex'
        document.getElementById('minimized3').style.display = 'flex'
        //card's size redefinition
        document.getElementById('card1').style.width = '70%'
        document.getElementById('card2').style.width = '33%'
        document.getElementById('card3').style.width = '33%'
        //content display:none of the other card
        document.getElementById('card-content2').style.display = 'none'
        document.getElementById('card-content3').style.display = 'none'
        //display the content of the choosen card
        setTimeout(() => {  //I delay the display to make the animation more fluid
            document.getElementById('card-content1').style.display = 'block'
        }, 200);
    }
    if(x === 2){
        document.getElementById('minimized1').style.display = 'flex'
        document.getElementById('minimized2').style.display = 'none'
        document.getElementById('minimized3').style.display = 'flex'

        document.getElementById('card1').style.width = '33%'
        document.getElementById('card2').style.width = '70%'
        document.getElementById('card3').style.width = '33%'
        document.getElementById('card-content1').style.display = 'none'
        document.getElementById('card-content3').style.display = 'none'
        setTimeout(() => {  
            document.getElementById('card-content2').style.display = 'block'
        }, 200);
    }
    if(x === 3){
        document.getElementById('minimized1').style.display = 'flex'
        document.getElementById('minimized2').style.display = 'flex'
        document.getElementById('minimized3').style.display = 'none'

        document.getElementById('card1').style.width = '33%'
        document.getElementById('card2').style.width = '33%'
        document.getElementById('card3').style.width = '70%'
        document.getElementById('card-content1').style.display = 'none'
        document.getElementById('card-content2').style.display = 'none'
        setTimeout(() => {  
            document.getElementById('card-content3').style.display = 'block'
        }, 200);
    }
}
