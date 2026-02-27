import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
openCV() {
    window.open('assets/CVOfficiel.pdf', '_blank');

  const link = document.createElement('a');
  link.href = 'assets/CVOfficiel.pdf'; // no leading slash
  link.download = 'CVOfficiel.pdf';
  link.click();
}
}
