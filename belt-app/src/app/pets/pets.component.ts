import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  allPets:any;
  petSorted:any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.petSorted = [];
    let obs = this._httpService.getAllPets();
    obs.subscribe(data => {
      this.allPets = data;
      while(this.allPets.length > 0){
        this.petSorted.push(this.allPets.pop());
        for (var i = 0; i < this.allPets.length; i++){
          if (this.petSorted[this.petSorted.length-1].type == this.allPets[i].type){
            this.petSorted.push(this.allPets[i]);
            this.allPets.splice(i, 1);
          }
        }
     }
    })
  }

}
