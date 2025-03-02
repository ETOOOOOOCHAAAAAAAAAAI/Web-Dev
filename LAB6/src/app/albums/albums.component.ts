import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {AlbumMetaInfo} from '../models/albumMetaInfo';
import {AlbumItemComponent} from '../album-item-component/album-item-component.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-albums',
  imports: [
    CommonModule,
    AlbumItemComponent
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albumsMetaInfo: AlbumMetaInfo[] = [];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums() {
    this.albumService.getAlbumMetaInfo().subscribe(album =>{
      this.albumsMetaInfo = album;
    });
  }


  removeAlbum(deletingAlbum: AlbumMetaInfo): void {
    this.albumsMetaInfo = this.albumsMetaInfo.filter(album => album.id !== deletingAlbum.id);
    this.albumService.removeAlbumFromCache(deletingAlbum.id);
  }
}
