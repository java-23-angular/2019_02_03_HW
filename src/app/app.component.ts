import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];
  currName = '';
  currEmail = '';
  currPhone = '';
  currAddress = '';

  currentContact: Contact|null = null;
  currentIndex: number = -1;

  addContact(): void{
    this.contacts.push({
      name:this.currName,
      email: this.currEmail,
      phone:this.currPhone,
      address:this.currAddress
    });
    this.currName = '';
    this.currEmail = '';
    this.currPhone = '';
    this.currAddress = '';
  }

  remove(indx: number):void{
    this.contacts.splice(indx,1);
    if(indx === this.currentIndex){
      this.currentContact = null;
    }
  }

  selectCurrent(contact: Contact, indx: number): void{
    this.currentContact = contact;
    this.currentIndex = indx;
  }
}

type Contact = {
  name: string,
  email: string,
  phone: string,
  address: string
}
