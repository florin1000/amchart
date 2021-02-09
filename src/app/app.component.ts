import {Component} from '@angular/core';

const targetSVG = 'M 10 2 A 8 8 0 1 0 10 18 A 8 8 0 1 0 10 2 Z M 10 6 A 1 1 0 1 1 10 14 A 4 4 0 1 1 10 6 Z';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  markers = [
    {
      id: 'london',
      svgPath: targetSVG,
      title: 'London',
      latitude: 51.5002,
      longitude: -0.1262,
      scale: 1,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Brussels',
      latitude: 50.8371,
      longitude: 4.3676,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Prague',
      latitude: 50.0878,
      longitude: 14.4205,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Athens',
      latitude: 37.9792,
      longitude: 23.7166,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Reykjavik',
      latitude: 64.1353,
      longitude: -21.8952,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Dublin',
      latitude: 53.3441,
      longitude: -6.2675,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Oslo',
      latitude: 59.9138,
      longitude: 10.7387,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Lisbon',
      latitude: 38.7072,
      longitude: -9.1355,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Moscow',
      latitude: 55.7558,
      longitude: 37.6176,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Belgrade',
      latitude: 44.8048,
      longitude: 20.4781,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Bratislava',
      latitude: 48.2116,
      longitude: 17.1547,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Ljubljana',
      latitude: 46.0514,
      longitude: 14.5060,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Madrid',
      latitude: 40.4167,
      longitude: -3.7033,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Stockholm',
      latitude: 59.3328,
      longitude: 18.0645,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Bern',
      latitude: 46.9480,
      longitude: 7.4481,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Kiev',
      latitude: 50.4422,
      longitude: 30.5367,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'Paris',
      latitude: 48.8567,
      longitude: 2.3510,
      scale: 0.5,
      color: '#ff00ff'
    }, {
      svgPath: targetSVG,
      title: 'New York',
      latitude: 40.43,
      longitude: -74,
      scale: 0.5,
      color: '#ff00ff'
    }];
  lines = [
    {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 50.4422, longitude: 30.5367}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 40.4300, longitude: -74.0000}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 64.1353, longitude: -21.8952}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 37.9792, longitude: 23.7166}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 38.7072, longitude: -9.1355}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 55.7558, longitude: 37.6176}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 44.8048, longitude: 20.4781}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 48.2116, longitude: 17.1547}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 46.0514, longitude: 14.5060}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 40.4167, longitude: -3.7033}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 59.3328, longitude: 18.0645}
        ]
      ]
    }, {
      multiGeoLine: [
        [
          {latitude: 51.5002, longitude: -0.1262},
          {latitude: 46.9480, longitude: 7.4481}
        ]
      ]
    }];
}
