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
  petId: number = 1;
  petsID: Pets[] = [];

  //define the constructor
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  //define getRecordById() handler
  getRecordById() {
    this.dataService.getAllPets().subscribe((pets) => (this.petsID = pets));
    this.dataService
      .getPetById(this.petId)
      .subscribe(
        () => (this.petsID = this.petsID.filter((p) => p.id == this.petId))
      );
  }
  //define getAllRecords() handler
  getAllRecords() {
    this.dataService.getAllPets().subscribe((pets) => (this.pets = pets));
  }
}
