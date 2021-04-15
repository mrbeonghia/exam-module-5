import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: Book[]=[];

  constructor(private bookService: BookService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(): Book[]{
    this.bookService.getAllBook().subscribe(books =>{
      this.books = books;
    })
    return this.books;
  }
}
