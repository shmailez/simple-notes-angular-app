import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { NotesService } from './notes.service';
import { INotes } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesResolver implements Resolve<INotes> {

  constructor(
    private NotesService: NotesService, 
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<any>{
    return this.NotesService.getNote(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['notes'])
        return EMPTY
      })
    )
  }
}
