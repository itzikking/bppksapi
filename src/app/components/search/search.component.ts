import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user
  books: any = []
  wishlists: any = []
  displayedColumns: string[] = ['name',];
  dataSource = new MatTableDataSource(this.books);
  message: string;
  msg


  constructor(
    private _ApiService: ApiService,
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem("username");
    this._ApiService.currentMessage.subscribe(message => this.message = message)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this._ApiService.GET_ALL(filterValue).subscribe({ next: (res) => { this.books = res.items } })
  }
  On_Search(value: any) {
    const result = this.wishlists.find(({ id }) => id === value);
    if (result !== undefined) {
      this.msg = 'fail'
    }
    else {
      this._ApiService.GET_ONE(value).subscribe(res => {
        this.wishlists.push(res)
        this._ApiService.changeMessage(this.wishlists)
      })
      this.msg = 'success'
    }
  }

}
