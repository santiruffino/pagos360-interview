import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [DatePipe],
    });
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    component.searchForm = formBuilder.group({
      date: new FormControl(
        {
          value: ['2022-10-21'],
          disabled: true,
        },
        Validators.required
      ),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchReporte', function () {
    it('should emit event', () => {
      const mockDate = '20-10-2022';
      spyOn(component.search, 'emit');
      component.searchReporte();
      expect(component.search.emit).toHaveBeenCalledWith(mockDate);
    });
  });
});
