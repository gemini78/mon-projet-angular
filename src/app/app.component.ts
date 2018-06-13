import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise(
    (resolve,reject)=>{
      const  date = new Date();
      setTimeout(()=>{
        resolve(date);
      },2000);
    }
  );

  appareils = [
    {
      name : 'Machine à laver',
      status :  'éteint'
    },
    {
      name : 'Télévision',
      status :  'allumé'
    },
    {
      name : 'Ordinateur',
      status :  'allumé'
    }
  ]; 

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
    setTimeout(
      ()=>{
        this.isAuth = true;
      },4000
    );
  }

  onAllumer() {
    console.log('On allume tout');
  }
}
