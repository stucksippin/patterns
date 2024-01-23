function submitData() {
    var holder = document.getElementById("card-owner").value;
    var number = document.getElementById("card-number").value;
    var mm = document.getElementById("card-month").value;
    var yy = document.getElementById("card-year").value;
    var cvc = document.getElementById("cvc").value;

    var holderPattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var numberPattern = /^\d{16}$/;
    var mmPattern = /^\d{2}$/;
    var yyPattern = /^\d{2}$/;
    var cvcPattern = /^\d{3}$/;



    if (!holderPattern.test(holder)) {
        alert("Please enter a valid card holder name (two words only)");
        return;
    }

    if (!numberPattern.test(number)) {
        alert("Please enter a valid 16-digit card number");
        return;
    }

    if (!mmPattern.test(mm)) {
        alert("Please enter a valid 2-digit month");
        return;
    }

    if (!yyPattern.test(yy)) {
        alert("Please enter a valid 2-digit year");
        return;
    }

    if (!cvcPattern.test(cvc)) {
        alert("Please enter a valid 3-digit CVC code");
        return;
    }

    // Форматируем введенный номер карты
    var formattedNumber = formatCardNumber(number);
    var formattedCVC = formatCVC(cvc)

    // Выводим данные в таблицу
    var table = document.getElementById("data-table");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var numberCell = row.insertCell(1);
    var expireCell = row.insertCell(2);
    var cvcCell = row.insertCell(3);

    nameCell.innerHTML = holder;
    numberCell.innerHTML = formattedNumber;
    expireCell.innerHTML = mm + "/" + yy;
    cvcCell.innerHTML = formattedCVC;

    dropForm()
}

function dropForm() {
    var holder = document.getElementById("card-owner").value = ""
    var number = document.getElementById("card-number").value = ""
    var mm = document.getElementById("card-month").value = ""
    var yy = document.getElementById("card-year").value = ""
    var cvc = document.getElementById("cvc").value = ""
}



function formatCardNumber(number) {
    number = number.replace(/\s/g, '').trim();
    var formattedNumber = "";
    for (var i = 0; i < number.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedNumber += "-";
        }
        formattedNumber += number.charAt(i);
    }

    return formattedNumber;
}

function formatCVC(cvc) {
    var formattedCVC = "";
    for (var i = 0; i < cvc.length; i++) {
        if (i === cvc.length - 2 || i === cvc.length - 1) {
            formattedCVC += "*";
        } else {
            formattedCVC += cvc.charAt(i);
        }
    }

    return formattedCVC;
}



