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

}
