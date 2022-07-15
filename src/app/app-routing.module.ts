import { NgModule } from '@angular/core';
 
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
 
import { ErrorPageComponent } from './shared/error-page/error-page.component';
 
const routes: Routes = [
 
  //Podemos ver que importamos el uso de los modulos que no hemos importado aquí en estas rutas
  {
    path:"heroes",
    loadChildren:()=> import("./heroes/heroes.module").then(module=>module.HeroesModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]
  },
  {
    path:"auth",
    loadChildren: () => import('./auth/auth.module').then(module =>module.AuthModule)
  },
  {
    path: "404",
    component: ErrorPageComponent
  },
  {
    path: "**",
    redirectTo:'404'
  }
]
 
@NgModule({
 
  imports: [
  RouterModule.forRoot( routes ) 
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }