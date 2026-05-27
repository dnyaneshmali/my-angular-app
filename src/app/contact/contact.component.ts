import { Component, OnInit } from '@angular/core';
import { AddressComponent } from '../address/address.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { SignalService } from '../services/signal.service';

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
  userSignalData:any
  constructor(private authService: AuthService, private route: ActivatedRoute, private signalService: SignalService) {}

  ngOnInit(): void {
    this.addressDetails = {
      village: 'Mendha',
      district: 'Dharashiv',
      state: 'Maharashtra',
    };

    this.authService.productDataSub$.subscribe(pData => {
      this.productData = pData;
    })

    this.userSignalData = this.signalService.getSignalValue();
  }

  addressEventData(event: any) {
    this.userData = event;
  }

  getUserNameData() {
    this.userName = this.authService.getUserName();
  }
}
