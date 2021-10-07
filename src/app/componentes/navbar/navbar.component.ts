import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicio/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authService: AutenticacionService;

  constructor(private auth: AutenticacionService) {
    this.authService = auth
  }

  ngOnInit(): void {
  }

}
