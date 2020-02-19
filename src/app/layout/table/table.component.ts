import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {tableDataService} from '../../../services/tableDataService' 
import { MatDialog } from '@angular/material/dialog';
import { Record } from '../Record.model';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ["index",'name', 'phone' , "action"];
  dataSource = new MatTableDataSource();

  constructor(public dialog: MatDialog,public dataservice:tableDataService) { }


  openDialog(data:Record , index:number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      
      data:{...data}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result && result.name && result.phone){
        this.dataservice.editRecord({...result},index)
        console.log('The dialog was closed',result);
      }

    });
  }
  ngOnInit(): void {
  this.dataSource = this.dataservice.dataSource;
  }

}
