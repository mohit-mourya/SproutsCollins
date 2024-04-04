import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-about-us',
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css',
    imports: [NavigationComponent, FooterComponent]
})
export class AboutUsComponent {

}
