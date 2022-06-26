import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbardService } from 'app/core/services/snackbard.service';
import { TokenService } from 'app/core/services/token.service';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formLogin = new FormGroup({
    nombreUsuario: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router,
    private snakbarService: SnackbardService
  ) { }

  ngOnInit(): void {
  }

  get nombreUsuario() {
    return this.formLogin.get('nombreUsuario').value;
  }

  get password() {
    return this.formLogin.get('password').value;
  }

  onLogin(): void {
    this.loginService.login(new LoginDto(this.nombreUsuario, this.password))
      .subscribe({
        next: (data) => {
          if (!data.token) {
            this.snakbarService.openSnackBar('Usuario o Contraseña incorrecta')
          } else {
            this.tokenService.setToken(data.token);
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          console.error(err.error.message, 'Fail')
          this.snakbarService.openSnackBar(err.error.message)
        }
      })
  }
}
