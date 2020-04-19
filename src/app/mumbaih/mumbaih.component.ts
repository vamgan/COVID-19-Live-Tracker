import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
const mumbai = require('../../assets/Mumbai.json');

@Component({
  selector: 'app-mumbaih',
  templateUrl: './mumbaih.component.html',
  styleUrls: ['./mumbaih.component.css']
})
export class MumbaihComponent implements AfterViewInit {
  tableobj = [];
  page = 1;
  pageSize = 10;
  pinlatlong = [
    [400001, 18.6291, 72.8919],
    [400002, 17.0509, 73.291],
    [400003, 18.95, 72.8333],
    [400004, 18.95, 72.8167],
    [400005, 18.9069, 72.8106],
    [400006, 18.95, 72.7833],
    [400007, 18.9667, 72.8167],
    [400008, 18.6291, 72.8919],
    [400009, 18.6291, 72.8919],
    [400010, 18.3667, 72.9333],
    [400011, 18.9833, 72.8333],
    [400012, 19, 72.8333],
    [400013, 18.9448, 72.8524],
    [400014, 19.0201, 72.8381],
    [400015, 19, 72.85],
    [400016, 19.0333, 72.85],
    [400017, 19.05, 72.8667],
    [400018, 19.0167, 72.8167],
    [400019, 19.0333, 72.85],
    [400020, 18.986, 72.8259],
    [400021, 18.9274, 72.8241],
    [400022, 19.0333, 72.85],
    [400024, 18.986, 72.8259],
    [400025, 19.0164, 72.8294],
    [400026, 18.9667, 72.8],
    [400027, 18.986, 72.8259],
    [400028, 18.986, 72.8259],
    [400029, 18.986, 72.8259],
    [400030, 19.0167, 72.85],
    [400031, 19.0167, 72.85],
    [400032, 19.0167, 72.85],
    [400033, 19.0167, 72.85],
    [400034, 19.0167, 72.85],
    [400035, 19.0167, 72.85],
    [400037, 19.0167, 72.85],
    [400042, 19.1026, 72.8242],
    [400043, 19.1026, 72.8242],
    [400049, 19.1026, 72.8242],
    [400050, 19.0111, 73.8747],
    [400051, 20.0435, 73.972],
    [400052, 18.7997, 72.926],
    [400053, 19.1309, 72.8526],
    [400054, 19.0111, 73.8747],
    [400055, 19.0111, 73.8747],
    [400056, 18.0704, 75.7484],
    [400057, 19.0111, 73.8747],
    [400058, 19.0111, 73.8747],
    [400059, 19.0111, 73.8747],
    [400060, 19.1699, 72.8504],
    [400061, 19.15, 72.8333],
    [400061, 19.1391, 72.8101],
    [400063, 19.1624, 72.8694],
    [400064, 19.197, 72.845],
    [400065, 19.1699, 72.8504],
    [400066, 19.1699, 72.8504],
    [400067, 19.1699, 72.8504],
    [400068, 19.2565, 72.8733],
    [400069, 19.1145, 72.8712],
    [400070, 19.0713, 72.883],
    [400071, 19.0348, 72.8929],
    [400072, 19.0737, 72.9009],
    [400074, 19.0737, 72.9009],
    [400075, 19.0737, 72.9009],
    [400076, 19.0737, 72.9009],
    [400077, 19.0737, 72.9009],
    [400078, 19.0737, 72.9009],
    [400079, 19.1149, 72.9267],
    [400080, 19.176, 72.9522],
    [400081, 19.1649, 72.9608],
    [400082, 19.1247, 72.9488],
    [400083, 19.1247, 72.9488],
    [400084, 19.1247, 72.9488],
    [400085, 19.1247, 72.9488],
    [400086, 19.1247, 72.9488],
    [400087, 19.1247, 72.9488],
    [400088, 19.0333, 72.9333],
    [400089, 19.1247, 72.9488],
    [400091, 19.235, 72.8598],
    [400092, 19.2361, 72.8338],
    [400093, 19.2355, 72.8468],
    [400094, 19.2355, 72.8468],
    [400095, 19.2355, 72.8468],
    [400096, 19.2355, 72.8468],
    [400097, 19.2355, 72.8468],
    [400098, 19.2355, 72.8468],
    [400099, 19.2355, 72.8468],
    [400101, 19.0499, 73.259],
    [400102, 19.0499, 73.259],
    [400103, 19.0499, 73.259],
    [400104, 19.0499, 73.259]
  ];
  lat = 19.19852462089984;
  lng = 72.83819434321698;
  long: number;
  lati: number;
  map: google.maps.Map;
  markers = [];
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  constructor() {
    this.getLocation();
  }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @ViewChild('myModal', { static: false }) model: ElementRef;

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
    this.populateMarker(mumbai);
  }
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
  }

  public populateMarker(data: any) {
    for (const d of data) {
      let test = d.fields.location;
      test = test.split('(')[1];
      test = test.split(')')[0];
      test = test.split(',');
      const marker = new google.maps.Marker({
        position: {
          lat: Number(test[0]),
          lng: Number(test[1])
        },
        title: d.fields.address,
        map: this.map
      });
      const infoWindow = new google.maps.InfoWindow({
        content: d.fields.htmlalladdress
      });
      this.marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
      });
      this.marker.setMap(this.map);
    }
  }
  public getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.long = +position.coords.longitude;
          this.lati = +position.coords.latitude;
          this.map.setCenter(new google.maps.LatLng(this.lati, this.long));
          this.getTable(this.lati, this.long);
        }
      });
    } else {
      alert('Please Allow Location');
    }
  }
  public getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const p = 0.017453292519943295; // Math.PI / 180
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }
  public getTable(lati, long) {
    this.tableobj = [];
    for (const data of mumbai) {
      const pointvalue = data.fields.location.replace('(', '').replace(')', '').trim().split(',');
      const pointlat = parseFloat(pointvalue[0]);
      const pointlong = parseFloat(pointvalue[1]);
      const dist = this.getDistanceFromLatLonInKm(lati, long, pointlat, pointlong);
      this.tableobj.push({
        address: data.fields.address,
        distance: dist
      });
    }
    this.tableobj.sort((a, b) => ( a.distance - b.distance));
  }

  public onSelectPincode(data) {
    const value = data.srcElement.value;
    for (const data1 of this.pinlatlong) {
      if (data1[0] === Number(value) ) {
        this.getTable(data1[1], data1[2]);
      }
    }

  }

}
