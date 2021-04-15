import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  book: Book = {
    id:0,
    title:'',
    author:'',
    description:''
  }
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }

  createBook(){
    this.bookService.createBook(this.book).subscribe(()=>{
      alert("Thêm mới thành công!");
      this.router.navigate(['/']);
    })
  }
}
