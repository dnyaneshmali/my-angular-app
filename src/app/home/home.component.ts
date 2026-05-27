import { Component, OnInit } from "@angular/core";
import { MultiplyPipe } from "../services/multiplication.pipes";
import { CustomDirective } from "../services/custom.directive";
import { AuthService } from "../services/auth.service";
import { TruncatePipe } from "../services/truncate.pipe";
import { SignalService } from "../services/signal.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    imports: [CommonModule, MultiplyPipe, CustomDirective, TruncatePipe]
})

export class HomeComponent implements OnInit {
    count = 4;
    titleText = 'This is custom pipe truncate example';
    userSignalData!:any;
    constructor(private authService: AuthService, private signalService: SignalService) {}

    ngOnInit(): void {
        this.authService.setUserName('Dnyanesh');
        let userObj = {
            firstName: 'Dnyanesh',
            lastName: 'M'
        };
        this.signalService.setSignalValue(userObj);

        this.userSignalData = this.signalService.getSignalValue();
    }

    setProductData() {
        let pData = [
            {
                pid: 1,
                proudctName: 'Watch'
            },
            {
                pid: 2,
                proudctName: 'Laptop'
            }
        ]
        this.authService.setProductData(pData)
    }

    updateSignalValue() {
        let userObj = {
            firstName: 'A',
            lastName: 'S'
        }
        this.signalService.setSignalValue(userObj);
    }

}