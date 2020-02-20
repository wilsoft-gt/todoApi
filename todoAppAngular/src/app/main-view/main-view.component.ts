import { Component, OnInit } from '@angular/core';
import { MainViewService } from '../main-view.service' 

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public datos: any;

  constructor(
    private mainViewService: MainViewService
  ) { }

  ngOnInit() {
    this.getData()
  }

  async getData(): Promise<void> { 
    try {
      const response = await this.mainViewService.get_data().toPromise();
      this.datos = response;
    } catch(error) {
      this.datos = "No datos disponibles";
    }
  } 
}
