import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {AlbumMetaInfo} from '../models/albumMetaInfo';
import {AlbumPhoto} from '../models/album-photo';
import {AlbumService} from '../services/album.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-album-item-component',
  imports: [
    RouterLink
  ],
  templateUrl: './album-item-component.component.html',
  styleUrl: './album-item-component.component.css'
})
export class AlbumItemComponent implements OnChanges {

  @Input() album!: AlbumMetaInfo;
  @Output() removeAlbumItem = new EventEmitter<AlbumMetaInfo>();
  photo?: AlbumPhoto;

  constructor(private albumService: AlbumService) {
  }

  ngOnChanges(): void {
    if (this.album) {
      this.albumService.getOnePhotoOfAlbum(this.album.id)
        .subscribe((photo: AlbumPhoto | null) => {
          if (photo) {
            this.photo = photo;
          }
        })
    }
  }

  deleteAlbum(): void {
    this.removeAlbumItem.emit(this.album);
  }

}
