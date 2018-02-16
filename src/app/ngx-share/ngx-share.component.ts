import { Component, OnInit } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'app-ngx-share',
  templateUrl: './ngx-share.component.html',
  styleUrls: ['./ngx-share.component.css']
})
export class NgxShareComponent implements OnInit {
 public ab = 'https://material.angular.io';
 title = 'Vaibhav Gaikwad '
  constructor(public share: ShareButtons) { }

  ngOnInit() {
  }

}
