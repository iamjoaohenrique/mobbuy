import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { GetprofilesService } from 'src/app/services/getprofiles.service';


@Component({
  selector: 'app-listcompanies',
  templateUrl: './listcompanies.component.html',
  styleUrls: ['./listcompanies.component.scss']
})


  export class ListcompaniesComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['nome', 'descricao'];
  

    constructor(private GetprofilesService : GetprofilesService){

    }
  
    ngOnInit(): void {
      this.getDados();
    }

    getDados() {
      this.GetprofilesService.getProfiles().subscribe(
        (success) => {
          console.log (success);
          this.dataSource = success;
        },
        (error)=> {console.log (error)}
      );
    }
  }
