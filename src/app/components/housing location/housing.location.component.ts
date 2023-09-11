import { Component, Input } from "@angular/core";
import { HousingLocationInterface } from "src/app/interface/housing.location.interface";

@Component ({
    selector: 'app-housing-location',
    templateUrl: './housing.location.component.html',
    styleUrls: ['./housing.location.component.css']
})

export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocationInterface;
}



