const imageInput = document.querySelector('#image-upload')


function readImage(callback) {
  const file = imageInput.files.item(0);
  
  if( file ){
    const reader = new FileReader()

    reader.onload = function() {
        callback(reader.result)
    }

    reader.readAsDataURL(file)
    }
}

export const setImage = ({ box }) => {

    const imageRenderSurfaces = { back:2, top:1, front:0,  bottom:3, }
    readImage( ( result )=>{
        
        const faces = box.element.querySelectorAll('.box__face')
        let bgHeight = 0;
        for (let index = 0; index < faces.length; index++ ){
            const id = faces[index].id

            if( imageRenderSurfaces[id] > 0 || imageRenderSurfaces[id] === 0 ){                
                faces[index].style.backgroundImage = `url(${result})`
                
                switch( id ){
                    case 'front': bgHeight =  box.dimensions.height + box.dimensions.length
                    break
                    case 'back':  bgHeight = 0
                    break
                    case 'bottom': bgHeight = 2 * box.dimensions.height + box.dimensions.length
                    break
                    case 'top':  bgHeight = box.dimensions.height
                }

                faces[index].style.backgroundPosition =  `center ${-1*bgHeight}px`
                
            }
        }
    })
}




export const addImageInput = (options) => {
    setImage(options)
    imageInput.addEventListener('change', () => setImage(options) )
    return imageInput
}


