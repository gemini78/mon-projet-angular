import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  loveIts = 0;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLoveIt:number;
  
  constructor() { }

  ngOnInit() {
  }
  
  loveIt(){
    this.postLoveIt++;
  }
  
  dontLoveIt(){
    this.postLoveIt--;
  }

}
