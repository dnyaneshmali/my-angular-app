import { Component, OnInit } from '@angular/core';
import { AddressComponent } from '../address/address.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.css',
  imports: [AddressComponent, CommonModule],
})
export class ContactComponent implements OnInit {
  addressDetails = {};
  userData: any;
  userName!: string;
  productData: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.addressDetails = {
      village: 'Mendha',
      district: 'Dharashiv',
      state: 'Maharashtra',
    };

    this.authService.productDataSub$.subscribe(pData => {
      this.productData = pData;
    })
  }

  addressEventData(event: any) {
    this.userData = event;
  }

  getUserNameData() {
    this.userName = this.authService.getUserName();
  }
}
