import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {}

  caronas = [
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 5,
      countDisponiveis: 5 / 5 * 100
    },
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Universidade Federal de Minas Gerais',
      motorista: {
        nome: 'Armando Ferreira Passos',
        curso: 'Direito',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2,
      countDisponiveis: 3 / 5 * 100
    },
    {
      partida: 'Ibirité',
      destino: 'Faculdade Novos Horizontes, Barreiro',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2,
      countDisponiveis: 3 / 5 * 100
    },
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2,
      countDisponiveis: 3 / 5 * 100
    },
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2,
      countDisponiveis: 3 / 5 * 100
    },
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2,
      countDisponiveis: 3 / 5 * 100
    }
  ];

  // tslint:disable-next-line:member-ordering
  i: any = 0;
  public countPlus() {
    this.i++;
  }

  ngOnInit() {
    console.log('Carregando pagina;');
  }

  ngAfterViewInit() {
    console.log('Pagina carregada;');
  }
}
