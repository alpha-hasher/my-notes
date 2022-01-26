import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  submitBtnLabel: string = this.edittingANote? 'Edit' : 'Add';
  // @ViewChild('noteForm', {static: false})
  // noteForm: ElementRef;
  //static: false is default behavior after ng9 so this second property is optional unless you want to set it as true
  @ViewChild('noteForm', {static: false})
  form: NgForm;


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


  addNote () {
    console.log('added note "', this.form.value['title'], '" with content "', this.form.value['content'], '"')
    // const title = this.noteTitle.nativeElement.value;
    // const content = this.noteContent.nativeElement.value;

    // this.notesService.addNote({title: title, content: content});
    // //this clears any dirty or erroneous states of the form as well
    // form.reset();
  }

  editNote () {
    const title = this.form.value['title'];
    const content = this.form.value['content']

    this.notesService.editNote({title: title, content: content});

    this.selectedNoteContent = "";
    this.selectedNoteTitle = "";
    this.edittingANote = false;
    //this clears any dirty or erroneous states of the form as well
    this.form.reset();
  }

  deleteNote() {
    const confirmDelete = confirm("Are you sure that you want to delete this note?");
    if (confirmDelete) {
      this.notesService.deleteNote();
    }
    this.selectedNoteContent = "";
    this.selectedNoteTitle = "";
    this.edittingANote = false;
    this.form.reset();
  }

  addDummyNote () {
    this.form.setValue({
      title: 'A dummy note',
      content: 'with a dummy content'
    });

    //another way is given below, patch value overrides provided properties only
    /*
    this.form.form.patchValue({
      title: 'some title'
    })
    */
  }

}
