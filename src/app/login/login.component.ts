import { Component, OnInit } from '@angular/core';
import { style, animate, AnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userID = '';
  password = '';
  errorHint = '';
  imageURL = [
    '../../assets/images/login/senna_1920_1200.jpg',
    '../../assets/images/login/64138434_p0.jpg'
  ];
  i = 0;
  container: HTMLElement;
  constructor(private _builder: AnimationBuilder) { }

  ngOnInit() {
    this.container = document.getElementById('container');
    this.container.style.backgroundImage = `url(${this.imageURL[0]})`;
    setInterval(() => {
      this.i++;
      this.i %= this.imageURL.length;
      this._buildAnimation().create(this.container).play();
    }, 10000);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }

  cleanID() {
    this.userID = '';
  }
  cleanErrorHint() {
    this.errorHint = '';
  }

  login() {
    if (this.userID === '') {
      this.errorHint = '账号不能为空';
      const inputID = document.getElementById('id');
      inputID.focus();
      inputID.addEventListener('input', this.cleanErrorHint);
      return;
    }
    if (this.password === '') {
      this.errorHint = '密码不能为空';
      const inputPW = document.getElementById('password');
      inputPW.focus();
      inputPW.addEventListener('input', this.cleanErrorHint);
      return;
    }
    this.errorHint = '';
  }

  private _buildAnimation() {
    return this._builder.build([
        animate('500ms ease-out', style({backgroundImage: `url(${this.imageURL[this.i]})`}))
    ]);
  }
}
