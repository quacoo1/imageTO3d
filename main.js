import './style.css'
import canvas from './JS/Canvas'
import { addDimensionsSelector } from './JS/DimensionSelector'
import { addRotationOptions, toggleRotationOptionsDisabled, changeSide } from './JS/RotationOptions'
import { addAutoRotateSelector } from './JS/AutoRotationSelector'
import { addImageInput, setImage } from './JS/ImageInput'


const boxTypes = {
    'box-1':{height: 400, width: 400, length: 400},
    'box-2':{height: 100, width: 200, length: 600},
    'box-3':{height:480, width: 300, length: 300},
}

const box = {
    element: canvas.querySelector('.box'),
    class: "show-front",
    dimensions: {}
}

addDimensionsSelector({boxTypes, box , setImage})

addRotationOptions({box}) 

addAutoRotateSelector({ box , toggleRotationOptionsDisabled, changeSide })

addImageInput({box})
