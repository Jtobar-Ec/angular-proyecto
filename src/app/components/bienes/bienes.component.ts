import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Datos } from 'src/app/data';

@Component({
  selector: 'app-bienes',
  templateUrl: './bienes.component.html',
  styleUrls: ['./bienes.component.css']
})
export class BienesComponent implements OnInit {
  
  public datos: Datos[] = [];

  constructor(private authService:AuthService){}
  ngOnInit() {
    this.authService.getTasks().subscribe(
      data => {
        this.datos = data;
      },
      err => {
        console.error('Error al obtener los datos de los bienes:', err);
        // Manejar el error apropiadamente
      }
    );
    }
}
