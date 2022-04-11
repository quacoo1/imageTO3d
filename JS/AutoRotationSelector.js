const autoRotateSelector = document.querySelector('#auto-rotate')


export const changeAutoRotateStatus = ({ box, toggleRotationOptionsDisabled, changeSide }) => {
    let checked = autoRotateSelector.checked
    toggleRotationOptionsDisabled(checked)

    if(checked){
        console.log(box.class)
        let showClass = `is-spinning`
        if( box.class ) box.element.classList.remove( box.class )
        box.element.classList.add( showClass )
        box.class = showClass
        
    }else{
        let showClass = `show-front`
        if( box.class )box.element.classList.remove( box.class )
        box.element.classList.add( showClass )
        box.class = showClass
        changeSide({box})
    }

}

export const addAutoRotateSelector = (option) =>{
    changeAutoRotateStatus(option)
    autoRotateSelector.addEventListener( 'change', () => changeAutoRotateStatus(option) )
    return autoRotateSelector
}