import { Injectable} from '@angular/core';
import { HousingLocationInterface } from '../interface/housing.location.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  //  private readonly API = 'https://imobz.in/Gt513FMR_properties';

  //  constructor(private http: HttpClient) {}

  //  list(){
  //    return this.http.get(this.API);
  //  }

    submitApplication(firstName: string, lastName: string, email: string){
      console.log('Home aplication received: firstName: ${firtsName}, lastName: ${lastName}, email: ${email}');
    }

   url = 'http://localhost:3000/locations';

    async getAllHousingLocations(): Promise<HousingLocationInterface[]> {
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }
  // o código usa `fetch`. Para casos de uso mais avançados, considere usar `HttpClient` fornecido pelo Angular.

    async getHousingLocationById(id: number): Promise<HousingLocationInterface | undefined> {
      const data = await fetch(`${this.url}/${id}`);
      return await data.json() ?? {};
    }
  }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/