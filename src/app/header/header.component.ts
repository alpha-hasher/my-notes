import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeLink: string = 'home';

  @Output('onLogout') logoutEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('menuSelected') menuSelectionEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  logout () {
    //false refers to the auth state here, on logout auth state is false
    this.logoutEmitter.emit(false);
  }

  menuSelected (menu: string) {
    this.activeLink = menu;
    this.menuSelectionEmitter.emit(menu);
  }
}
