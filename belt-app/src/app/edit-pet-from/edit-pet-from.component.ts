import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet-from',
  templateUrl: './edit-pet-from.component.html',
  styleUrls: ['./edit-pet-from.component.css']
})
export class EditPetFromComponent implements OnInit {
  error: String;
  newPet:any;
  originalName:String;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    
    this._route.params.subscribe((params: Params) => {
      let obs = this._httpService.getPet(params['id']);
      obs.subscribe(data => {
        this.newPet = data[0];
        this.originalName = data[0].name;
      })
  });
  }

  onSubmit() {
    let flag = false;
    console.log('adding pet from component');
      console.log('checking name....');
      let check:any = this._httpService.getAllPets();
      check.subscribe(data => {
        data.forEach(element => {
          if(this.newPet.name != this.originalName){
            if(element.name == this.newPet.name){
              console.log('name exists');
              this.error = "Name exists";
              flag = true;
            }
          }
        });
        if(!flag){
          let obs:any = this._httpService.updatePet(this.newPet._id,this.newPet);
          obs.subscribe(data => {
            console.log('pet updated', data);
            this._router.navigate(['/pets']);
          })
        }
      })
  }

}
