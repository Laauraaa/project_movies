const buttonOpen = document.querySelector("#openModal")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("#closeModal")
buttonOpen.onclick = ()=> {
    modal.showModal()
    console.log("FUNCIONOU")
}
buttonClose.onclick = ()=> {
    modal.close()
}
