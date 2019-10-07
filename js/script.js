//Limpando Campos e recarregando a página
limparCampos = ()=> {
    document.getElementById('inLargura').value = '';
    document.getElementById('inComprimento').value = '';
    document.getElementById('inAltura').value = '';
    document.getElementById('outValor').value = '';
    outValor.innerHTML = '';
    let select = document.getElementById('inTipocx').value = '';
    // Posiciona o cursor no campo 'Largura'
    document.getElementById('inLargura').focus();
}

calcularValor = () => {
    //Receber as medidas da caixa
    let inLargura = document.getElementById('inLargura');
    let inComprimento = document.getElementById('inComprimento');
    let inAltura = document.getElementById('inAltura');
    let outValor = document.getElementById('outValor');

    //Transformar os dados em números
    let largura = Number(inLargura.value);
    let comprimento = Number(inComprimento.value);
    let altura = Number(inAltura.value);

    // Verificar se o campo largura é vazio (0) ou NaN;
    if (largura == 0 || isNaN(largura)) {
        alert('Por favor, digite um valor real para a largura da caixa!');
        inLargura.value = '';
        inLargura.focus();
        return;
    }
    // Verificar se o campo comprimento é vazio (0) ou NaN;
    if (comprimento == 0 || isNaN(comprimento)) {
        alert('Por favor, digite um valor real para o comprimento da caixa!');
        inComprimento.value = '';
        inComprimento.focus();
        return;
    }
    // Verificar se o campo altura é vazio (0) ou NaN;
    if (altura == 0 || isNaN(altura)) {
        alert('Por favor, digite um valor real para a altura da caixa!');
        inAltura.value = '';
        inAltura.focus();
        return;
    }

    //Criando referencia com o tipo de caixa do select
    let select = document.getElementById('inTipocx');
    if (select.value = 4) { 
        outValor.innerHTML = (`Valor R$: ${(largura + comprimento + altura).toFixed(2).fontcolor('green')}`);
    }
}


// Cria referência ao elemento btCalcular e registra evento assossiado a calcular Valor R$
let resultado = document.getElementById('btCalcular').addEventListener('click', (calcularValor))

// Cria referência ao elemento btLimpar e registra evento assossiado a limpar campos
let limpar = document.getElementById('btLimpar').addEventListener('click', (limparCampos));
