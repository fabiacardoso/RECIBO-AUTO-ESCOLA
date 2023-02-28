function gerarRecibo(){
    document.getElementById('recibo_name').innerHTML = document.getElementById('name').value;

    document.getElementById('recibo_renach').innerHTML = document.getElementById('renach').value;

    document.getElementById('recibo_cpf').innerHTML = document.getElementById('cpf').value;

    document.getElementById('recibo_payment').innerHTML = parseFloat(document.getElementById('payment').value).toLocaleString('pt-br', {minimumFractionDigits: 2});

    document.getElementById('recibo_pay').innerHTML = document.getElementById('pay').value;

    // document.getElementById('recibo_aVista').innerHTML = document.getElementById('aVista').value;

    document.getElementById('recibo_data').innerHTML = dataAtual();

    window.print();
    
}

function dataAtual(){
    let data = new Date();
    return data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
}