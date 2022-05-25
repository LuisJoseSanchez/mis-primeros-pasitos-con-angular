import { Pipe, PipeTransform } from '@angular/core';

const TRADUCCIONES = [
  {
    en: 'Hello world!',
    es: '¡Hola mundo!',
    ru: 'Привет мир!'
  },
  {
    en: 'red',
    es: 'rojo',
    ru: 'красный'
  }
];

type Idioma = 'en' | 'es' | 'ru';

@Pipe({
  name: 'traduce'
})
export class TraducePipe implements PipeTransform {


  transform(texto: string, idioma: string): string {
    const traduccion = TRADUCCIONES.filter(t => t['en'] === texto)[0];

    if (traduccion) {
      return traduccion[idioma];
    } else {
      return '';
    }
    
  }

}
