import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { DemoComponent } from './demo/demo.component';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Simple Angular Material Example';
    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
    }
}
