import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Etrigan'];
  heroeB: any = '';

  borrarHeroe() {
    this.heroeB = this.heroes.shift() || '';
  }


}
