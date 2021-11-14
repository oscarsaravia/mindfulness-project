import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  cardSelected = 0;
  activityName = '';
  activityDesc = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  selectCard(card: number): void {
    this.cardSelected = card;
    switch (card) {
      case 1:
        this.activityName = 'En otros zapatos';
        this.activityDesc = 'Este ejercicio me gusto mucho porque pude ponerme en la situacion de otra persona, pasamos mucho tiempo de nuestra vida viviendo en una burbuja y no nos damos cuenta de lo privilegiados que somos. Lo he puesto en practica tratando de tener mas empatia con los demas, sabiendo que las personas pueden estar pasando tiempos dificiles.'
        break;
      case 2:
        this.activityName = 'Las huellas del tiempo';
        this.activityDesc = 'Esta actividad me gusto mucho poruqe me hizo recordar mi infancia, me hizo recordad la epoca donde era feliz sin necesidad de tener tantas cosas. He puesto en practica lo que aprendi en esta actividad tratando de buscar alegria en las cosas mas simples.'
        break;
      case 3:
        this.activityName = 'Rueda de la vida';
        this.activityDesc = 'En esta actividad pude darme cuenta de la forma en que manejo los diferentes aspectos en mi vida, y que no le estoy dando prioridad a algunas cosas que son muy importantes y estoy dejando de lado. Para poner esto en practica, observe las areas que tenia mas desatendidas y estoy tratando de dedicarles mas tiempo.'
        break;
      default:
        break;
    }
  }

}
