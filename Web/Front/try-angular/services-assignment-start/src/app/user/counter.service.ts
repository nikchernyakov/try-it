export class CounterService {
    activations = 0;
    deactivations = 0;

    recordActivation() {
        this.activations++;
    }

    recordDeactivation() {
        this.deactivations++;
    }
}
