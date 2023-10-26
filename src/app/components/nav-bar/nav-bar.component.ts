import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INotes } from 'src/app/models/notes';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  notes: any;
  notesSubscription!: Subscription;
  note!: INotes;
  status: boolean = false;
  
  constructor(
    private NotesService: NotesService
  ) {}

  ngOnInit(): void {
    this.notesSubscription = this.NotesService.getNotes().subscribe(
      (data) => {
        this.notes = data
      }
    )
  }
}