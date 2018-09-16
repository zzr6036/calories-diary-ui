import {Component,OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { StatisticPage } from '../statistic/statistic.page';

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
				public navCtrl: NavController
			) {}

	ngOnInit() {}

	public createAccount() {
		this.router.navigate(['/register/'])
	}

	public login() {
		// post user login api, to do
		if(this.registerCredentials.email === 'aaa@gmail.com' && this.registerCredentials.password == '123456'){
			this.navCtrl.goForward('/tab/tabs/(statistic:statistic)')
		}
	}

	showLoading() {

	}

	showError(text) {

	}
}