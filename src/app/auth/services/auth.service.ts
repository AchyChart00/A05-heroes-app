import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import{Injectable} from "@angular/core";
import { AuthInterface } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
    providedIn:"root"
})

export class AuthService{

    private baseUrl:string= environment.baseUrl;
    private _auth:AuthInterface | undefined;

    get auth():AuthInterface{
        return {...this._auth!}
    }

    constructor(private http: HttpClient){

    }

    
    verificaAutenticacion():Observable<boolean>{
        if(!localStorage.getItem("token")){
            return of(false);
        }

        return this.http.get<AuthInterface>(`${this.baseUrl}/usuarios/1`)
            .pipe(
                
                map(auth=>{
                    this._auth=auth;
                    return true;
                })
            )
    }


    login(){
        return this.http.get<AuthInterface>(`${this.baseUrl}/usuarios/1`)
            .pipe(
                tap(auth=>this._auth=auth),
                tap(auth=>localStorage.setItem("token", auth.id)),
            )
    }

}