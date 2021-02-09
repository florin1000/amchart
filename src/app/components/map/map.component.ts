import {
  AfterViewInit,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
const targetSVG = 'M 10 2 A 8 8 0 1 0 10 18 A 8 8 0 1 0 10 2 Z M 10 6 A 1 1 0 1 1 10 14 A 4 4 0 1 1 10 6 Z';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() markers;
  @Input() lines;
  private chart: am4maps.MapChart;
  showLines = true;

  constructor(@Inject(PLATFORM_ID) private platformId,
              private zone: NgZone,
  ) {
  }

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setMap();
  }

  private setMap() {
    this.browserOnly(() => {
      const chart = am4core.create('chartdiv', am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Add zoom control
      chart.zoomControl = new am4maps.ZoomControl();
      chart.zoomControl.slider.height = 100;

      // Set initial zoom
      chart.homeZoomLevel = 1.5;
      chart.homeGeoPoint = {
        latitude: 51.509865,
        longitude: -0.118092,
      };

      const title = chart.chartContainer.createChild(am4core.Label);
      title.text = 'AMCHART MAP OVERVIEW';
      title.fontSize = 18;
      title.paddingTop = 30;
      title.paddingLeft = 30;
      title.fill = am4core.color('#969696');
      title.align = 'left';
      title.fontWeight = '800';
      title.zIndex = 100;

      chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color('#ffffff');

      // Create map polygon series
      const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.exclude = ['AQ'];
      polygonSeries.useGeodata = true;
      polygonSeries.mapPolygons.template.nonScalingStroke = true;

      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.fill = am4core.color('#dfdff4');
      const interfaceColors = new am4core.InterfaceColorSet();
      // Add images

      const imageSeries = chart.series.push(new am4maps.MapImageSeries());
      const imageTemplate = imageSeries.mapImages.template;
      imageTemplate.tooltipHTML =
        `<div>{title}</div>`;
      imageTemplate.nonScaling = true;

      const marker = imageTemplate.createChild(am4core.Sprite);
      marker.path = targetSVG;
      marker.horizontalCenter = 'middle';
      marker.verticalCenter = 'middle';
      marker.scale = 0.7;
      marker.fill = interfaceColors.getFor('alternativeBackground');

      imageTemplate.propertyFields.latitude = 'latitude';
      imageTemplate.propertyFields.longitude = 'longitude';

      imageSeries.data = this.markers;

      const lineSeries = chart.series.push(new am4maps.MapLineSeries());
      lineSeries.dataFields.multiGeoLine = 'multiGeoLine';

      const lineTemplate = lineSeries.mapLines.template;
      lineTemplate.precision = 0.01;
      lineTemplate.nonScalingStroke = true;
      lineTemplate.arrow.nonScaling = true;
      lineTemplate.arrow.width = 4;
      lineTemplate.arrow.height = 6;
      lineTemplate.arrow.fill = am4core.color('#162F52');
      // lineTemplate.stroke = interfaceColors.getFor('alternativeBackground');
      lineTemplate.width = 3;
      lineTemplate.fill = am4core.color('#162F52');
      lineTemplate.line.strokeOpacity = 0.4;

      lineSeries.data = this.showLines ? this.lines : [];
    });
  }

  filterMarkers() {
    this.markers = this.markers.slice(0, 3);
    /**
     * we need to recreate the entire map
     * **/
    this.setMap();
  }

  toggleLines() {
    this.showLines = !this.showLines;
    console.log(`${this.showLines ? 'show' : 'hide'} the connecting lines`);
    /**
     * we need to recreate the entire map
     * **/
    this.setMap();
  }

  ngOnDestroy() {
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
