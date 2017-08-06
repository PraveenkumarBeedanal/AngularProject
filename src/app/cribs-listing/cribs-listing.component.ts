import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {CribsService} from './../service/cribs.service';
import {UtilService} from './../service/util.service'; 

@Component({
  selector: 'app-cribs-listing',
  templateUrl: './cribs-listing.component.html',
  styleUrls: ['./cribs-listing.component.css']
})
export class CribsListingComponent implements OnInit {

  Cribs: Array<any>;
  error:string;
  sortDirection:string = 'asc'; 
  sortField:String ='price';
  sortFields:Array<string>=[
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'type',
    'price'
    
  ];

  constructor(private http:Http,
  private cribsservice: CribsService,
  private utilService: UtilService  
) { }

  ngOnInit() {
    
    this.cribsservice.getAllCribs()
    .subscribe( 
      data => this.Cribs= data,
      error => this.error=error.statusText
    );

    this.cribsservice.newCribSubject.subscribe(
      data => this.Cribs =[data , ...this.Cribs]
    )


  }

}
