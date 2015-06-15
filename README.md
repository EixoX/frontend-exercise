
Teste front-end
=============

Olá! Este é um teste com o objetivo de avaliar algumas de suas habilidades para desenvolvimento front-end.
Suponha que você esteja envolvido em um projeto novo da empresa e que o design tenha enviado esse arquivo para referência:

![Template enviado](https://s3.amazonaws.com/Glambox.Content.MediaObject/MediaFile_6391.jpg)

O primeiro passo será transformar esse design em HTML e CSS, usando o Twitter Bootstrap.
Após este passo, você deverá criar algumas interações via javascript, nos blocos de enquete e outras ofertas.

No bloco de enquete, você deverá fazer com que o clique do botão:

* Envie a resposta para o servidor
* Lide com o retorno, ou seja, mostre as barras com as porcentagens de cada uma das opções (como ilustrado na imagem)

Você pode usar a função auxiliar que criamos para simular o envio de uma resposta para o servidor:
```
// callback recebe o objeto com as porcentagens
enquete.responder('Gostei', callback);
```

No bloco de outras ofertas, você deverá usar a função <i>carregarMais</i>, que envia para uma função de callback as n ofertas pedidas, para carregá-las no html.
```
// callback_function recebe o vetor com mais n ofertas
carregarMais(n, callback_function);
```

A única obrigatoriedade deste exercício e o uso do Twitter Bootstrap, tendo cuidado com a responsividade, na medida do possível. Não há restrição de bibliotecas javascript, fique a vontade para utilizar javascript puro, jQuery, Angular.js, etc.

> Não é obrigatório implementar o carrossel de imagens! Mas se quiser, pode fazer ;)