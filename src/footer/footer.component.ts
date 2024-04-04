import { Component, Input } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [NavigationComponent,CommonModule]
})
export class FooterComponent {
    @Input()
    home = false;
    
}
