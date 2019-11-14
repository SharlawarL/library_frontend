import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute,Router } from '@angular/router';
import {MatInputModule} from '@angular/material';
import { UserViewComponent } from './user-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserViewComponent', () => {
  let component: UserViewComponent;
  let fixture: ComponentFixture<UserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewComponent ],
      imports: [    
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        MatDialogModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
