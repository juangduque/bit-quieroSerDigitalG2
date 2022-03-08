import { Component, OnInit } from '@angular/core';

import { VideoCard } from '../../models/videoCard.model';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {
  videoCards: VideoCard[] = [
    {
      image: "../../../assets/img/sportsNews.jpg",
      title: "Sport center",
      enterpriseLogo: "this is a logo",
      enterpriseName: "bbc news",
    },
    {
      image: "../../../assets/img/sportsNews.jpg",
      title: "Música chévere",
      enterpriseLogo: "vevo music",
      enterpriseName: "vevo music",
    },
    {
      image: "../../../assets/img/sportsNews.jpg",
      title: "Historia",
      enterpriseLogo: "History Channel",
      enterpriseName: "History Channel",
    }
  ];

  videoCard: VideoCard = {
    image: "",
    title: "Sport center",
    enterpriseLogo: "this is a logo",
    enterpriseName: "bbc news",
  };

  constructor() { }

  ngOnInit(): void {
  }

  onLoaded(img: string){
    console.log("parent -> img loaded", img);
  }

}
