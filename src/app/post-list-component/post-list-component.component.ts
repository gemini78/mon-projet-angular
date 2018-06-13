import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  loveIts = 0;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLoveIt:number;
  constructor() { 
    
  }

  ngOnInit() {
  }

  loveIt(){
    this.postLoveIt++;
  }
  
  dontLoveIt(){
    this.postLoveIt--;
  }
}
