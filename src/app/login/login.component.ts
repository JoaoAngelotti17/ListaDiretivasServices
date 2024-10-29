import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userLogin: string = '';
  userPassword: string = '';
  isAuthenticated: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  authenticateUser() {
    this.isAuthenticated = true;
  }
}
