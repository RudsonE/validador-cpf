//inputs
const cpf = document.querySelector('#cpf');
const cpfCard = document.querySelector('#txtCPF')
const state = document.querySelector('#txtState');


function cpfMask(keye){

        cpf.value = cpf.value.replace(/\D/g,"")
        cpf.value = cpf.value.replace(/(\d{3})(\d)/,"$1.$2")
        cpf.value = cpf.value.replace(/(\d{3})(\d)/,"$1.$2")
        cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        cpfCard.value = cpf.value
        if (checkCPFValidity(cpf.value)){
            state.value = "VÁLIDO"
        }else{
            state.value = "INVÁLIDO"
        }
    

    
}


//input listener function

cpf.addEventListener('input', (keye) => {
   cpfMask(keye);
 
})

//check cpf validity
function checkCPFValidity(cpf) {
    if(cpf.length < 14){
        return false
    }
    let cpfClean = cpf.replace(/\./g, "").replace(/\-/g, "");
    let cpfNumbers = cpfClean.substring(0, cpfClean.length - 2)
    let firstDigit = 0
    let lastDigit = 0
    soma = 0
    let mod

    //check if CPF is not repeated numbers
    if (['00000000000','11111111111',
        '22222222222','33333333333',
        '44444444444','55555555555',
        '66666666666','77777777777',
        '88888888888','99999999999',].indexOf(cpfClean) !== -1){
        console.log("CPF inválido")
        return false
        }

    //verify if first digit is valid
    for (let i = 0; i<=9; i++) {
        soma = soma + (parseInt(cpfNumbers.substring(i-1, i) * (11- i)))
    }
    mod = soma % 11
    if (mod == 0 || mod == 1) {
        cpfNumbers = cpfNumbers + 0
        firstDigit = 0
    }else{
        cpfNumbers = cpfNumbers + (11 - mod)
        firstDigit = 11 - mod
    }
    //reset sum
     soma = 0

    //verify if last digit is valid
    for (let i = 1; i<=10; i++) {
        soma = soma + (parseInt(cpfNumbers.substring(i-1, i) * (12- i)))
    }
    mod = soma % 11
    if (mod == 0 || mod == 1) {
        cpfNumbers = cpfNumbers + 0
        lastDigit = 0
       
    }else{
        cpfNumbers = cpfNumbers + (11 - mod)
        lastDigit = 11 - mod
        
    }
    
    //verify if inputed digit is valid and return true or false
    if (cpfClean.substr(-2,1) == firstDigit && cpfClean.substr(-1, 1) == lastDigit){
        console.log("O CPF: " + cpf + " é valido.")
        return true
    }else{
        console.log("O CPF: " + cpf + " não é valido.")
        console.log("Para que seja válido os digitos verificadores devem ser: " + firstDigit + "" + lastDigit)
        return false
    }


}