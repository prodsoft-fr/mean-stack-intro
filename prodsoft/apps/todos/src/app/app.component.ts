import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@prodsoft/api-interfaces';

@Component({
  selector: 'prodsoft-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = ' Todo App';
  names =  ['Bob', 'Ammar', 'Lee']

  counter = 0;


  changeCounter(){
    this.counter= this.counter+1;
    this.http.post<number>('/api/counter', { value: this.counter} ).subscribe();
  }
  
  constructor(private http: HttpClient) {
    this.http.get<number>('/api/counter').subscribe( 
      res => this.counter = res
      );
  }

}
