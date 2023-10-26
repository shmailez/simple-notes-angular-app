import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteBodyComponent } from './components/note-body/note-body.component';
import { NotesResolver } from './services/notes.resolver';

const routes: Routes = [ 
  {path: 'notes', component: NoteBodyComponent},
  {path: 'note/:id', component: NoteBodyComponent, 
  resolve: { data: NotesResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
