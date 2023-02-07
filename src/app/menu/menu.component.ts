import { Component } from '@angular/core';

type dish={
  name:string
};
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public dishes=[
    {
      name:"maincourse"
    },
    {
      name:"starter"
    },
    {
      name:"dessert"
    },
    {
      name:"soups"
    },
    {
      name:"salads"
    }
  ]

}
