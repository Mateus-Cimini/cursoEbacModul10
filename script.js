$(document).ready(function() {
    $('#carousel-cars').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome'
        },
        submitHandler: function(form) {
            console.log(form)  
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe ${camposIncorretos} campos incorretos`)
            }
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const interesse = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(interesse)

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});