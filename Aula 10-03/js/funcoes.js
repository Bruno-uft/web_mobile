//Executando jQuery

function minhaPrimeiraFuncao()
{
    $("#area-01").css({
        color: '#ff0000',
        textTransform: 'uppercase',
        width: '70%'
    });
};

function minhaSegundaFuncao()
{
    $("#area-02").empty(); //remove tds os elementos 
    
    var alunos = ['aluno 1', 'aluno 2','aluno 3'];

    $.each(alunos, function(index, value){
        $('#area-02').append(value + '<br>');
    });
};

function minhaTerceiraFuncao()
{
    $("#area-03").empty(); //remove tds os elementos 
    
    $("#area-03").append("<strong>Área 03 limpa e preenchida com sucesso</strong>");
};