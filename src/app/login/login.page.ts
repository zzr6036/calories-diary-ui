import {Component,OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { StatisticPage } from '../statistic/statistic.page';
import { HttpClient } from '@angular/common/http';
import { Globals } from './../global';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	registerCredentials = {
		email: '',
		password: ''
	};
// 	@ViewChild('myNav') nav: NavController
//    public rootPage: any = TabsPage;

	constructor(private router: Router, 
		public navCtrl: NavController, 
		private http: HttpClient,
		private globals: Globals) {}

	ngOnInit() {}

	public createAccount() {
		this.router.navigate(['/register/'])
	}

	public login() {
		// this.navCtrl.navigateForward('/tab/tabs/(statistic:statistic)');
		// post user login api, to do
		let q = {
			Username: this.registerCredentials.email,
			Password: this.registerCredentials.password
		};

		this.http.post(this.globals.resourceUrl + '/api/user/login', q).subscribe(resp => {
			console.log(resp);
			this.navCtrl.navigateForward('/tab/tabs/(dashboard:dashboard)');
			//this.router.navigate(['/tab/tabs/(dashboard:dashboard)']);

		})
	}

	showLoading() {

	}

	showError(text) {

	}
}