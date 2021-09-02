import { Component, OnInit, Input } from '@angular/core';
import { Pets } from './Pets';
import { DataService } from './service/data.service';
import { FormsModule } from '@angular/forms';
//import necessary classes and modules

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assgn2app';
  //declare necessary variables
  pets: Pets[] = [];
  petId: any;
  petsById: Pets = new Pets();

  //define the constructor
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  //define getRecordById() handler
  getRecordById() {
    if (this.petId > 3 || this.petId < 1 || this.petId || !this.petId) {
      alert('Please inser only IDs among 1,2,3');
      return;
    }
    this.dataService
      .getPetById(this.petId)
      .subscribe((pets) => (this.petsById = pets));
  }
  //define getAllRecords() handler
  getAllRecords() {
    this.dataService.getAllPets().subscribe((pets) => (this.pets = pets));
  }
}
