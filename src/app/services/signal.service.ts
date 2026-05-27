import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SignalService {
    user = signal({});
    constructor() {}

    setSignalValue(userData: any) {
        this.user.set(userData)
    }

    getSignalValue() {
        return this.user;
    }
}