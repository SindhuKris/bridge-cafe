import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent {

  path!:string;

  constructor(
    public activeRouter:ActivatedRoute
  ){
    this.activeRouter.paramMap
    .subscribe((data: any) => {
        this.path = data.get('dish');
    });
  }
}
