import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../book.service';
import {Subscription} from 'rxjs';
import {Book} from '../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})

export class EditBookComponent implements OnInit {
  sub: Subscription;
  id:number;
  book: Book={
    id:0,
    title:'',
    author:'',
    description:''
  }
  constructor(private router:Router,
              private activeRouter:ActivatedRoute,
              private bookService:BookService) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    })

  }

  ngOnInit(): void {
  }

  getBook(id: number){
    this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    })
  }

  updateBook(){
    this.bookService.updateBook(this.book.id,this.book).subscribe(()=>{
      alert("Cập nhật thành công!")
      this.router.navigate(['/']);
    })
  }
}
