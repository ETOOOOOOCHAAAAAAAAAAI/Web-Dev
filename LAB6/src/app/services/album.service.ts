import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumMetaInfo } from '../models/albumMetaInfo';
import { AlbumPhoto } from '../models/album-photo';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private cachedAlbums: AlbumMetaInfo[] | null = null;

  private baseUrl = 'http://localhost:3000/';
  private albumMetaInfoUrl = `${this.baseUrl}albums`;
  private albumPhotosUrl = `${this.baseUrl}photos`;

  constructor(private http: HttpClient) {}


  getAlbumMetaInfo(): Observable<AlbumMetaInfo[]> {
    if (this.cachedAlbums) {
      return of(this.cachedAlbums);
    }
    return this.http.get<AlbumMetaInfo[]>(this.albumMetaInfoUrl).pipe(
      tap(albums => this.cachedAlbums = albums)
    );
  }


  getAlbumPhotos(albumId: number): Observable<AlbumPhoto[]> {
    return this.http.get<AlbumPhoto[]>(`${this.albumPhotosUrl}?albumId=${albumId}`);
  }

  getOnePhotoOfAlbum(albumId: number): Observable<AlbumPhoto | null> {
    return this.getAlbumPhotos(albumId).pipe(
      map(photos => (photos.length > 0 ? photos[0] : null))
    );
  }


  removeAlbumFromCache(albumId: number): void {
    if (this.cachedAlbums) {
      this.cachedAlbums = this.cachedAlbums.filter(album => album.id !== albumId);
    }
  }

  getAlbumById(albumId: number): Observable<AlbumMetaInfo | null> {
    if (this.cachedAlbums) {
      return of(this.cachedAlbums.find(album => album.id == albumId) ?? null);
    }
    return this.getAlbumMetaInfo().pipe(
      map(albums => albums.find(album => album.id == albumId) ?? null)
    );
  }
}
