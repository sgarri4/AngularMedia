import { Component } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { FitxaNinjaComponent } from './fitxa-ninja/fitxa-ninja.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent, AudioPlayerComponent, VideoPlayerComponent, FitxaNinjaComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
