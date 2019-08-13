import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/contact.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private service: ContactService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form!= null)
      form.resetForm();
    this.service.formData = {
      id: null,
      fullName: '',
      phoneNumber: '',
      email: '',
      message: '',
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('clients').add(data);
    else
      this.firestore.doc('clients/'+form.value.id).update(data);
    this.resetForm(form);
  }
}
