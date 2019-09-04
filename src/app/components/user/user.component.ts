import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { CrudService } from '../../crud.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  id:string;
  constructor( 
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private crudService:CrudService
    ) { 

      this.id = this.activatedRoute.snapshot.paramMap.get("id");

      this.userForm = this.formBuilder.group({
        id: this.id,
        first_name: '',
        last_name: '',
        avatar: ''
      })
   }

   async ngOnInit() {
     if (this.userForm.value.id) {
       var user = await this.crudService.getOne(this.id);
       user = user['data'];

       this.userForm = this.formBuilder.group({
        id: this.id,
        first_name: user['first_name'] ,
        last_name: user['last_name'],
        avatar: user['avatar']
      })

     }
   }

   async save() {

     var savedUser = await this.crudService.update(this.userForm.value);

     alert(`Usuário ${savedUser['first_name']} foi atualizado com sucesso!`);

     this.router.navigate(['/']);

   }

}
