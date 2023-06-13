import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef } from 'ag-grid-community';
import { fetchBooks } from 'src/app/store/icas.actions';
import { selectLibraryBooks } from 'src/app/store/icas.selectors';
//import { FullWidthCellRenderer } from './full-width-cell-renderer.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isLoading: boolean =  true;
  libraryBooks: any = [];

  columnDefs: ColDef[] = [
    { field: 'Title' },
    { field: 'AuthorName' },
    { field: 'CategoryName' },
    { field: 'SegmentName' }
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: 'agTextColumnFilter',
    menuTabs: ['filterMenuTab'],
  };
  
  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];
    // columnDefs: ColDef[] = [
    //   { field: 'make' },
    //   { field: 'model' },
    //   { field: 'price' }
    // ];

    // rowData = [
    //     { make: 'Toyota', model: 'Celica', price: 35000 },
    //     { make: 'Ford', model: 'Mondeo', price: 32000 },
    //     { make: 'Porsche', model: 'Boxster', price: 72000 }
    // ];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(selectLibraryBooks).subscribe((books)=> {
      if (books && books.length > 0) {
        this.libraryBooks = books;
        this.isLoading = false;
      }
      else {
        this.isLoading = true;
        this.store.dispatch(fetchBooks());
      }
      console.log(books);
    })
  }
}
