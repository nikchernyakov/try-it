import {Component} from '@angular/core';
import {AbstractUsersComponent} from '../abstract-users.component';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent extends AbstractUsersComponent {

    ngOnInit(): void {
        this.users = this.userService.inactiveUsers;
    }

}
