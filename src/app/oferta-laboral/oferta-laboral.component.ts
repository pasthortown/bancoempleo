import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oferta-laboral',
  templateUrl: './oferta-laboral.component.html',
  styleUrls: ['./oferta-laboral.component.css']
})
export class OfertaLaboralComponent implements OnInit {
  webServiceURL = environment.apiUrl;
  carreras: Array<any> = [];

  constructor(public http: Http, public router: Router) {
    this.carreras.push(
      {
        icono: 'fa fa-database',
        label: 'TECNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE',
        text: 'Aplica metodologías y técnicas de investigación en la búsqueda, fundamentación y elaboración de soluciones informáticas.'
      },
      {
        icono: 'fa fa-map-o',
        label: 'GUÍA NACIONAL DE TURISMO CON NIVEL EQUIVALENTE A TECNOLOGÍA SUPERIOR',
        text: 'El Guía Nacional de Turismo graduado del ITS “YAVIRAC” es un tecnólogo capaz de identificar el patrimonio turístico del Ecuador.'
      },
      {
        icono: 'fa fa-cutlery',
        label: 'TÉNICO SUPERIOR EN ARTE CULINARIO ECUATORIANO',
        text: 'El Técnico de Arte Culinario Ecuatoriano del instituto ITSA, es un profesional que prepara y arregla.'
      },
      {
        icono: 'fa fa-line-chart',
        label: 'TECNOLOGÍA SUPERIOR EN MARKETING',
        text: 'Comprender la información textual, para textual y reconocer la mejor expresión de ideas de los autores de las áreas de la profesión.'
      },
      {
        icono: 'fa fa-plug',
        label: 'TECNOLOGÍA SUPERIOR EN ELECTROMÉCANICA',
        text: 'Tendrá una formación integral con un componente tecnológico teórico-práctico de actualidad.'
      }
    );
  }

  ngOnInit() {

  }
}
