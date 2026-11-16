# Angular Ninja Academy — Projecte docent

Projecte de demostració per a les dues presentacions **Missió 1** i **Missió 2**.

## Requisits
- Node.js 20.11+ o 22+
- npm

## Com executar-lo
```bash
npm install
npm start
```
Obre `http://localhost:4200` si no s'obre automàticament.

## Què es treballa
- **Missió 1:** JPEG/PNG/WebP/AVIF (explicació i exemples), `srcset`, `sizes`, `loading`, `alt`, MP3/OGG, MP4/WebM, `preload`, `poster`, WebVTT i `track`.
- **Missió 2:** components standalone, `ng g c`, fitxers TS/HTML/CSS, importació a `AppComponent`, compressió, compatibilitat, accessibilitat, DevTools i `IntersectionObserver`.

## On mirar el codi
- `src/app/app.component.ts` i `.html`: imports i composició.
- `src/app/gallery/`: imatges responsives.
- `src/app/audio-player/`: àudio amb fonts alternatives.
- `src/app/video-player/`: vídeo amb fonts alternatives, subtítols i IntersectionObserver.
- `src/app/fitxa-ninja/`: exemple senzill d'interpolació i component standalone.
- `public/`: fitxers que Angular publica a l'arrel del servidor.

## Demostracions a classe
1. A DevTools → Network, recarrega i filtra per Img/Media.
2. Compara l'elecció de fitxers d'imatge en amplades diferents (desactiva la memòria cau).
3. Observa que el vídeo no assigna fonts fins que s'apropa al viewport.
4. Activa els subtítols del reproductor de vídeo.
5. Canvia un `src` per una ruta incorrecta i observa l'error 404.
6. Utilitza Can I Use per revisar formats i API de navegador.

## Notes importants
- Les imatges, el so i el vídeo són **recursos originals de demostració** amb estètica ninja; no s'inclou material extret de Naruto.
- Els fitxers AVIF i WebP són exemples de compressió; les mides no pretenen demostrar cap percentatge universal d'estalvi.
- `preload="none"` és una indicació al navegador, no una garantia.
- L'observador del vídeo és un exemple avançat: es pot ensenyar el resultat sense exigir-ne la programació a l'alumnat.
- En versions/configuracions diferents d'Angular CLI, els noms i el nombre de fitxers generats poden variar.
