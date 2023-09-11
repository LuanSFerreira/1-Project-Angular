import { Component, inject, Input } from "@angular/core";
import { HousingLocationInterface } from "src/app/interface/housing.location.interface";
import { HousingService } from "src/app/Services/housing.service";

@Component ({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
    housingLocationList: HousingLocationInterface[] = [];
    housingService: HousingService = inject(HousingService);

    filteredLocationList: HousingLocationInterface[] = [];
    // filteredLocationListretêm os valores que correspondem aos 
    // critérios de pesquisa inseridos pelo usuário.

    constructor() {
      this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocationInterface[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
    }

    filterResults(text: string){
      if (!text){
        this.filteredLocationList = this.housingLocationList;
      }

      this.filteredLocationList = this.housingLocationList.filter(
        HousingLocationComponent => HousingLocationComponent?.city?.toLowerCase().includes(text.toLowerCase())
      );
    }
    //Esta função usa a String filterfunção para comparar o valor do textparâmetro 
    //com a housingLocation.citypropriedade.
}