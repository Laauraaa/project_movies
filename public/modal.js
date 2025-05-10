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

    document.querySelector("#sendComment").addEventListener("click", async () => {
        
        const name = document.querySelector("#postNameMovie").value.trim();
        const image = document.querySelector("#postImageMovie").value.trim(); 
        //const genre = document.querySelector("#genreselector").value;
        const commentName = document.querySelector("#postNameComent").value.trim();
        const commentText = document.querySelector("#postComentTxt").value.trim();

        const genre = document.querySelector("#genreselector").value;
        const genres = [genre];  // Garantir que `genre` seja um array
    
       
        if (!name || !image || !genre || !commentName || !commentText) {
            alert("Preencha todos os campos corretamente!");
            return;
        }
    
       
        const newComment = {
            name: commentName,
            text: commentText
        };

        const formData = new FormData();
        formData.append("name", name);
        formData.append("genre", genre);
        formData.append("comment", newComment);
        formData.append("image", image); 
    
        try {
            const response = await fetch("/addMovie", {
                method: "POST",
                body: formData
            });
    
            if (response.ok) {
                alert("Filme adicionado com sucesso!");
                location.reload(); 
            } else {
                alert("Erro ao adicionar filme.");
            }
    
            
            const data = await response.json();
    
            
        } catch (error) {
            console.error("Erro ao enviar o filme:", error);
            alert("Houve um erro ao enviar os dados.");
        }
    });
    

};

    