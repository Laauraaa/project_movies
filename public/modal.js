const buttonOpen = document.querySelector("#openModal")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("#closeModal")
const sendComment = document.querySelector("#sendComment");


buttonOpen.onclick = ()=> {
    modal.showModal();
    validateForm();
    
};

buttonClose.onclick = ()=> {
    modal.close();
};

function validateForm(){

    sendComment.addEventListener("click", () => {
        const name = document.querySelector("#postNameMovie").value.trim();
        const image = document.querySelector("#postImageMovie").files.length > 0;
        const genre = document.querySelector("#genreselector").value;
        const commentName = document.querySelector("#postNameComent").value.trim();
        const commentText = document.querySelector("#postComentTxt").value.trim();

        if (!name || !image || !genre || !commentName || !commentText) {
            window.alert("Preencha todos os campos corretamente!");
        
        }else{
            console.log("Comentário enviado!");
        }

    });

    
    
};

