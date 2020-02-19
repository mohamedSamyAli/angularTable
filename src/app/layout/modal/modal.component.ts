import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{Record} from '../Record.model'
import {tableDataService} from '../../../services/tableDataService' 


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 header:string;
 validationFlag:boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent> , @Inject(MAT_DIALOG_DATA) public data: Record ) {
     this.header = data.name?"Edit":"Add";
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(){
    this.validationFlag = true;

    if(this.data && this.data.name&& this.data.name.trim() && this.data.phone  &&  new RegExp(/^[0-9]*$/).test(this.data.phone)){
      this.dialogRef.close(this.data);
    }
  }

  ngOnInit(): void {

  }

}
