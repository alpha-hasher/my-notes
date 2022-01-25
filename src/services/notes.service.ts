import { Injectable } from "@angular/core";
import { Note } from "../models/note.model";
import { LoggingService } from "./logging.service";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class NotesService {
  myNotes: Note[] = [{
    title: 'Car Service',
    content: 'Get the car serviced at Bosch on the coming Friday'
  }];

  selectedNoteId: number = -1;
  editMode: boolean = false;
  //Don't use EventEmitters to emit data, Angular intended to use EventEmitters for event emitting in directives and components
  //their behaviour may change in the future, they may or may not use observables in the future
  //hence use Subjects instead and use eventEmitters only for component's and directive's event emission
  notesUpdated: Subject<Note[]> = new Subject<Note[]>();
  noteSelected: Subject<Note> = new Subject<Note>();
// service injected into another service
  constructor(private loggingService: LoggingService) {
  }


  aNoteIsSelected (index: number) {
    this.selectedNoteId = index;
    this.editMode = true;
    this.noteSelected.next(this.myNotes.slice()[this.selectedNoteId]);
  }

  fetchNotes(): Note[]  {
    this.loggingService.log('fetch notes called and notes returned are: ', this.myNotes.slice());
    return this.myNotes.slice();
  }

  deleteNote () { // (noteId: number)
    const deletedNote = this.myNotes.splice(this.selectedNoteId, 1);
    this.selectedNoteId = -1;
    this.editMode = false;
    this.loggingService.log('note deleted: ', deletedNote[0]);
    this.updateNotesListners();
  }

  addNote (note: Note) {
    this.myNotes.push(note);
    this.loggingService.log('note added: ', note);
    this.updateNotesListners();
  }

  editNote (note: Note) {
    this.myNotes[this.selectedNoteId] = note;
    this.loggingService.log('note updated at position: ', this.selectedNoteId, "is", note);
    this.editMode = false;
    this.selectedNoteId = -1;
    this.updateNotesListners();
  }

  updateNotesListners () {
    this.loggingService.log('Change(s) in Notes broadcasted');
    this.notesUpdated.next(this.myNotes.slice());
  }
}
