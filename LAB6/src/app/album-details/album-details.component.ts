import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AlbumMetaInfo} from '../models/albumMetaInfo';
import {AlbumService} from '../services/album.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  album: AlbumMetaInfo | null = null;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const albumId = Number(params.get('id'));
      this.loadAlbum(albumId);
    });
  }

  loadAlbum(albumId: number) {
    this.albumService.getAlbumById(albumId).subscribe(album => this.album = album);
  }


  saveTitle() {
    // if (this.album) {
    //   this.albumService.updateAlbum(this.album).subscribe(updateAlbum => this.album = updateAlbum);
    // }

  }
}
