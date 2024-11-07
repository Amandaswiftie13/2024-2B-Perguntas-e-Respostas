function CriaCarta(materia, pergunta, resposta){
    let caixa = document.gesElementBy('caixa')
    let cartao = document.createElement('article')

    cartao.className = 'cartao'

    cartao.innerHTML = `
   <div class="cartao__conteudo">
      <h3>  </h3>
    <div class="cartao__conteudo__pergunta">
    <p> Em que ano aconteceu a Revolução Francesa? </p>                        
    </div>
    <div class="cartao__conteudo__resposta">
         <p> Em 1789 </p>
  </div>
  </div>
  `

 caixa.appeendChild(cartao)
}