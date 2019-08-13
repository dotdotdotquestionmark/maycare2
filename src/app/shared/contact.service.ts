import { Injectable } from '@angular/core';
import { Client } from './contact.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  formData: Client;

  constructor(private firestore: AngularFirestore) { }


}
