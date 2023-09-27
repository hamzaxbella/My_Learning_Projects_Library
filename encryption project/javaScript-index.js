let increptionArea = document.querySelector("#incriptArea");
let decreptedArea = document.querySelector("#decripted");
let IncryptingButton = document.querySelector("#increptedText")
let DecryptingButton = document.querySelector("#decreptedText")

increptionArea.addEventListener('input',()=>{
    decreptedArea.value = window.btoa(increptionArea.value)
})

IncryptingButton.addEventListener('click',()=>{
    decreptedArea.value = window.btoa(increptionArea.value)
})    
DecryptingButton.addEventListener('click',()=>{
    decreptedArea.value = window.atob(
        decreptedArea.value = window.btoa(increptionArea.value)
    )
})