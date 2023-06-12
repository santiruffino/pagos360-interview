import { Reporte } from './../interfaces/reporte-data';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Pagos360Service } from './pagos360.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

describe('Pagos360Service', () => {
  let service: Pagos360Service;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });

    service = TestBed.inject(Pagos360Service);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to get data from the API via GET', () => {
    const mockDate = '17-10-2022';
    const responseMock: Reporte[] = [
      {
        account_id: '61DB5C0B',
        report_date: new Date('2022-10-18T00:00:00-03:00'),
        total_collected: 136583.62,
        total_gross_fee: 6291.72,
        total_net_amount: 130291.9,
        data: [
          {
            informed_date: new Date('2022-10-18T08:54:03-03:00'),
            request_id: 1046924,
            external_reference:
              '00000000000000000000000000000000000000000000100441',
            payer_name: 'Mauricio Linares',
            description: 'Carga de credito para apuestas de loteria $20.0',
            payment_date: new Date('2022-10-18T08:54:03-03:00'),
            channel: 'Mastercard Debit',
            amount_paid: 20,
            net_fee: 6,
            iva_fee: 1.26,
            net_amount: 12.74,
            available_at: new Date('2022-10-20T00:00:00-03:00'),
          },
        ],
      },
    ];
    service.getReporteCobranzas(mockDate).subscribe((data) => {
      expect(data.data.length).toBe(1);
      expect(data).toEqual(responseMock);
    });
  });
});
