import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoAngular';

  fizzbuzz(input: number){
    if(input<0){return 'Menor de 0';}
    else if(input>100){return 'Mayor0'}
    else if(input%3 == 0 && input%5 == 0){return 'fizzbuzz'}
    else if(input%5 == 0){return 'buzz'}
    else if(input%3 == 0){return'fizz'}
    else{return 'fizzbuzz not'}
  }

  anagramtest(word1: String, word2: String){
    if(word1 === word2){return false}
    const orderword1 = word1.toLowerCase().replace(/\s/g,'').split('').sort().join('');
    const orderword2 = word2.toLowerCase().replace(/\s/g,'').split('').sort().join('');

    return orderword1 === orderword2
  }

  fiboprimopartest(numero: number){
    let respuesta  = `El número ${numero} es`;
    let coma = 0;
    //Comprueba si es primo
    if(this.numPrimo(numero)) {
        respuesta = respuesta + " primo";
        coma = 1;
    }
    //Comprueba si es fibonaci
    if(coma == 1){respuesta = respuesta+','}
    if(this.numFibonacci(numero, 0, 0, 1)){
      respuesta = respuesta+' fibonaci';
      coma = 1;
    }

    //Comprueba si es par
    if(coma == 1){respuesta = respuesta+' y'}
    if(this.numPar(numero)){respuesta = respuesta + " par";}
    else{respuesta = respuesta + " impar";}

    return respuesta
  }

  numPrimo(numero: number): boolean {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  numPar(numero: number): boolean {
    if(numero%2 === 0){return true}
    else{return false}
  }
  numFibonacci(numero: number, siguiente: number, a: number, b:number):boolean | undefined {
    if(numero === 0 || numero === 1){return true}
    else if(siguiente > numero){return false}
    else if(siguiente === numero){return true}
    else{
      siguiente = a + b;
      a = b;
      b = siguiente;
      return this.numFibonacci(numero, siguiente, a, b); 
    }
    
  }

}
