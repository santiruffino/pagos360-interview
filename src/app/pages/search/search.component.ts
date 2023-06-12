import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Reporte } from 'src/app/interfaces/reporte-data';
import { Pagos360Service } from 'src/app/services/pagos360.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  fetchedData!: Reporte;
  anyData: boolean = false;
  anyError: boolean = false;
  showEmptyDataMessage: boolean = false;
  isSearching: boolean = false;
  searchClicked: boolean = false;
  todayDate = new Date();
  mockedData!: Reporte;

  constructor(
    private pagos360ApiService: Pagos360Service,
    public auth: AuthService
  ) {}

  scrollToYear(id: string) {
    const el: HTMLElement | null = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const documentHtml = document.getElementById('table-results');
    documentHtml?.blur();
  }

  searchReporte(date: string) {
    this.anyError = false;
    this.anyData = false;
    this.searchClicked = true;
    this.isSearching = true;
    this.pagos360ApiService.getReporteCobranzas(date).subscribe({
      next: (data: Reporte) => {
        this.fetchedData = data;
        this.anyData = this.fetchedData.data.length > 0 ? true : false;
        this.showEmptyDataMessage = !this.anyData && this.searchClicked;
        if (this.anyData) {
          this.searchClicked = false;
          this.isSearching = false;
          setTimeout(() => {
            this.scrollToYear('table-results');
          }, 150);
        }
        this.isSearching = false;
      },
      error: (err) => {
        this.anyError = true;
        this.isSearching = false;
        this.searchClicked = false;
        console.error(err);
      },
    });
  }
}
