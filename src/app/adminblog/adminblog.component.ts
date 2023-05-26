import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';


export interface PeriodicElement {
  title: string;
  id: number;
  image: string;
  published_at: string;
}

 
@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.css']
})


export class AdminblogComponent {
  dataSource : PeriodicElement[] = [
    {id: 1, title: 'Hydrogen', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 2, title: 'Helium', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 3, title: 'Lithium', image:'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 4, title: 'Beryllium', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 5, title: 'Boron', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 6, title: 'Carbon', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 7, title: 'Nitrogen', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 8, title: 'Oxygen', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 9, title: 'Fluorine', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
    {id: 10,title: 'Neon', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', published_at: 'may 22/2023'},
  ];;
  displayedColumns: string[] = ['id', 'title', 'published_at','image','actions' ];
  constructor(public dialog: MatDialog){};
  ngonInit(): void {}
   
  
  delete(id: number){
  const dialogRef = this.dialog.open(DeletedialogComponent);
  dialogRef.afterClosed().subscribe((result)=>{
    if(result=='true'){
   this.dataSource= this.dataSource.filter((data)=>data.id != id)
    }
  });
  } 
}

