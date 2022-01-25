import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() isAuthenticated: boolean = false;

  @Output()
  loginStateEmitter: EventEmitter<boolean> =  new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  onRegisterClick() {

  }

  login() {
    this.isAuthenticated = true;
    this.loginStateEmitter.emit(true);
  }
}

