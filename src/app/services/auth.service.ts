import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class AuthService {
    productData = new BehaviorSubject(undefined);
    productDataSub$ = this.productData.asObservable();
    name!: string;
    constructor() {

    }

    setUserName(name: string) {
        this.name = name;
    }

    getUserName() {
        return this.name;
    }

    setProductData(data: any) {
        this.productData.next(data);
    }
}