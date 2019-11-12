import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddBookComponent } from './add-book.component';
import {MatCardModule} from '@angular/material/card';
import {FormControl,ReactiveFormsModule, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookComponent],
      imports : [MatProgressBarModule,MatCardModule,MatInputModule,RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,BrowserAnimationsModule],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
