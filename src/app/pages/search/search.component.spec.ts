import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { ResultsTableComponent } from './../../components/results-table/results-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { DatePipe } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        MockSearchFormComponent,
        ResultsTableComponent,
      ],
      imports: [
        HttpClientTestingModule,
        AuthModule.forRoot({
          domain: 'YOURTENANTDOMAIN.DATACENTER.auth0.com',
          clientId: '...',
        }),
      ],
      providers: [DatePipe, AuthService],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-search-form',
  template: '',
})
class MockSearchFormComponent {}
