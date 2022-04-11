

const dimensionsSelector = document.querySelector('#box-demensions-selector')
const setBoxDimension = ( { box ,boxTypes, setImage } ) => {

    box.dimensions = boxTypes[dimensionsSelector.value]


    box.dimensions.canvasHeight = () => Math.max(box.dimensions.height, box.dimensions.width, box.dimensions.length )
    box.dimensions.canvasWidth = () => box.dimensions.canvasHeight()
    box.dimensions.canvasDepth = () => -1 * box.dimensions.length/2
    box.dimensions.zDepth = () =>  box.dimensions.length/2
    box.dimensions.yDepth = () =>  box.dimensions.height/2
    box.dimensions.xDepth = () =>  box.dimensions.width/2
    box.dimensions.xOffset = () => ( box.dimensions.width - box.dimensions.length) / 2
    box.dimensions.yOffset = () => ( box.dimensions.height - box.dimensions.length) / 2

    document.documentElement.style.setProperty('--canvas-height', `${box.dimensions.canvasHeight()}px`)
    document.documentElement.style.setProperty('--canvas-width', `${box.dimensions.canvasWidth()}px`)
    document.documentElement.style.setProperty('--box-height', `${box.dimensions.height}px`)
    document.documentElement.style.setProperty('--box-width',  `${box.dimensions.width}px`)
    document.documentElement.style.setProperty('--box-length', `${box.dimensions.length}px`);
    document.documentElement.style.setProperty('--canvas-depth', `${box.dimensions.canvasDepth()}px`);
    document.documentElement.style.setProperty('--box-z-depth', `${box.dimensions.zDepth()}px`);
    document.documentElement.style.setProperty('--box-y-depth', `${box.dimensions.yDepth()}px`);
    document.documentElement.style.setProperty('--box-x-depth', `${box.dimensions.xDepth()}px`);
    document.documentElement.style.setProperty('--x-offset', `${box.dimensions.xOffset()}px`);
    document.documentElement.style.setProperty('--y-offset', `${box.dimensions.yOffset()}px`);

    setImage({ box })
}  




export const addDimensionsSelector = ( options ) => {    
    
    setBoxDimension( options )
    dimensionsSelector.addEventListener('change', () => { setBoxDimension( options) })
    
    return dimensionsSelector

}


