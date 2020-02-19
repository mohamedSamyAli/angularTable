import {Record} from '../app/layout/Record.model' 
import {MatTableDataSource} from '@angular/material/table';

export class tableDataService {
public dataSource = new MatTableDataSource([])

constructor(){
    
    this.dataSource.data = JSON.parse(localStorage.getItem("tableData")) || []
}
addRecord(element:Record){
    this.dataSource.data = this.dataSource.data.concat(element)
    localStorage.setItem("tableData",JSON.stringify(this.dataSource.data))
}

deletRecord(index:number){
    this.dataSource.data = this.dataSource.data.filter((e,i)=>i != index )
    localStorage.setItem("tableData",JSON.stringify(this.dataSource.data))
}

editRecord(element:Record , index:number){
  debugger
    this.dataSource.data[index] = element;
    this.dataSource.data = [...this.dataSource.data]
    localStorage.setItem("tableData",JSON.stringify(this.dataSource.data))
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}