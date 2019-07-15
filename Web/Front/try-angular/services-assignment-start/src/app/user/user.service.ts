import {CounterService} from './counter.service';

export class UserService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(public counterService: CounterService) {

    }

    setActive(id): void {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.recordActivation();
    }

    setInactive(id): void {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.recordDeactivation();
    }

}
