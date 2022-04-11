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

    <input type="radio" id="left"
    name="box-face" value="left">
    <label for="left">Left</label>

    <input type="radio" id="right"
    name="box-face" value="right">
    <label for="right">Right</label>
`

const changeSide = (box) => {
    let checkedOption = rotationOptions.querySelector(':checked')
    let showClass = `show-${checkedOption.value}`

    if( box.class ) box.element.classList.remove( box.class )
    box.element.classList.add( showClass )
    box.class = showClass
}

export const toggleRotationOptionsDisabled = (type) => {
    
    let options = rotationOptions.querySelectorAll('input')

    for(let option of options){
        option.disabled = type
    }
}




export const addRotationOptions = (box) => {
    changeSide(box)
    rotationOptions.addEventListener( 'change', ()=>{ changeSide(box) } )
    return rotationOptions
}