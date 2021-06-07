import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

   constructor() { 
    
   }

  ngOnInit(): void {
    
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  
    ]);

    nomeFormControl = new FormControl('', [
      Validators.required

      ]);

      cpfFormControl = new FormControl('', [
        Validators.required,
        Validators.maxLength(11)
        
        ]);
}






