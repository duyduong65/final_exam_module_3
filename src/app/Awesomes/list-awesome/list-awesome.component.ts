import {Component, OnInit} from '@angular/core';
import {IAwesome} from '../iawesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-list-awesome',
  templateUrl: './list-awesome.component.html',
  styleUrls: ['./list-awesome.component.scss']
})
export class ListAwesomeComponent implements OnInit {

  listAwesome: IAwesome[] = [];

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
    this.awesomeService.getAll().subscribe((data: IAwesome[]) => {
      this.listAwesome = data;
    });
  }

}
