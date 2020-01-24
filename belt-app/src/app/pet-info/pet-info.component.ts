import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
  pet:any;
  petSorted: any;
  clicked:Boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.clicked = false;
    this._route.params.subscribe((params: Params) => {
      let obs = this._httpService.getPet(params['id']);
      obs.subscribe(data => {
        this.pet = data[0];
        while(this.pet.length > 0){
          this.petSorted.push(this.pet.pop());
          for (var i = 0; i < this.pet.length; i++){
            if (this.petSorted[this.petSorted.length-1].type == this.pet[i].type){
              this.petSorted.type.push(this.pet[i].type);
              this.pet.splice(i, 1);
            }
          }
       }
        
      })
  });
  }
  clickedFunc(){
    this.clicked = true;
  }

  like(){
    console.log('liking...');
    let obs1 = this._httpService.getPet(this.pet._id);
    
    obs1.subscribe(data => {
      console.log('got ...', data);
      let obs = this._httpService.likePet(this.pet._id, data[0].likes);
      obs.subscribe(data1 => {
        this.clickedFunc();
        console.log('liked', data1);
      })
    })
  }
  
  adopt(){
    let obs = this._httpService.removePet(this.pet._id);
    obs.subscribe(data=> {
      console.log('removed', data);
      this._router.navigate(['/pets']);
    })
  }
}
