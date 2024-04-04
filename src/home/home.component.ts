import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,MatButtonModule],
  templateUrl: './home.component.html', 
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
