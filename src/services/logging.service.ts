import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class LoggingService {
  disableLogging: boolean = environment.disableLogging;

  log (...items: any[]) {
    if (!this.disableLogging)
    console.log(...items);
  }
}
