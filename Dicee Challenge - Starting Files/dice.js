var rNum1 = Math.floor(Math.random() * 6) +1
var rDiceImg = 'dice'+ rNum1+ '.png'
var rImageSource = 'images/'+ rDiceImg
var img1 =document.querySelectorAll('img')[0]
img1.setAttribute('src', rImageSource )

var rNum2 = Math.floor(Math.random() * 6) +1
var rDiceImg2 = 'dice'+ rNum2+ '.png'
var rImageSource2 = 'images/'+ rDiceImg2
var img2 =document.querySelectorAll('img')[1]
img2.setAttribute('src', rImageSource2 ) 

if (rNum1>rNum2) {
    document.querySelector('h1').innerHTML='Player 1 won'
} else if(rNum2>rNum1) {
     document.querySelector('h1').innerHTML='Player 2 won'
}
else{
 document.querySelector('h1').innerHTML='draw'
}