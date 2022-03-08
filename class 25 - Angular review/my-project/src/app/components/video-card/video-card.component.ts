import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { VideoCard } from '../../models/videoCard.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input() text: string = "";
  @Input() videoCard: VideoCard = {
    image: "",
    title: "",
    enterpriseLogo: "",
    enterpriseName: "",
  };
  imgDefault: string = "../../../assets/img/default.png";
  @Output() loaded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  imgLoaded(){
    console.log("img loaded");
    this.loaded.emit(this.text);
  }

}
