import { makeAutoObservable } from 'mobx';

export class CounterStore {
    
    value = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.value += 1;
    }

    reset() {
        this.value = 0;
    }

    decrement() {
        this.value -= 1;
    }
}
