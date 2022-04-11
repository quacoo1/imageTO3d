import './style.css'
import canvas from './JS/Canvas'
import { addDimensionsSelector } from './JS/DimensionSelector'
import { addRotationOptions, toggleRotationOptionsDisabled } from './JS/RotationOptions'
import { addAutoRotateSelector } from './JS/AutoRotationSelector'
import { addImageInput, setImage } from './ImageInput'


const boxTypes = {
    'box-1':{height: 400, width: 400, length: 400},
    'box-2':{height: 100, width: 200, length: 600}
}

const box = {
    element: canvas.querySelector('.box'),
    class: "show-front",
    dimensions: {}
}

addDimensionsSelector({boxTypes, box ,setImage})

addRotationOptions(box) 

addAutoRotateSelector({ box , toggleRotationOptionsDisabled })

addImageInput({box})
