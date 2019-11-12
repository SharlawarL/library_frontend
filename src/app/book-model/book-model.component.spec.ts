import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { BookModelComponent } from './book-model.component';
import {MatInputModule} from '@angular/material/input';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('BookModelComponent', () => {
  let component: BookModelComponent;
  let fixture: ComponentFixture<BookModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookModelComponent ],
      imports:[MatInputModule,BrowserAnimationsModule,RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,],
      providers: [ { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },]     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
