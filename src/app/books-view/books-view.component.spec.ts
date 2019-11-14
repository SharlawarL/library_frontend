import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { BooksViewComponent } from './books-view.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OverlayModule } from "@angular/cdk/overlay";
import {MatDialogModule , MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
        MatDialogModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
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
