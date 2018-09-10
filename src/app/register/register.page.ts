import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerCredentials = {
    username: '',
		email: '',
    password: '',
    confirmPassword: '',
    gender: ''
	};

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  register(){
    if(this.registerCredentials.confirmPassword != this.registerCredentials.password){
      this.showPopup("Error", 'The password confirmation does not match.')
    }
    // to do
    else{
      
    }
  }

  async showPopup(Alert,Subtitle){
    let alter = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Password Error',
      message: 'The password confirmation does not match.',
      buttons: ['OK']
    });
    await alter.present()
  }

}
