import {Component, Input, OnInit} from '@angular/core';
import {AlbumPhoto} from '../models/album-photo';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {

  albumPhotos: AlbumPhoto[] = [];
  albumId : number;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.albumId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadAlbumPhotos(this.albumId);
  }

  loadAlbumPhoto(albumId: number) Observable<albumMetaInfo[]> {
    return this.AlbumService.getphotos(albumId).subscribe(albumphotos =>
})
}
}
