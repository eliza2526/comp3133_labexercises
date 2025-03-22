import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { InputFormatDirective } from '../input-format.directive';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [NgFor, NgIf, FormsModule, UpperCasePipe, RemoveSpacesPipe, InputFormatDirective],
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
