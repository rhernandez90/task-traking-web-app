import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login/login.service';
import { TokenStorageService } from 'src/services/login/TokenStorage/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private _authService : LoginService,
    private _tokenStorage : TokenStorageService
  ) { 

  }

  ngOnInit(): void {
    if (this._tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this._tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this._authService.login(username, password).subscribe(
      data => {
        this._tokenStorage.saveToken(data.accessToken);
        this._tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this._tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
