import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProyectoAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProyectoAngular');
  });

  it(`Test input 3 result should be fizz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('fizz').toEqual(app.fizzbuzz(3));
  });

  it(`Test input 5 result should be buzz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('buzz').toEqual(app.fizzbuzz(5));
  });

  it(`Test input 15 result should be fizzbuzz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('fizzbuzz').toEqual(app.fizzbuzz(15));
  });

  it(`Test input -3 result should be Menor de 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('Menor de 0').toEqual(app.fizzbuzz(-3));
  });

  it(`Test input 61 result should be fizzbuzz not`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('fizzbuzz not').toEqual(app.fizzbuzz(61));
  });

  it(`Test input 123 result should be Mayor de 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('Mayor0').toEqual(app.fizzbuzz(123));
  });

  
  it(`Prueba anagrama 1`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(true).toEqual(app.anagramtest('listo', 'tolis'));
  });

  it(`Prueba anagrama 2`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(false).toEqual(app.anagramtest('ola', 'jalo'));
  });

  it(`Prueba anagrama 3 con la misma palabra`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(false).toEqual(app.anagramtest('ola', 'ola'));
  });

  it(`Prueba numero fiboparprimo 1`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('El número 3 es primo, fibonaci y impar').toEqual(app.fiboprimopartest(3));
  });
  
  it(`Prueba numero fiboparprimo 2`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('El número 4 es par').toEqual(app.fiboprimopartest(4));
  });

  it(`Prueba numero fiboparprimo 3`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect('El número 21 es fibonaci y impar').toEqual(app.fiboprimopartest(21));
  });

});
