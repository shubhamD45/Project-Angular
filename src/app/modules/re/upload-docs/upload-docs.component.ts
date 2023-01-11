import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Docs } from 'src/app/docs';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {

  constructor(private es: EmployeeService) { }
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
    up.append('photo', this.photo, this.photo.name);
    up.append('adharcard', this.adharcard, this.adharcard.name);
    up.append('addressproof', this.addressproof, this.addressproof.name);
    up.append('bankstatement', this.bankstatement, this.bankstatement.name);
    up.append('pancard', this.pancard, this.pancard.name);
    up.append('salaryslip', this.salaryslip, this.salaryslip.name);
    this.es.savedocs(up).subscribe();

  }
}

