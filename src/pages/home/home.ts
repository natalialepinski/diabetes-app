import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController,NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
   nome = '';
   email ='';

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public navParams : NavParams,
    private storage: Storage
  ) {
    this.menu = menu;
    this.menu.enable(true, 'menuLateral');


  }

  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

                type: 'line',
                data: {
                    labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
                    datasets: [
                      {
                          label: "Manhã",
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: "rgba(225, 153, 44, 0.4)",
                          borderColor: "rgba(225, 153, 44, 1)",
                          borderCapStyle: 'butt',
                          borderDash: [],
                          borderDashOffset: 0.0,
                          borderJoinStyle: 'miter',
                          pointBorderColor: "rgba(225, 153, 44, 0.9)",
                          pointBackgroundColor: "#fff",
                          pointBorderWidth: 1,
                          pointHoverRadius: 5,
                          pointHoverBackgroundColor: "rgba(225, 153, 44, 0.9)",
                          pointHoverBorderColor: "rgba(225, 153, 44, 0.9)",
                          pointHoverBorderWidth: 2,
                          pointRadius: 1,
                          pointHitRadius: 10,
                          data: [25, 30, 9, 26, 32, 70, 20],
                          spanGaps: false,
                      },
                        {
                            label: "Tarde",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [65, 59, 80, 81, 56, 55, 40],
                            spanGaps: false,
                        },
                        {
                            label: "Noite",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(3,3,3,0.4)",
                            borderColor: "rgba(3,3,3,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(3,3,3,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(3,3,3,1)",
                            pointHoverBorderColor: "rgba(3,3,3,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [15, 9, 70, 60, 50, 88, 35],
                            spanGaps: false,
                        }
                    ]
                }

            });
      }

}
