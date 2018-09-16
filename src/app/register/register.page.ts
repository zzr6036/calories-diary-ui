import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Http, HttpModule} from '@angular/http';
import { map } from 'rxjs/operators/';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, throwError } from 'rxjs';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map'

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
  registerDetail: any;

  constructor(private alertCtrl: AlertController,
              private http: Http,
              private router: Router,) { }

  ngOnInit() {
  }

  register(){
    if(this.registerCredentials.confirmPassword != this.registerCredentials.password){
      this.showPopup("Error", 'The password confirmation does not match.')
    }
    // to do
    else{
      let registerUrl = 'http://183.90.36.107:5000/caloriesdiary/api/user/register'
      let getUrl = 'http://183.90.36.107:5000/caloriesdiary/api/user/get'
      this.registerDetail = {
        Username: this.registerCredentials.username,
        Email: this.registerCredentials.email,
        Password: this.registerCredentials.password,
        Gender: this.registerCredentials.gender
      }
      this.http.post(registerUrl, this.registerDetail, {}).pipe(map(res => res.json())).subscribe(data => {
        
      })
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
