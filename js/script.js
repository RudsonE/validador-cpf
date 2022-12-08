//inputs
const cpf = document.querySelector('#cpf');
const cpfCard = document.querySelector('#txtCPF')


function cpfMask(keye){
    console.log(keye)

        cpf.value = cpf.value.replace(/\D/g,"")
        cpf.value = cpf.value.replace(/(\d{3})(\d)/,"$1.$2")
        cpf.value = cpf.value.replace(/(\d{3})(\d)/,"$1.$2")
        cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        cpfCard.value = cpf.value

    

    
}


//input listener function

cpf.addEventListener('input', (keye) => {
   cpfMask(keye);
 
})
