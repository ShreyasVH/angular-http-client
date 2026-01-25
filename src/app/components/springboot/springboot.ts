import { Component } from '@angular/core';
import { Server } from '../server/server';

@Component({
    selector: 'app-springboot',
    templateUrl: './springboot.html',
    imports: [
        Server
    ]
})
export class Springboot { }
