import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Note } from "src/models/note.model";

@Injectable({providedIn: 'root'})
export class NotesHttpService {
  serverUrl: string = "https://my-notes-5abaa-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json";

  constructor(private httpClient: HttpClient) {

  }

  addNoteToDatabase (notes: Note[]) {
    this.httpClient.post(this.serverUrl, notes).subscribe(
      response => {
        console.log('response', response);
      },
      error => {
        console.log('error', error);
      },
      () => {
        console.log('request completed')
      }
    );
  }


}
