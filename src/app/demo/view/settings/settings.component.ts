import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/countryservice';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  billingInterval : any[];

  filteredCountries: any[];
  
  radioValues: string[];
  
  radioValue: string;

  country: any;

  text: string;

  results: string[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  filterCountry(event) {
    const query = event.query;
    this.countryService.getCountries().then(countries => {
        this.filteredCountries = this.searchCountry(query, countries);
    });
  }

  searchCountry(query, countries: any[]): any[] {
    // in a real application, make a request to a remote url with the query and
    // return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
            filtered.push(country);
        }
    }
    return filtered;
}


}
