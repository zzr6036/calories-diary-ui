import {Component,OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs.page';
import { StatisticPage } from '../statistic/statistic.page';
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

	constructor(
		private router: Router, 
		public navCtrl: NavController, 
		private http: HttpClient,
		private globals: Globals,
		private storage: Storage) {}

	ngOnInit() {}

	public createAccount() {
		this.router.navigate(['/register/'])
	}

	public login() {
		const q = {
			Username: this.registerCredentials.email,
			Password: this.registerCredentials.password
		};

		this.http.post(this.globals.resourceUrl + '/api/user/login', q).subscribe((resp: any) => {
			this.storage.set('username', resp.result);
			this.navCtrl.navigateForward('/tab/tabs/(dashboard:dashboard)');
		});
	}

	showLoading() {

	}

	showError(text) {

	}
}