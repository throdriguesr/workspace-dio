function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real(/)\n 5 - Divisao inteira (%)\n 6 - Potenciação (**)'));

    if(!operacao || operacao >= 7){
        alert('Digite uma opção válida!')
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if(!n1 || !n2) {
            alert('Parametro invalidado!!!');
            calculadora();
        } else {
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function multiplicao(){
                resultado = n1 * n2;
                alert(`${n1} x ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
        
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevad a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }
        
            function novaOperacao(){
                let opcao = Number(prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não'));
                if(opcao == 1) {
                    calculadora();
                } else if(opcao == 2){
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção valida!')
                    novaOperacao();
                }
            }

          /*if(operacao == 1) {
              soma();
          } else if(operacao == 2){
              subtracao();
          } else if(operacao == 3){
              multiplicao();
          } else if(operacao == 4){
              divisao();
          } else if(operacao == 5){
              divisaoInteira();
          } else if(operacao == 6){
            potenciacao();
          } else {
             alert(resultado);
         }*/

            switch(operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

calculadora();