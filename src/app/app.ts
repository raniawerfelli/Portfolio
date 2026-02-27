import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./sections/navbar/navbar";
import { Hero } from "./sections/hero/hero";
import { About } from "./sections/about/about";
import { Skills } from "./sections/skills/skills";
import { Projects } from "./sections/projects/projects";
import { Contact } from "./sections/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
