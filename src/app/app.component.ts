import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular100days';
  date = new Date()
  user = {
    name: 'son',
    age: 18
  }

  intervals = interval(1000)

  info = {
    name: 'son',
    address: 'Hà Nội',
    age: 18
  }
}
