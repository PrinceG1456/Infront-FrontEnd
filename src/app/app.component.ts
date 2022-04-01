import { Component } from '@angular/core';
import { ApiService } from 'src/app/Service/api/api.service';
import { LoadingService } from './Service/loading.service';

export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'simple-UI';
  userData: User[] = [];
  columnsToDisplay = ['id', 'username', 'name', 'email', 'phone'];
  loading$ = this.loader.loading$;

  constructor(private api: ApiService, private loader: LoadingService){}
  


  ngOnInit(){
    this.api.getUser().subscribe((data)=> {

      this.userData= data;
      console.log(this.userData);
    });
  }

  clearCacheEvent(){
    this.api.clearCache().subscribe((data)=> {
      console.log(data);

    });
  }

  reloadEvent(){
    this.api.getUser().subscribe((data)=> {

      this.userData= data;
      console.log(this.userData);
    });
  }
}


