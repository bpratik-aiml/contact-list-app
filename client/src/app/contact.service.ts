import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';
//import { url } from 'inspector';
//import 'rxjs-compat/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
url1:any
  constructor(private http:HttpClient) { }
//retrieving contacts

getContacts()
{
  return this.http.get('http://localhost:8080/api/contacts')
  // .map ( res => res.json())
}

//add contact

addContact(newContact: any)
{
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:8080/api/contact', newContact)
}

//delete method
deleteContact(id: string)
{
  return this.http.delete('http://localhost:8080/api/contact/'+id);
}

}
