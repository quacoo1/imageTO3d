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

export default canvas