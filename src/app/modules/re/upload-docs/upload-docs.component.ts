import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {

  constructor(private cs:CustomerService) { }
  photo: File;
  adharcard: File;
  pancard: File;
  salaryslip: File;
  bankstatement: File;
  addressproof: File;


  ngOnInit(): void {
  }

  onFileChanged1(event: any) {
    this.photo = event.target.files[0];
    this.adharcard = event.target.files[0];
    this.pancard = event.target.files[0];
    this.salaryslip = event.target.files[0];
    this.bankstatement = event.target.files[0];
    this.addressproof = event.target.files[0];
  }

  onUpload() {

    const up = new FormData();
    up.append('f1', this.photo, this.photo.name);
    up.append('f2', this.adharcard, this.adharcard.name);
    up.append('f3', this.pancard, this.pancard.name);
    up.append('f4', this.salaryslip, this.salaryslip.name);
    up.append('f5', this.bankstatement, this.bankstatement.name);
    up.append('f6', this.addressproof, this.addressproof.name);
    this.cs.savedocs(up).subscribe();
    
  }

}
