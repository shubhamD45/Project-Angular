import { Component, OnInit } from '@angular/core';
import { Enquiry } from 'src/app/pojo/enquiry';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-view-en',
  templateUrl: './view-en.component.html',
  styleUrls: ['./view-en.component.css']
})
export class ViewENComponent implements OnInit {

  enquiry: Enquiry[];
  enq: Enquiry = new Enquiry();

  cibil:string='get cibil';
  
  constructor(private cs: CustomerService) { }

  ngOnInit(): void {
    this.cs.getAllEnquiry().subscribe(data => {
      this.enquiry = data;
    });
  }

  getCibil(id:number){
    this.cs.getCibil(id).subscribe(data =>{
      this.enq.cibil=data;
      window.location.reload();
    });
  }

  onclick(id:number){
    this.cs.changeStatus(id).subscribe();
    window.location.reload();

  }
}
