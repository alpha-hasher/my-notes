import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from 'src/services/logging.service';
import { NotesService } from 'src/services/notes.service';

@Component({
  selector: 'edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{
  selectedNoteTitle: string = "";
  selectedNoteContent: string = "";
  edittingANote: boolean = false;
  // @ViewChild('noteForm', {static: false})
  // noteForm: ElementRef;
  //static: false is default behavior after ng9 so this second property is optional unless you want to set it as true
  @ViewChild('title', {static: false})
  noteTitle: ElementRef ;
  //default static: false
  @ViewChild('content')
  noteContent: ElementRef;

  noteSelectedSubscription: Subscription;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.noteSelectedSubscription = this.notesService.noteSelected.subscribe( note => {
      if (note.title || note.content) {
        this.edittingANote = true;
        this.selectedNoteTitle = note.title;
        this.selectedNoteContent = note.content;
      }
    })
  }


  addNote (form: HTMLFormElement) {
    const title = this.noteTitle.nativeElement.value;
    const content = this.noteContent.nativeElement.value;

    this.notesService.addNote({title: title, content: content});
    //this clears any dirty or erroneous states of the form as well
    form.reset();
  }

  editNote (form: HTMLFormElement) {
    const title = this.noteTitle.nativeElement.value;
    const content = this.noteContent.nativeElement.value;

    this.notesService.editNote({title: title, content: content});

    this.selectedNoteContent = "";
    this.selectedNoteTitle = "";
    this.edittingANote = false;
    //this clears any dirty or erroneous states of the form as well
    form.reset();
  }

}
