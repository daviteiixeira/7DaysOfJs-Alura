//declarando variaveis
var namename
var age
var linguage

//capturando valores para as variaveis
namename = prompt("What is your name?")
age = prompt("How old are you?")
linguage = prompt("What is programming language that you are learning?")
//teste de console
console.log(namename, age, linguage)
//mensagem no site
document.write("Your name is " + namename + ", you are " + age + " years old and you is learning " + linguage)

//Complementação da mensagem no site
linguage = prompt("You like of to learn " +linguage+"? (digite 1 para SIM e 2 para NÃO)")
//teste de console
console.log(linguage)
if (linguage == 1) {
    document.write("Great,"+namename+"!Continue studing and you will has sucess!")
} else {
    document.write("Ah :/..."+namename+"but have you tried learning others programming linguages?")
}