import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  message:any = []
  msg
  constructor(private _ApiService: ApiService) { }

  ngOnInit() {
    this._ApiService.currentMessage.subscribe(res => {
      this.message = res
    })
    if (this.message == '') {
      this.msg = 'fail'
    }
  }
  On_Delete = id => {
    const del = this.message.filter(wishlist => wishlist.id !== id)
    this.message = del
    if (this.message == '') {
      this.msg = 'fail'
    }
  }

}
