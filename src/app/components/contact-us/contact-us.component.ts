import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formgroup:FormGroup
  constructor(
    private formbuilder: FormBuilder
  ) { 
    this.formgroup = this.formbuilder.group({
      from_name:['',Validators.required],
      user_email:['',[Validators.required, Validators.email]],
      user_phone:['',[Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      message:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.formgroup.valid){
      console.log(this.formgroup.value)
      emailjs.send("service_79m3toe","template_eovv09e",this.formgroup.value, 'kGefhI__XJsKzLKT9').then((result: EmailJSResponseStatus) => {
        alert('Details Submitted Successfully');
      }, (error) => {
        alert(error.text);
      });;
    }
    
  }

}
