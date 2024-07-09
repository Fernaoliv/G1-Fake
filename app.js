
function openPopup(event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function validateCPF(event) {
    event.preventDefault();
    
    var cpfInput = document.getElementById('cpf');
    var cpf = cpfInput.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    
    if (cpf.length !== 11 || !isValidCPF(cpf)) {
        document.getElementById('cpfError').innerText = 'CPF inválido';
        cpfInput.focus();
    } else {
        document.getElementById('cpfError').innerText = '';
        // Aqui você pode enviar o formulário ou realizar outras ações
        document.getElementById('cpfForm').submit();
    }
}

function isValidCPF(cpf) {
    // Algoritmo de validação de CPF
    var sum = 0;
    var remainder;

    if (cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222' ||
        cpf === '33333333333' || cpf === '44444444444' || cpf === '55555555555' ||
        cpf === '66666666666' || cpf === '77777777777' || cpf === '88888888888' ||
        cpf === '99999999999') {
        return false;
    }

    for (var i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}