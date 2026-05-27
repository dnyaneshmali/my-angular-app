import { Component, OnInit } from "@angular/core";
import { MultiplyPipe } from "../services/multiplication.pipes";
import { CustomDirective } from "../services/custom.directive";
import { AuthService } from "../services/auth.service";
import { TruncatePipe } from "../services/truncate.pipe";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    imports: [MultiplyPipe, CustomDirective, TruncatePipe]
})

export class HomeComponent implements OnInit {
    count = 4;
    titleText = 'This is custom pipe truncate example';
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.setUserName('Dnyanesh');
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

}