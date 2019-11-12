import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserModelComponent } from './user-model.component';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

describe('UserModelComponent', () => {
  let component: UserModelComponent;
  let fixture: ComponentFixture<UserModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModelComponent ],
      imports: [MatInputModule,
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatTabsModule,
        ],
        providers: [ { provide: MatDialogRef, useValue: {} },
          { provide: MAT_DIALOG_DATA, useValue: [] },] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
