import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AwesomeService} from '../awesome.service';
import {Router} from '@angular/router';
import {IAwesome} from '../iawesome';

@Component({
  selector: 'app-create-awesome',
  templateUrl: './create-awesome.component.html',
  styleUrls: ['./create-awesome.component.scss']
})
export class CreateAwesomeComponent implements OnInit {

  addAwesomeForm = this.fb.group({
    tag: ['', [Validators.required]],
    url: ['', [Validators.required]],
    descriptions: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router
  ) {
  }

  get tag() {
    return this.addAwesomeForm.get('tag');
  }
  get url() {
    return this.addAwesomeForm.get('url');
  }
  get descriptions() {
    return this.addAwesomeForm.get('descriptions');
  }

  ngOnInit() {
  }

  create() {
    const data = this.addAwesomeForm.value;
    this.awesomeService.create(data).subscribe((result: IAwesome) => {
      return this.router.navigate(['']);
    });
  }

}
