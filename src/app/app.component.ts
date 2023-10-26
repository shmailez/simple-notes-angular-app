import { Component, OnInit } from '@angular/core';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'notes-app';
  loading: boolean = false;
  notes: any
  note: any

  constructor(
    private notesService: NotesService
  ) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((notes) => {
      this.notes = notes
      this.loading = false
      console.log(notes)
      console.log(this.notes)
    })

  }


  // ngOnChange(){}

  // reload() {
  //   this.ngOnChange()
  // }
}
