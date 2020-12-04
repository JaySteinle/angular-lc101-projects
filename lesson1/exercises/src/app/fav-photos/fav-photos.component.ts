import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.dropbox.com/s/togw7qp0eauqoy1/ThisIsUs.png?raw=1';
  image3 = 'https://www.dropbox.com/s/yx91sbyj5g32iht/download.jpg?raw=1';

  constructor() { }

  ngOnInit() {
  }

}