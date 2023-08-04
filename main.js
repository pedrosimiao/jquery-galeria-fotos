$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })
    
    $("#botao-cancelar").click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //armazena a URL digitada no input numa variavel
        const novoItem = $('<li style="display: none"></li>'); //insere string com codigo html e css numa variavel
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //concatenando URL armazenada na string inserida 
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem); //concatenando <div> contendo o link para abrir imagem em uma nova guia na mesma variavel
        $(novoItem).appendTo('ul'); //injetando variavel a lista <ul>
        $(novoItem).fadeIn(1000); //efeito de fade in duração 1 segundo
        $('#endereco-imagem-nova').val(''); //esvazia input
    })
    
})


