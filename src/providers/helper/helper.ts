import { Injectable } from '@angular/core';

@Injectable()
export class HelperProvider {
	constructor() {}

	public toggleRegister() {
		let elements = document.getElementsByClassName('login-content') as HTMLCollectionOf<HTMLElement>;
		let element = elements[0];
		if (element.classList.contains('open'))
			element.classList.remove('open');
		else element.classList.add('open');
	}
}
