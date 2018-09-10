import {Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

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

	constructor(private router: Router) {}

	ngOnInit() {}

	public createAccount() {

	}

	public login() {
		this.router.navigate(['/register/'])
	}

	showLoading() {

	}

	showError(text) {

	}
}