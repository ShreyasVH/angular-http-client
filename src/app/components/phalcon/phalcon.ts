import { Component } from '@angular/core';
import { Server } from '../server/server';

@Component({
    selector: 'app-phalcon',
    templateUrl: './phalcon.html',
    imports: [
        Server
    ]
})
export class Phalcon { }
