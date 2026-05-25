import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-address',
    templateUrl: 'address.component.html',
    styleUrl: 'address.component.css',
    imports: [CommonModule]
})

export class AddressComponent {
    @Input() addressDetails: any;
    @Output() sendAddressData = new EventEmitter();
    constructor() {}

    sendEvent() {
        let obj = {
            fName: 'D',
            lNmae: 'M'
        }
        this.sendAddressData.emit(obj)
    }
}