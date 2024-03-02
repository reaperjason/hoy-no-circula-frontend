import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dynamicTittle = "HOY NO CIRCULA"
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Si la ruta cambia o se modifica
        this.changeTitle(event.urlAfterRedirects)
      }
    });
  }

  //Funcion para cambiar el título del navbar según el componente actual
  changeTitle(url: string) {
    this.dynamicTittle = "HOY NO CIRCULA";
    if (url == '/register') {
      this.dynamicTittle = "REGISTRO DE AUTO";
    }
    if (url == '/plate-check') {
      this.dynamicTittle = "CONSULTA HOY NO CIRCULA";
    }
  }

}
