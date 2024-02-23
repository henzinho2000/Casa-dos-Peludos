formatarTel()

function formatarTel(input) {
    var valor = input.value.replace(/\D/g, '');
    if (valor.length > 10) {
        valor = valor.replace(/(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    input.value = valor;
}
