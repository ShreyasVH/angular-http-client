import { Component } from '@angular/core';
import { Server } from '../server/server';

@Component({
    selector: 'app-express',
    templateUrl: './express.html',
    imports: [
        Server
    ]
})
export class Express { }
