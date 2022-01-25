import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditNoteComponent } from './note/edit-note/edit-note.component';
import { DisplayNoteComponent } from './note/display-note/display-note.component';
import { CaseTransformPipe } from './../directives_and_pipes/caseTransform.pipe';
import { TitleStyleDirective } from 'src/directives_and_pipes/titleStyle.directive';
import { RsIfDirective } from 'src/directives_and_pipes/rsIf.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoteComponent,
    UpcomingComponent,
    WelcomeComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    EditNoteComponent,
    DisplayNoteComponent,
    CaseTransformPipe,
    TitleStyleDirective,
    RsIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
