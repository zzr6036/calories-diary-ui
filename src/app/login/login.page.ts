import {
	Component,
	OnInit
} from '@angular/core';

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

	constructor() {}

	ngOnInit() {}

	public createAccount() {

	}

	public login() {

	}

	showLoading() {

	}

	showError(text) {

	}
}