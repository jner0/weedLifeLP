import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formModel: FormGroup;

  lat: number = -0.6755852324711883;
  long: number = -80.11544595402017;

  constructor() { 
    this.formModel = new FormGroup({
      nombre2: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) //expresiones regulares Regex
      ])
    })
  }

  ngOnInit(): void {
  }

  getDataForm(){
    if(this.formModel.valid){
      console.log(this.formModel.value)
    }else{
      alert("El formulario no esta bien relleno")
    }
    
  }

  checkControl(pControlName: string, pError: string) : boolean {
    if(this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched){
      return true;
    }else{
      return false;
    }
  }

}
