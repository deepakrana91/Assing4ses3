import { AccountingDepartment, ComputerScienceDepartment } from './abstract';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit()
  {

    let meeting= new AccountingDepartment();
    meeting.printName();
    meeting.printMeeting();
    

    let meeting2= new ComputerScienceDepartment();
    meeting2.printName();
    meeting2.printMeeting();
  }
}
