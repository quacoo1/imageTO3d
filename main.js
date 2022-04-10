import './style.css'

const imageInput = document.querySelector('#image-upload')


const canvas = document.querySelector("#canvas-3d")
canvas.innerHTML = `
    <div class="box">
        <div id="front" class="box__face box__face--front">front</div>
        <div id="back" class="box__face box__face--back">back</div>
        <div id="left" class="box__face box__face--left">left</div>
        <div id="right" class="box__face box__face--right">right</div>
        <div id="top" class="box__face box__face--top">top</div>
        <div id="bottom" class="box__face box__face--bottom">bottom</div>
    </div>
`
const rotationOptions = document.querySelector('#boxRotatorOptions')

rotationOptions.innerHTML = `
    <input type="radio" id="front" 
    name="box-face" value="front" checked>
    <label for="front">Front</label>

    <input type="radio" id="bottom"
    name="box-face" value="bottom">
    <label for="bottom">Bottom</label>


    <input type="radio" id="back"
    name="box-face" value="back">
    <label for="back">Back</label>


    <input type="radio" id="top"
    name="box-face" value="top">
    <label for="top">Top</label>
`

const __ = `  <input type="radio" id="left"
name="box-face" value="left">
<label for="left">Left</label>

<input type="radio" id="right"
name="box-face" value="right">
<label for="right">Right</label>
`


const autoRotateSelector = document.querySelector('#auto-rotate')


const box = canvas.querySelector('.box')
let currentClass = ""

const toggleRotationOptionsDisabled = (type) => {
    
    let options = rotationOptions.querySelectorAll('input')

    for(let option of options){
        option.disabled = type
    }
}

const changeSide = () => {
    let checkedOption = rotationOptions.querySelector(':checked')
    let showClass = `show-${checkedOption.value}`

    if( currentClass ) box.classList.remove( currentClass )
    box.classList.add( showClass )
    currentClass = showClass
}

const changeAutoRotateStatus = () => {
    let checked = autoRotateSelector.checked
    toggleRotationOptionsDisabled(checked)

    if(checked){
        
        let showClass = `is-spinning`
        if( currentClass ) box.classList.remove( currentClass )
        box.classList.add( showClass )
        currentClass = showClass
        
    }else{
        let showClass = `show-front`
        if( currentClass )box.classList.remove( currentClass )
        box.classList.add( showClass )
        currentClass = showClass
    }

}

function readImage(callback) {
  var file = imageInput.files.item(0);
  var reader = new FileReader()

  reader.onload = function() {
    callback(reader.result)
  }

  reader.readAsDataURL(file)

}



imageInput.addEventListener('change', () => {
    const image = {url: ""}
    const imageRenderSurfaces = { back:2, top:3, front:0,  bottom:1, }
    readImage( ( result )=>{
        image.url = result
        const faces = box.querySelectorAll('.box__face')
        for (let index = 0; index < faces.length; index++ ){
            const id = faces[index].id

            if( imageRenderSurfaces[id] > 0 || imageRenderSurfaces[id] === 0 ){                
                faces[index].style.backgroundImage = `url(${image.url})`
                
                faces[index].style.backgroundPosition =  `center ${-1*400*imageRenderSurfaces[id]}px`
            }
            

        }
    })
    
})

changeAutoRotateStatus()
changeSide()


rotationOptions.addEventListener( 'change', changeSide )
autoRotateSelector.addEventListener( 'change', changeAutoRotateStatus )