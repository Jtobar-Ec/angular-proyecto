import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userId!: string;
  userData: any = {}; // Cambiado a un objeto en lugar de un array

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']; // Obtener el ID del usuario de los parámetros de la ruta
      this.getUserData();
    });
  }

  getUserData(): void {
    this.authService.getUser(this.userId).subscribe(
      (user: any) => {
        this.userData = user;
      },
      (error) => {
        console.error('Error al obtener datos del usuario:', error);
      }
    );
  }

  onSubmit(): void {
    this.authService.updateUser(this.userId, this.userData).subscribe(
      () => {
        console.log('Usuario actualizado correctamente');
        // Puedes agregar aquí una lógica adicional, como redirigir a la página de detalles del usuario
      },
      (error) => {
        console.error('Error al actualizar usuario:', error);
      }
    );
  }

}
