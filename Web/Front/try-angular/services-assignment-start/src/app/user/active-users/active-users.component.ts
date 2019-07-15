import {Component, OnInit} from '@angular/core';
import {AbstractUsersComponent} from '../abstract-users.component';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent extends AbstractUsersComponent {

    ngOnInit(): void {
        this.users = this.userService.activeUsers;
    }

}
