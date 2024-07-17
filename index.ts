var idade = Number(prompt("Idade:"));
if (idade >= 18 && idade <= 60) {
    console.log('Adulto');
}
else if (idade < 18) {
    console.log('Criança');
}
else {
    console.log("Idoso");
}
