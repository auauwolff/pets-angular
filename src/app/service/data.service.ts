import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pets } from '../Pets';
//import necessary classes and modules

// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };

@Injectable({providedIn:'root'})
export class DataService {

    private url:string = 'https://9l30ry469k.execute-api.us-east-1.amazonaws.com/assgn2api/pets';


    //define the constructor
    constructor(private http: HttpClient) {}

    //define getAllPets() method
    getAllPets(): Observable<Pets[]> {
        return this.http.get<Pets[]>(this.url);
      }

    //define getPetById(petId:number) method
    getPetById(petId: number): Observable<Pets> {
      const url = `${this.url}/${petId}`;
      return this.http.get<Pets>(url);
    }
}