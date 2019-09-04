import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url:any = "https://reqres.in/api/users";

  constructor(private http:HttpClient) { }

  async list() {
    return await this.http.get(this.url).toPromise();
  }

  async getOne(id:string) {
    return await this.http.get(`${this.url}/${id}`).toPromise();
  }

  async update(user:object) {
    return await this.http.put(`${this.url}/${user['id']}`, user). toPromise();
  }
}
