import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotesService } from 'src/services/notes.service';
import { Note } from "../../models/note.model";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit, OnDestroy {
  myNotes: Note[] = [];
  modeIsEditOrCreate: boolean = true;
  private notesUpdatedSubscription: Subscription | undefined;

  constructor(private notesService: NotesService) {  }

  ngOnInit(): void {
    this.myNotes = this.notesService.fetchNotes();
    this.notesUpdatedSubscription = this.notesService.notesUpdated.subscribe((notes: Note[]) => {
      this.myNotes = notes;
    });
  }

  ngOnDestroy () {
    this.notesUpdatedSubscription?.unsubscribe();
  }


  noteSelected (index: number) {
    this.notesService.aNoteIsSelected(index);
  }
}
