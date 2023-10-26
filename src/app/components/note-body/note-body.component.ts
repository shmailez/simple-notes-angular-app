import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { INotes } from 'src/app/models/notes';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-body',
  templateUrl: './note-body.component.html',
  styleUrls: ['./note-body.component.css']
})
export class NoteBodyComponent implements OnInit{
  notes!: INotes;
  notesSubscription!: Subscription;
  
  constructor(
    private route: ActivatedRoute, 
    private NotesService: NotesService
  ) {}

  ngOnInit(): void {
    this.notesSubscription = this.route.data.subscribe((data) => {
      this.notes = data['data'];
    });
  }
}
