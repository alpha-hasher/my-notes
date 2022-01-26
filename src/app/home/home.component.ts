import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userAuthenticated: boolean = true;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('activeRout', this.activeRoute)
  }

  logout () {
    //false refers to the auth state here, on logout auth state is false
    this.userAuthenticated = false;
  }

}
