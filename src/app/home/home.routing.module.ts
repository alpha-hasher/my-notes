import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

import { NoteComponent } from "../note/note.component";
import { UpcomingComponent } from "../upcoming/upcoming.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
      {
        path: 'home', component: HomeComponent,
        children: [
          {
            path: 'notes',
            component: NoteComponent,
            children: [
              {
                path: ':id', component: NoteComponent
              }
            ]
          },
          {
            path: 'upcoming', component: UpcomingComponent
          }
        ]
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
