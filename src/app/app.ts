import { Component } from '@angular/core';
import {Play} from "./components/play/play";
import {Springboot} from "./components/springboot/springboot";
import {Phalcon} from "./components/phalcon/phalcon";
import {Express} from "./components/express/express";
import {Dotnetcore} from "./components/dotnetcore/dotnetcore";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
      Play,
      Springboot,
      Phalcon,
      Express,
      Dotnetcore
  ]
})
export class App { }
