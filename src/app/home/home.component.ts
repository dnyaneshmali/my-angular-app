import { Component, OnInit } from "@angular/core";
import { MultiplyPipe } from "../services/multiplication.pipes";
import { CustomDirective } from "../services/custom.directive";
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    imports: [MultiplyPipe, CustomDirective]
})

export class HomeComponent implements OnInit {
    count = 4;
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