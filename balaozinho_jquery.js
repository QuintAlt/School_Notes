$(document).ready(function () {
    // encontra o arquivo do usuario e atualiza
    const fileSelector = document.getElementById('file-selector');
    const image = document.getElementById('Smile');

    fileSelector.addEventListener('change', () => {
        const file = fileSelector.files[0]; // Pega o primeiro arquivo selecionado

        if (file) {
            const imageUrl = URL.createObjectURL(file); // Cria uma URL temporária
            image.src = imageUrl; // Altera o src da imagem
        }
    });
    // seleciona todas as marcações na foto
    let $marcacoes = $('.marcacao');
    // seleciona o balãozinho
    let $balaozinhoEl = $('#balaozinho');
    // seleciona marcação atual
    let $marcacaoAtual = $($marcacoes[0]);
  



    // adiciona eventos diretamente na coleção com jQuery
    $marcacoes.on('mouseover', function () {
      let $marcacaoAtual = $(this);
  
      // pega data-titulo e data-conteudo com .data()
      let titulo = $marcacaoAtual.data('titulo');
      let conteudo = $marcacaoAtual.data('conteudo');
  
      // atualiza o conteúdo do balãozinho
      $balaozinhoEl.html(<h2>${titulo}</h2><p>${conteudo}</p>);
    });
  
    $marcacoes.on('mouseout', function () {
      // limpa o balãozinho
      $balaozinhoEl.html('');
    });
  
    $marcacoes.on('mousemove', function (e) {
      // atualiza a posição do balãozinho
      $balaozinhoEl.css({
        left: e.pageX + 'px',
        top: e.pageY + 'px'
      });
    });
  
    $marcacoes.on('click', function (e) {
        // atualiza a maração atual
        if (e.target.id == 'Pikachu'){
            $marcacaoAtual = $($marcacoes[0]);    
        } else if (e.target.id == 'Electrode'){
            $marcacaoAtual = $($marcacoes[1]);
        }
        
      });

    // botão para mudar a primeira marcação
    $('#marcacao-x').on('input', function () {
      // pega os valores dos inputs
      let x = $('#marcacao-x').val();
      let y = $('#marcacao-y').val();
      let largura = $('#marcacao-largura').val();
      let altura = $('#marcacao-altura').val();
  
      // altera a marcação selecionada
      let $marcacao = $marcacaoAtual;
  
      $marcacao.css({
        left: x + 'px',
        top: y + 'px',
        width: largura + 'px',
        height: altura + 'px'
      });
    });

    $('#marcacao-y').on('input', function () {
        // pega os valores dos inputs
        let x = $('#marcacao-x').val();
        let y = $('#marcacao-y').val();
        let largura = $('#marcacao-largura').val();
        let altura = $('#marcacao-altura').val();
    
        // altera a marcação selecionada
        let $marcacao = $marcacaoAtual;
    
        $marcacao.css({
          left: x + 'px',
          top: y + 'px',
          width: largura + 'px',
          height: altura + 'px'
        });
      });

      $('#marcacao-largura').on('input', function () {
        // pega os valores dos inputs
        let x = $('#marcacao-x').val();
        let y = $('#marcacao-y').val();
        let largura = $('#marcacao-largura').val();
        let altura = $('#marcacao-altura').val();
    
        // altera a marcação selecionada
        let $marcacao = $marcacaoAtual;
    
        $marcacao.css({
          left: x + 'px',
          top: y + 'px',
          width: largura + 'px',
          height: altura + 'px'
        });
      });

      $('#marcacao-altura').on('input', function () {
        // pega os valores dos inputs
        let x = $('#marcacao-x').val();
        let y = $('#marcacao-y').val();
        let largura = $('#marcacao-largura').val();
        let altura = $('#marcacao-altura').val();
    
        // altera a marcação selecionada
        let $marcacao = $marcacaoAtual;
    
        $marcacao.css({
          left: x + 'px',
          top: y + 'px',
          width: largura + 'px',
          height: altura + 'px'
        });
      });
  
  });
