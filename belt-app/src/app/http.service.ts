import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addPet(petObj){
    console.log('adding pet from service', petObj);
    return this._http.post('/new_pet', petObj);
  }

  getAllPets(){
    return this._http.get('/all_pets');
  }

  getPet(id){
    return this._http.get('/get_pet/' + id);
  }

  updatePet(id, data){
    return this._http.post('/update_pet/' + id, data);
  }

  removePet(id){
    return this._http.get('/adopt/' + id);
  }

  likePet(id, likes){
    console.log('received at service', id, likes)
    let temp = {likes: likes};
    return this._http.post('/like/' + id, temp);
  }
}
