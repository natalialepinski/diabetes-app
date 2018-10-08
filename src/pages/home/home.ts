import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController,NavParams,ActionSheetController,AlertController, LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
import { Camera, PictureSourceType } from '@ionic-native/camera';
import * as Tesseract from 'tesseract.js';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedImage: string;
  imageText: string;

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
   nome = '';
   email ='';

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public menu: MenuController,
    public navParams : NavParams,
    private storage: Storage,
    private camera: Camera,
    private actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController
  ) {
    this.menu = menu;
    this.menu.enable(true, 'menuLateral');


  }

  //Selecionar img //
    selectSource() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Use Library',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Capture Image',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  //Fim Selecionar img //

  //Config da imagem capturada //
  getPicture(sourceType: PictureSourceType) {
     this.camera.getPicture({
       quality: 100,
       destinationType: this.camera.DestinationType.DATA_URL,
       sourceType: sourceType,
       allowEdit: true,
       saveToPhotoAlbum: false,
       correctOrientation: true
     }).then((imageData) => {
       this.selectedImage = `data:image/jpeg;base64,${imageData}`;
       const confirm = this.alertCtrl.create({
        title: 'Imagem Carregada!',
        message: 'Vamos Analisar sua Imagem',
        buttons: [
          {
            text: 'Continuar',
            handler: () => {
              this.recognizeImage();
            }
          }
        ]
      });
      confirm.present();
     });
   }
   //FIM Config da imagem capturada //

   //Processamento da imagem //
   recognizeImage() {
    let loading = this.loadingCtrl.create({
      content: 'Analisando Imagem...'
    });
  
    loading.present();
   Tesseract.recognize(this.selectedImage)
   .catch(err => console.error(err))
   .then(result => {
     this.imageText = result.text;
   })
   .finally(resultOrError => {
    loading.dismiss();
   });
 }
 //Fim Processamento da imagem //

  //Dialogo inserir Medicao//
  showPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'Adicionar',
    message: "Adcione uma nova medição",
    inputs: [
      {
        name: 'medicao',
        placeholder: 'Nova Medição',
        type:'number'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          this.imageText = data.medicao;
          console.log('Saved clicked');
        }
      }
    ]
  });
  prompt.present();
}
//Fim Dialogo inserir Medicao//



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


      //Spinner ///
      presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
      
        loading.present();
      
        setTimeout(() => {
          loading.dismiss();
        }, 5000);
      }

}
