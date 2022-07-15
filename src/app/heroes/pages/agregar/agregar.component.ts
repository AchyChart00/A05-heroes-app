import { Component } from '@angular/core';
import { HeroeInterface, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar-component',
  templateUrl: './agregar.component.html',
  styles:[`{

    width:100%;
    bordere-radius:5px;

  }`]
})
export class AgregarComponent {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: HeroeInterface = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  };

  constructor(private heroesService: HeroesService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private snackBar:MatSnackBar,
              private dialog:MatDialog
    ){

  }

  //se recomienda poner aquí ciertas variables par
  ngOnInit():void{

    if(!this.router.url.includes("editar")){
      return;
    }


    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.heroesService.getHeroePorId(id))
      )
      .subscribe(heroe=>this.heroe= heroe)
  }

  guardar(){
    if(this.heroe.superhero.trim().length===0){
        return;
    }

    if(this.heroe.id){
      //actualizar
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe((heroe)=>this.mostrarSnakbar("Registro Actualizado"))
    }else{
      //agregando
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe=>{
         
          this.router.navigate(['/heroes/editar', heroe.id])
          this.mostrarSnakbar("Registro Creado")

        })
    }
  }

  borrarHeroe(){

    const dialog = this.dialog.open(ConfirmarComponent, {
      width:"250px",
      data:this.heroe
    })

    dialog.afterClosed().subscribe(
      (res)=>{
        if(res){
                this.heroesService.borrarHeroe( this.heroe.id! )
                  .subscribe( resp => {
                    this.router.navigate(['/heroes'])
                  }); 
        }
      }
    )

   
  }

  mostrarSnakbar(mensaje:string){
    this.snackBar.open(mensaje, "ok!",{
      duration:2500
    })
  }

}