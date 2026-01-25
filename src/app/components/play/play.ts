import { Component } from '@angular/core';
import { Server } from '../server/server';

@Component({
    selector: 'app-play',
    templateUrl: './play.html',
    imports: [
        Server
    ]
})
export class Play { }
