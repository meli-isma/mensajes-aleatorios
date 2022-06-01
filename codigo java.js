let userName = '';
userName ? console.log (`Hello ${userName}` ) : console.log('Hello!');

const userQuestion = '¿Cual es mi frase de la semana'
console.log(`${userName} has asked ${userQuestion}`);
let randomNumber =Math.floor(Math.random() * 8);


let button ='';
switch(randomNumber){
  case 0:
  console.log('El miedo a perder la identidad es un freno para la evolución del talento');
  break;
  case 1:
  console.log('3 palabras que pueden cambiar tu vida "Empiezo por Mi"');
  break;
case 2:
console.log('Se la energia que quieres atraer');
break;
case 3:
console.log('Ganar confianza, es el mejor combustible del talento');
break;
case 4:
console.log('Lo que decidas hacer asegpurate de que te haga feliz');
break;
case 5:
console.log('Se como una piñña, parate en alto, usa una corona y se muy dulce');
break;
case 6:
console.log('Fallaras el 100% de todo lo que no itentes hacer');
break;
case 7:
console.log('No se trata de si te deriiban, se trata de si te levantas');
break;
}

console.log(`Tu frase es ${button}`);