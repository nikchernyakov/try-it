import {OnInit} from '@angular/core';
import {UserService} from './user.service';

export abstract class AbstractUsersComponent implements OnInit {

    users: string[];

    constructor(protected userService: UserService) {
    }

    abstract ngOnInit(): void;

}
