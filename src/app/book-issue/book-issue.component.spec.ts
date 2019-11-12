import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookIssueComponent } from './book-issue.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('BookIssueComponent', () => {
  let component: BookIssueComponent;
  let fixture: ComponentFixture<BookIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookIssueComponent ],
      imports : [MatInputModule,BrowserAnimationsModule] ,
      providers: [ { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },]     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
