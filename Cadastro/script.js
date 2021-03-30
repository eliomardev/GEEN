$(function () {

    $("input[name=enviar]").click(function () {
        
        //declaracao de variaveis dquem vem do formulario
        let nome = $('#nome').val();
        let sobrenome = $('#sobrenome').val();
        let email = $('#email').val();
        let telefone = $('#telefone').val();
        let descricao = $('#descricao').val();
        let dia = $('#dia option:selected').val();
        let mes = $('#mes option:selected').val();
        let ano = $('#ano option:selected').val();

        let check = 0;

        //validando os campos
        if (nome === '')
        {
            nome = "\nO campo [Nome] é necessário"
            check = 1;
        } else 
        {
            nome = "\nNome: " + nome
        }
        if (sobrenome === '') 
        {
            sobrenome = "\nO campo [Sobrenome] é necessário"
            check = 1;
        } else 
        {
            sobrenome = "\nSobrenome: " + sobrenome
        }

        if (email === '') 
        {
            email = "\nO campo [E-mail] é necessário"
            check = 1;
        } else 
        {
            email = "\nE-mail: " + email
        }

        if (telefone === '') 
        {
            telefone = "\nO campo [Telefone] é necessário"
            check = 1;
        } else 
        {
            telefone = "\nTelefone: " + telefone
        }

        if (descricao === '') 
        {
            descricao = "\nO campo [Descrição] é necessário"
            check = 1;
        } else 
        {
            descricao = "\nDescrição " + descricao
        }

        if (dia === '' || mes === '' || ano === '') 
        {
            dia = "\nO campo [Dia de Nascimento] é necessário";
            mes = "\nO campo [Mes de Nascimento] é necessário";
            ano = "\nO campo [Ano de Nascimento] é necessário";
            check = 1;
        } else 
        {
            dia = "\nData de nascimento: " + dia + "/" + mes + "/" + ano
        }

        if (check === 1) 
        {
            alert(nome + sobrenome + email + telefone + dia + mes + ano + descricao)
        } 
        else 
        {
            alert("Cadastro realizado com sucesso \n" + nome + sobrenome + email + telefone + dia + descricao)
        }
    });
});

$(function () {

    $("input[name=reset]").click(function () {

        let campos = $('input');
        let textArea = $('textarea');
        let dia = $('#dia');
        let mes = $('#mes');
        let ano = $('#ano');
        let go = $('#enviar');
        let limpa = $('#reset');

        valor = "";
        campos.val(valor);
        textArea.val(valor);
        dia.val('dia');
        mes.val('mes');
        ano.val('ano');
        go.val('Enviar')
        limpa.val('Limpar')
    });
});