var body = document.body; //created a variable to access body element which is the container for div elements


const container = document.createElement('container')

container.style.display = 'flex'
container.style.flexWrap = "wrap"
container.style.width = ''
container.style.height = ''
body.appendChild(container)



function loopBoxes(){
    var i = 1;
    while (i < 64) {
        if (i % 2 === 0) {
            makeSquareOne() //red for even
        } else {
            makeSquareTwo() //checkerboard starts with black so 1 (odd)
    }
    i++
}   

}


function makeSquareOne() { //created a box 
    const div = document.createElement('div') //box is a div
    div.className = 'square' //attach square for div's class name
    div.style.height = "11.1%" //rule from readme original at pixels and when i changed to % nothing populated
    div.style.width = "11.1%" //rule from readme
    div.style.background = "red" 
    div.style.float = "left"  //rule from readme
    div.style.paddingBottom = "11.1%"  //rule from readme
    container.appendChild(div) //appending (adding) div element to body element
}

function makeSquareTwo() {
const divTwo = document.createElement('div')
    divTwo.className = 'squareTwo'
    divTwo.style.height = "11.1%"
    divTwo.style.width = "11.1%"
    divTwo.style.background = "black"
    divTwo.style.float = "left"
    divTwo.style.paddingBottom = "11.1%"
    container.appendChild(divTwo)
}


loopBoxes()



//new branch randomcolors
var containerTwo = document.createElement('containerTwo');
containerTwo.style.display = 'flex'
containerTwo.style.flexWrap = "wrap"
containerTwo.style.width = ''
containerTwo.style.height = ''
body.appendChild(containerTwo)

function createBoxes(){
    for(let i = 1; i < 64; i++) {
        coloredSquare()
    }
}



function coloredSquare() {
    const divT = document.createElement('div')
    // div.classList.add('square')
    divT.className = 'newSquare'
    divT.style.height = "11.1%"
    divT.style.width = "11.1%"
    divT.style.background = 'purple'
    divT.style.float = "left"
    divT.style.paddingBottom = "11.1%"
    containerTwo.appendChild(divT)
}

  


createBoxes()