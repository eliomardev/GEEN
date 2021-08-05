$(function () {

    $('#btnfecha').click(function () {
        $('.model-container').css('transform', 'scale(1)');

       
        var numCep = $("#cep").val();
        var url = "https://viacep.com.br/ws/"+numCep+"/json";
    
        $.ajax({
            url: url,
            type: "get",
            dataType: "json",
    
            success:function(dados){
                console.log(dados);
                $("#uf").val(dados.uf);
                $("#cidade").val(dados.localidade);
                $("#rua").val(dados.logradouro);
                $("#bairro").val(dados.bairro);
                $("#ddd").val(dados.ddd);
            }
        })
        
    });

    $('#close').click(function () {
        $('.model-container').css('transform', 'scale(0)');
    });

    $('#close1').click(function () {
        $('.model-container').css('transform', 'scale(0)');
    });


});