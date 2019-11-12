import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [    
      RouterTestingModule,
      HttpClientTestingModule,
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
