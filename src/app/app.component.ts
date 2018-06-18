import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Fugit similique eum alias',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'Lorem ipsum dolor adipisicing elit Fugit similique eum alias',
      loveIts: -1,
      created_at: new Date()
    }, 
    {
      title: 'Encore un post',
      content: 'Consectetur adipisicing elit Fugit similique eum alias',
      loveIts: 0,
      created_at: new Date()
    } 
  ];
  constructor(){
   
  }

  
}
