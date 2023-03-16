import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  data:any;

  constructor(private dataService: DataServiceService){

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.dataService.getPosts().subscribe({
      next: (value) => {
        console.log(value);
        this.data = value;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
