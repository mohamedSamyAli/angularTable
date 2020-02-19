import { Component } from '@angular/core';
import {tableDataService} from '../services/tableDataService'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[tableDataService]
})
export class AppComponent {


  
}
