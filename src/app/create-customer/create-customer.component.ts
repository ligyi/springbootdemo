import { Component, OnInit } from '@angular/core';
 
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
 
@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
 
  customer: Customer = new Customer();
  _customer: Customer = new Customer();
  submitted = false;
  _dob: Date;
 
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }
 
  save() {
  
    console.log(this.customer);
    this.customerService.createCustomer(this.customer)
      .subscribe(
        data => {
          console.log(data);
          this._customer = data as Customer;
        },
        error => console.log(error));
      this.customer = new Customer();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  deleteCustomer() {
    this.customerService.deleteCustomer(this._customer.id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));

    this._customer = new Customer();
    this.submitted = false;
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(this._customer.id,
      { lastname: this._customer.lastname, firstname: this._customer.firstname, middleinitial: this._customer.middleinitial, dob: this._customer.dob, gender: this._customer.gender, handdominance: this._customer.handdominance, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this._customer = data as Customer;
        },
        error => console.log(error));
  }  

  editCustomer() {
    this.customer = this._customer;
    this.submitted = false;
  }
}