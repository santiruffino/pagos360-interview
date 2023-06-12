import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<string>();
  @Input() anyError: boolean = false;
  @Input() showEmptyDataMessage: boolean = false;
  @Input() isSearching: boolean = false;
  yesterdayDate = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
  dateToSearch!: string;


  public searchForm: FormGroup = this.fb.group({
    date: ['', Validators.required],
  });

  constructor(public fb: FormBuilder, private datePipe: DatePipe) {}

  searchReporte() {
    this.dateToSearch =
      this.datePipe.transform(this.date?.value, 'dd-MM-yyyy') || '';
    this.search.emit(this.dateToSearch);
  }

  get date() {
    return this.searchForm.get('date');
  }
}
