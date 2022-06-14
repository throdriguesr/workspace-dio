function compareDoisNumeros(){
    alert('Vamos somar dois números, verificar se são iguais e maior que 10?');
    
    let num1 = Number(prompt('Digite o primeiro número:'));
    let num2 = Number(prompt('Digite o segundo número:'));
    
    if(!num1 || !num2){
        alert('Digite um parâmetro válido!');
        compareDoisNumeros();
    } 
    
    else{
        if(num1 == num2){
            var total = num1 + num2;
            if(total >= 10 && total <= 20){
                alert(`São números iguais! A soma de ${num1} + ${num2} é ${total}, e é maior ou igual a 10 e menor ou igual a 20!`);
                desejaRefazer();
            } 
            
            else if(total > 20){
                alert(`São números iguais! A soma de ${num1} + ${num2} é ${total}, e é maior que 20!`);
                desejaRefazer();
            }
            
            else {
                alert(`São números iguais! A soma de ${num1} + ${num2} é ${total}, e é menor que 10!`);
                desejaRefazer();
            }
        } 
        
        else {
            var total = num1 + num2;
            if(total >= 10 && total <= 20){
                alert(`São números diferentes! A soma de ${num1} + ${num2} é ${total}, e é maior ou igual a 10 e menor ou igual a 20!`);
                desejaRefazer();
            } 
            
            else if (total > 20){
                alert(`São número diferentes! A soma de ${num1} + ${num2} é ${total}, e é maior que 20!`);
                desejaRefazer();
            } 
            
            else {
                alert(`São número diferentes! A soma de ${num1} + ${num2} é ${total}, e é menor que 10!`);
                desejaRefazer();
            }
        }

        function desejaRefazer(){
            let refazer = Number(prompt('Deseja refazer?\n 1 - Sim\n 2 - Não'));
            if(!refazer){
                alert('Digite um parâmentro válido');
                desejaRefazer();
            } 

            else{
                if(refazer == 1){
                    compareDoisNumeros();
                } 
                else if(refazer == 2){
                    alert('Até mais!')
                }
            }
        }
    }
}

compareDoisNumeros();