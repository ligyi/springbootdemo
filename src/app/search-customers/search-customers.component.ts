import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Observable } from 'rxjs';


@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.scss']
})
export class SearchCustomersComponent implements OnInit {
 
  gender: string;
  customers: Customer[];
 
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
    this.gender = "";
  }
 
  private searchCustomers() {
    this.customerService.getCustomersByGender(this.gender)
      .subscribe(customers => this.customers = customers);
      console.log(this.customers);
   }
 
  onSubmit() {
    this.searchCustomers();
  }


  updateActive(isActive: boolean,customer: Customer) {
    this.customerService.updateCustomer(customer.id,
      { lastname: customer.lastname, firstname: customer.firstname, middleinitial: customer.middleinitial, dob: customer.dob, gender: customer.gender, handdominance: customer.handdominance, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.searchCustomers();
        },
        error => console.log(error));
  }
  deleteCustomer(id: String) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.searchCustomers();
        },
        error => console.log(error));
  }
}