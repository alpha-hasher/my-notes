import { Component } from '@angular/core';
import { LoggingService } from 'src/services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userAuthenticated: boolean = false;
  title = 'my-first-ng-app';
  currentMenu: string = 'home';

  constructor(private loggingService: LoggingService) {
  }

  onLogin() {
    this.userAuthenticated = true;
  }

  onSignup() {
    this.userAuthenticated = true;
  }

  onAuthChange(authState: boolean) {
    this.userAuthenticated = authState;
    this.loggingService.log('authState', authState);
  }

  menuSelected(menu: string) {
    this.currentMenu = menu;
  }
}
