import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from "./pages/registro/registro.component";

@NgModule({
    declarations:[LoginComponent, RegistroComponent],
    imports:[AuthRoutingModule,MaterialModule],
    exports:[]
})

export class AuthModule{//Este modulo no se importa en otros modulos

}