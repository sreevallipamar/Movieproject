import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userr } from './userr';


@Injectable({
  providedIn: 'root'
})
export class ServiceeService {

  private Userslisturl:string;
  private Userposturl:string;


  constructor(private http:HttpClient) { 
    this.Userslisturl='http://localhost:1542/getuserdata';
    this.Userposturl= 'http://localhost:1542/getmoviesdata';

  }
  findAll():Observable<Userr[]>{
    return this.http.get<Userr[]>(this.Userslisturl);
 }
 save(user1:Userr){
  console.log(user1.name+ " "+user1.password);
  return this.http.post<Userr>(this.Userposturl,user1);
 }
}
