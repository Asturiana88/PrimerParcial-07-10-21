import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { AutenticacionService } from 'src/app/servicio/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new Usuario

  constructor(private auth: AutenticacionService) {
    this.auth = auth
  }

  ngOnInit(): void {
  }

  accesoRapido() {
    this.user.password = "test@test.com";
    this.user.email = "test@test.com";
  }

  loggedIn() {
    this.auth?.SignIn(this.user.email, this.user.password)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

}
