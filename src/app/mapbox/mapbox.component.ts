import { environment } from '../../environments/environment';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as L from 'leaflet';
import { AttributeMarker } from '@angular/compiler/src/core';



@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit, AfterViewInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 19.19852462089984;
  lng = 72.83819434321698;
  geojson = [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.031952, 38.913184]
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.413682, 37.775408]
      }
    }
  ];
constructor() { }

ngOnInit(): void {
  this.map = new mapboxgl.Map({
    accessToken: environment.mapbox.accessToken,
    container: 'map',
    style: this.style,
    zoom: 13,
    center: [this.lng, this.lat]
  });
}

ngAfterViewInit() {
  const myLayer = L.mapbox.featureLayer().setGeoJSON(this.geojson).addTo(this.map);
}
}

