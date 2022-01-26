import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() isAuthenticated: boolean = false;

  @Output()
  loginStateEmitter: EventEmitter<boolean> =  new EventEmitter<boolean>();


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onRegisterClick() {

  }

  login() {
    // this.isAuthenticated = true;
    // this.loginStateEmitter.emit(true);
    this.router.navigate (['./../home/notes'], {relativeTo: this.activatedRoute});
  }
}

