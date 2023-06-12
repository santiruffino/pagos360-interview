import { Reporte } from './../../interfaces/reporte-data';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsTableComponent {
  @Input() data!: Reporte;

  constructor() {}
}
