import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ValidarAdminGuard implements CanActivate, CanLoad {

  constructor( private authService : AuthService,
               private router : Router) {}

  canActivate(): Observable<boolean> | boolean{
    
    const autorizado = this.authService.usuario.isAdmin
    if (!autorizado){
        
        this.router.navigateByUrl('/ocularVet/alumno/accesoAdminDenegado')
    }
    return of(this.authService.usuario.isAdmin)
  }

  canLoad(): Observable<boolean> | boolean
  { 

    const autorizado = this.authService.usuario.isAdmin
    if (!autorizado){
        //this.router.navigateByUrl('/ocularVet')
        this.router.navigateByUrl('/ocularVet/alumno/accesoAdminDenegado')
    }
    return of(this.authService.usuario.isAdmin)
  }
}