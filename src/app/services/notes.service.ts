import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { INotes } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  url: string = 'http://localhost:3000/notes'
  notes: any

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get(this.url)
  }

  getNote(id: number) {
    return this.http.get(`${this.url}/${id}`)
  }

  createNote(note: any):Observable<INotes> {
    return this.http.post<INotes>(this.url, note)
  }

}
