import { Component, Input } from '@angular/core';
import { HeroeInterface } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles:[
    
    `
    mat-card{
        margin-top:20px
    }
    `

  ]
})
export class HeroeTarjetaComponent {
  /*   @Input() heroe : HeroeInterface | undefined; */

  // "heroe!" Ese es el operador de aserción no nula. Es una forma de decirle al compilador 
  //"esta expresión no puede ser null o undefined aquí, así que no se queje de 
  //la posibilidad de que sea null o undefined."
  @Input() heroe!: HeroeInterface;

  public mostrar() {
    console.log(this.heroe);
  }
}
