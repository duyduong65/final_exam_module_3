import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AwesomeService} from '../awesome.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IAwesome} from '../iawesome';

@Component({
  selector: 'app-edit-awesome',
  templateUrl: './edit-awesome.component.html',
  styleUrls: ['./edit-awesome.component.scss']
})
export class EditAwesomeComponent implements OnInit {

  editAwesomeForm = this.fb.group({
    tag: ['', [Validators.required]],
    url: ['', [Validators.required]],
    descriptions: ['', [Validators.required]],
  });
  index = this.route.snapshot.paramMap.get('id');

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router,
              private route: ActivatedRoute) {
  }
  get tag() {
    return this.editAwesomeForm.get('tag');
  }
  get url() {
    return this.editAwesomeForm.get('url');
  }
  get descriptions() {
    return this.editAwesomeForm.get('descriptions');
  }

  destroy() {
    if (confirm('ban co mua xoa')) {
      this.awesomeService.destroy(+this.index).subscribe(result => {
        return this.router.navigate(['']);
      });
    }
  }

  update() {
    const awesome = this.editAwesomeForm.value;
    this.awesomeService.update(+this.index, awesome).subscribe((data: IAwesome) => {
      return this.router.navigate(['']);
    });
  }

  ngOnInit() {
    this.awesomeService.findById(+this.index).subscribe((data: IAwesome) => {
      this.editAwesomeForm.patchValue({
        tag: data.tag,
        url: data.url,
        descriptions: data.descriptions,
      });
    });
  }

}
