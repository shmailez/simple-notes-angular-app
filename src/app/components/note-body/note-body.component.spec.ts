import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBodyComponent } from './note-body.component';

describe('NoteBodyComponent', () => {
  let component: NoteBodyComponent;
  let fixture: ComponentFixture<NoteBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
