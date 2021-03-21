$(function () {

    var v1, v2, op;

    $("input[name=btn]").click(function () {
        $("#resultado").val($("#resultado").val() + $(this).val());
    });

    $("input[name=ce]").click(function () {
        $("#resultado").val('');
    });
    /* Calculo da soma */
    $("input[name=soma]").click(function () {
        if ($("#resultado").val() != '') {
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val('');
            op = "soma";
            $("#op").text($(this).val());
        } else {
            alert('Insira um valor para efetuar a operação!');
        }
    });
    /* Calculo da Subtracao */
    $("input[name=sub]").click(function () {
        if ($("#resultado").val() != '') {
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val('');
            op = "sub";
            $("#op").text($(this).val());
        } else {
            alert('Insira um valor para efetuar a operação!');
        }
    });
    /* Calculo da Multiplicação */
    $("input[name=multi]").click(function () {
        if ($("#resultado").val() != '') {
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val('');
            op = "multi";
            $("#op").text($(this).val());
        } else {
            alert('Insira um valor para efetuar a operação!');
        }
    });
    /* Calculo da Divisao */
    $("input[name=divisao]").click(function () {
        if ($("#resultado").val() != '') {
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val('');
            op = "divisao";
            $("#op").text($(this).val());
        } else {
            alert('Insira um valor para efetuar a operação!');
        }
    });
    /* Calculo da Igualdade */
    $("input[name=igual]").click(function () {
        if ($("#resultado").val() != '') {
            v2 = parseFloat($("#resultado").val());

            if (op == "soma") {
                $("#resultado").val(v1 + v2);
            }
            else if (op == "sub") {
                $("#resultado").val(v1 - v2);
            }
            else if (op == "multi") {
                $("#resultado").val(v1 * v2);
            }
            else {
                $("#resultado").val(v1 / v2);
            }

        } else {
            alert('Insira um valor para efetuar o calculo!');
        }

    });

});