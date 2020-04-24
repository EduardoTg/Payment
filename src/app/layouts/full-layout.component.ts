import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  public disabled: boolean = false;
  usuario: any = {}
  constructor(private router: Router) {
    this.usuario = 'usuario';
  }


  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  cerrarSesion() {
    window.localStorage.removeItem("usuario");
    window.localStorage.removeItem("token");
    this.router.navigate(['/login'])
  }


  ngOnInit(): void { }
}
