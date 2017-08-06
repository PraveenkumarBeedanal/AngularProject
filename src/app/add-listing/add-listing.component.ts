import { Component, OnInit,ViewChild } from '@angular/core';
import {CribsService} from './../service/cribs.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm:NgForm;

  propertyTypes:Array<string>=['House','Duplex','Condo'];

  constructor(public cribsservice:CribsService) { }

  ngOnInit() {
  }

  onCribSubmit(data):void
  {
    this.cribsservice.addCrib(data);
    this.newCribForm.reset();
  }

  
}
