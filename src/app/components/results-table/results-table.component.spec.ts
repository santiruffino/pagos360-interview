import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ResultsTableComponent } from './results-table.component';

describe('ResultsTableComponent', () => {
  let component: ResultsTableComponent;
  let fixture: ComponentFixture<ResultsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsTableComponent],
    });
    fixture = TestBed.createComponent(ResultsTableComponent);
    component = fixture.componentInstance;
    const mockDate = new Date();
    component.data = {
      account_id: '',
      report_date: mockDate,
      total_collected: 0,
      total_gross_fee: 0,
      total_net_amount: 0,
      data: [
        {
          informed_date: mockDate,
          request_id: 0,
          external_reference: '',
          payer_name: '',
          description: '',
          payment_date: mockDate,
          channel: '',
          amount_paid: 0,
          net_fee: 0,
          iva_fee: 0,
          net_amount: 0,
          available_at: mockDate,
        },
      ],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
