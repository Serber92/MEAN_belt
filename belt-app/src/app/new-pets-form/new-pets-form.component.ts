import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-pets-form',
  templateUrl: './new-pets-form.component.html',
  styleUrls: ['./new-pets-form.component.css']
})
export class NewPetsFormComponent implements OnInit {
  newPet:any;
  error: String;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newPet = {name: "", type: "", description: "", skill1:"", skill2: "", skill3: "", likes: 0}
  }

  onSubmit() {
    let flag = false;
    console.log('adding pet from component');
      console.log('checking name....');
      let check:any = this._httpService.getAllPets();
      check.subscribe(data => {
        data.forEach(element => {
          if(element.name == this.newPet.name){
            console.log('name exists');
            this.error = "Name exists";
            flag = true;
          }
        });
        if(!flag){
          let obs:any = this._httpService.addPet(this.newPet);
          obs.subscribe(data => {
            console.log('pet created', data);
            this._router.navigate(['/pets']);
          })
        }
      })
  }

}
