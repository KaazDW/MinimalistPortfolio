
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


const date = new Date()

let day = 22 - date.getDate()
let month = date.getMonth()
let year = date.getFullYear() - 2003
// console.log('day : ' + day);
// console.log('month : ' + month);
// console.log('year : ' + year);

dayvalue = year * 365
dayvalue = dayvalue + (month * 30)
dayvalue = dayvalue + day - 3

console.log('> Age :', year, dayvalue)

//display age values
document.getElementById('age').innerHTML = year + ' years'
document.getElementById('day').innerHTML = dayvalue + ' days'



document.getElementById('project').style.display = "none"
document.getElementById('card-content1').style.display = "none"
document.getElementById('card-content2').style.display = 'block'
document.getElementById('card-content3').style.display = 'none'

function projectdisplay(x){
    //x = the card clicked on
    if(x === 1){
        //size redefinition
        document.getElementById('card1').style.width = '70%'
        document.getElementById('card2').style.width = '33%'
        document.getElementById('card3').style.width = '33%'
        //content display none of the other card
        document.getElementById('card-content2').style.display = 'none'
        document.getElementById('card-content3').style.display = 'none'
        //display the content of the actual choosen card
        setTimeout(() => {  
            document.getElementById('card-content1').style.display = 'block'
        }, 200);
    }
    if(x === 2){
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
