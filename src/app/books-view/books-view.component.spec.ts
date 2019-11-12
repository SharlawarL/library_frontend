import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { BooksViewComponent } from './books-view.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OverlayModule } from "@angular/cdk/overlay";
import {MatDialogModule} from '@angular/material';
describe('BooksViewComponent', () => {
  let component: BooksViewComponent;
  let fixture: ComponentFixture<BooksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksViewComponent ],
      imports: [    
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        OverlayModule,
        MatDialogModule
      ],
      providers: [MatDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
