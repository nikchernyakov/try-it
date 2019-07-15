import { Component } from '@angular/core';
import {UserService} from './user/user.service';
import {CounterService} from './user/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent {

    constructor(public counterService: CounterService) {
    }
}
