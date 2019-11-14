import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTabsModule} from '@angular/material/tabs';
import { LogsComponent } from './logs.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {
  MatSnackBarModule, MatSidenavModule, MatProgressBarModule, MatListModule, MatCheckboxModule,
  MatTooltipModule
} from '@angular/material';
describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsComponent ],
      imports :[ MatCardModule,
        MatInputModule,
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule, 
        BrowserAnimationsModule,
        MatTabsModule,
        MatTableModule,
        MatSelectModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatListModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatPaginatorModule
      ],
      providers: [MatPaginator,MatSort,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
