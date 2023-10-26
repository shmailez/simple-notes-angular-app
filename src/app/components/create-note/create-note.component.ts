import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl(''), 
    body: new FormControl('')
  })

  constructor(
    public modalService: ModalService,
    public noteService: NotesService
  ) {}

  ngOnInit(): void {}
  
  submit(){
    console.log(this.form.value)
    this.noteService.createNote({
      title: this.form.value.title as string, 
      body: this.form.value.body as string
    }).subscribe(() => {
      this.modalService.close()
      window.location.reload()
      // this.noteService.getNotes()
    })}

}
