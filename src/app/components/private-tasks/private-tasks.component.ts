import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  users: any[];

  constructor(
    private authService:AuthService,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(): void {
    this.authService.getUsers().subscribe(
      (result: any[]) => {
        this.users = result;
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    );
  }

  updateUser(userId: string): void {
    // Aquí puedes implementar la lógica para actualizar el usuario
    console.log('Actualizar usuario:', userId);
    this.router.navigate(['/private/:id', userId, 'edit']); // Redirige a la página de edición del usuario
  }
  
  deleteUser(userId: string): void {
    // Aquí puedes implementar la lógica para eliminar el usuario
    console.log('Eliminar usuario:', userId);
    this.router.navigate(['/private/:id', userId, 'edit']); // Redirige a la página de edición del usuario
  }
  

}
