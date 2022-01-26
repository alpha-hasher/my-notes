import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CaseTransformPipe } from "src/directives_and_pipes/caseTransform.pipe";
import { RsIfDirective } from "src/directives_and_pipes/rsIf.directive";
import { TitleStyleDirective } from "src/directives_and_pipes/titleStyle.directive";
import { EditNoteComponent } from "../note/edit-note/edit-note.component";
import { NoteComponent } from "../note/note.component";
import { UpcomingComponent } from "../upcoming/upcoming.component";
import { HomeRoutingModule } from "./home.routing.module"
@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    NoteComponent,
    EditNoteComponent,
    UpcomingComponent,
    CaseTransformPipe,
    TitleStyleDirective,
    RsIfDirective
  ]
})
export class HomeModule {}
