const form = document.getElementById('form')

form.addEventListener('submit', function(event){

    const numero1 = parseFloat(document.getElementById('number1').value,10)
    const numero2 = parseFloat(document.getElementById('number2').value,10)
    alert(numero1+numero2)

}
)