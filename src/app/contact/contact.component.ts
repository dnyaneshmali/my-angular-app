import { Component, OnInit } from '@angular/core';
import { AddressComponent } from '../address/address.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.css',
  imports: [AddressComponent, CommonModule],
})
export class ContactComponent implements OnInit {
  addressDetails = {};
  userData: any;
  constructor() {}

  ngOnInit(): void {
    this.addressDetails = {
      village: 'Mendha',
      district: 'Dharashiv',
      state: 'Maharashtra',
    };
  }

  addressEventData(event: any) {
    this.userData = event;
  }
}
