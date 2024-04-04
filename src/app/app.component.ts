import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NavigationComponent } from "../navigation/navigation.component";
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, NavigationComponent, AboutUsComponent]
})
export class AppComponent {
  title = 'kitchen';
}
