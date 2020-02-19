import { Component, OnInit } from '@angular/core';
import {tableDataService} from '../../services/tableDataService' 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from './modal/modal.component'
import { Record } from './Record.model';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  //public dialog: MatDialog;
  constructor( public dialog: MatDialog,public dataservice:tableDataService ) { }
 
    openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
     
      data:{}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.name && result.phone){
        this.dataservice.addRecord({...result})
        console.log('The dialog was closed',result);
      }

    });
  }

  ngOnInit(): void {
  }

}
