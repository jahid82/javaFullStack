import { Component, OnInit } from '@angular/core';
import { Trainee } from './trainee';

@Component({
  selector: 'app-fiable-trainee-list',
  templateUrl: './fiable-trainee-list.component.html',
  styleUrls: ['./fiable-trainee-list.component.css']
})
export class FiableTraineeListComponent implements OnInit {

  traineeList: Trainee[] =[

    new Trainee("jam","boy",23,"English"),
    new Trainee("Din","roy",33,"English"),
    new Trainee("lim","loy",43,"English"),
    new Trainee("pam","soy",53,"English")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
