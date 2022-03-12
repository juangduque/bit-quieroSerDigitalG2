import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  videoData = {
    title: "El título del video",
    brandName: "Nombre de la marca",
    views: 0,
    time: new Date(),
  }

  constructor() { }

  ngOnInit(): void {
  }

}
