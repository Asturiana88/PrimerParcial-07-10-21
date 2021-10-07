import { Component, OnInit } from '@angular/core';
import { GithubDataService } from 'src/app/servicio/github-data.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  githubData = this.githubService.getGithubData()
  constructor(private githubService: GithubDataService) { }

  ngOnInit(): void {
    this.githubService.getGithubData().subscribe(data => console.log(data))
  }

}
