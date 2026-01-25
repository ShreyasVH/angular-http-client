import { Component } from '@angular/core';
import { Server } from '../server/server';

@Component({
    selector: 'app-dotentcore',
    templateUrl: './dotnetcore.html',
    imports: [
        Server
    ]
})
export class Dotnetcore { }
