import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

//Este AuthGuard se coloca en cualquier lado donde tengamos rutas definidas
export class AuthGuard implements  CanLoad, CanActivate {

  constructor(private authService:AuthService,
              private router:Router
              ){

  }

  //Es usado para prevenir usuarios no autorizados a acceder a ciertas rutas. 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean {
      /* if(this.authService.auth.id){
        return true;
      }

      console.log("Bloqueado por el AuthGuard - CanActivate")
      return false; */

      return this.authService.verificaAutenticacion()
        .pipe(
            tap(estaAutenticado=>{
                if(!estaAutenticado){
                  this.router.navigate(["auth/login"])
                } 
            })
          );
         
         
  }

  //CanLoad es mejor para lazyLoad
  //solo sirve para prevenir que el usuario cargue el modulo entero, si el usuario no esta autorizado a hacerlo.
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {

      return this.authService.verificaAutenticacion()
        .pipe(
            tap(estaAutenticado=>{
                if(!estaAutenticado){
                  this.router.navigate(["auth/login"])
                } 
            })
          );
    
      /* if(this.authService.auth.id){
        return true;
      }

      console.log("Bloqueado por el AuthGuard - CanLoad")
      return false; */

    
  }
}
