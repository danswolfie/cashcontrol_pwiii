let mensalLimit = 0;
let arrPessoa = [];

const limitInput = document.getElementById('limit');

limitInput.addEventListener('input', function() {
    const limitValue = parseInt(limitInput.value);

    if (!isNaN(limitValue) && limitValue > 0) {
        mensalLimit = limitValue;
        console.log("Limite mensal de gastos definido como:", mensalLimit);
    } else {
        console.log("Por favor, insira um limite válido de gastos.");
    }
});

function displayGastosInfo() {
    const luzInput = parseInt(document.getElementById('luz').value);
    const aguaInput = parseInt(document.getElementById('agua').value);
    const internetInput = parseInt(document.getElementById('internet').value);

    if (isNaN(luzInput) || isNaN(aguaInput) || isNaN(internetInput) ||
        luzInput < 0 || aguaInput < 0 || internetInput < 0) {
        alert('Por favor, insira valores válidos para os gastos.');
        return;
    }

    const totalGastos = luzInput + aguaInput + internetInput;

    const pessoa = {
        luz: luzInput,
        agua: aguaInput,
        internet: internetInput,
        gastos: totalGastos,
    };

    imprimir(pessoa);
}


function imprimir(pessoa) {
    const tbody = document.getElementById('resultado-tbody');

    // Limpar o conteúdo anterior do tbody
    tbody.innerHTML = '';

    // Criar uma nova linha para a nova pessoa
    const newRow = document.createElement('tr');
    newRow.innerHTML += `
        <td>${pessoa.luz}</td>
        <td>${pessoa.agua}</td>
        <td>${pessoa.internet}</td>
        <td>${pessoa.gastos}</td>
    `;
    
    // Adicionar a nova linha ao tbody
    tbody.appendChild(newRow);

    // Calcular o total de gastos
    const totalGastos = pessoa.gastos;

    // Exibir o total de gastos
    document.getElementById('total-info').textContent = totalGastos + ' reais';

    // Exibir a mensagem de limite de gastos
    const mensagemDiv = document.getElementById('message');
    const resultDiv = document.getElementById('result');

    if (totalGastos <= mensalLimit) {
        mensagemDiv.textContent = "Você não excedeu o limite de gastos";
        mensagemDiv.style.color = "green";
    } else {
        mensagemDiv.textContent = "Você excedeu o limite de gastos";
        mensagemDiv.style.color = "red";
    }

    // Exibir a div de resultado
    resultDiv.style.display = "block";
}


document.getElementById('btn').addEventListener('click', function() {
    displayGastosInfo();
});



