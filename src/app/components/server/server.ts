import { Component, OnInit, Input, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-server',
    templateUrl: './server.html'
})
export class Server implements OnInit {
    state = signal<any>({ loaded: false });

    @Input() endpoint: string = '';
    payload: any = { a: 'A', b: 'B' }

    constructor(private http: HttpClient) {}

    async ngOnInit(): Promise<void> {
        await this.loadData();
    }

    async loadData(): Promise<void> {
        try {
            const getResponse = await this.http.get(this.getUrl()).toPromise();
            const postResponse = await this.http.post(this.postUrl(), this.payload).toPromise();
            const putResponse = await this.http.post(this.putUrl(), this.payload).toPromise();
            const deleteResponse = await this.http.get(this.deleteUrl()).toPromise();

            this.state.set({
                get: JSON.stringify(getResponse),
                post: JSON.stringify(postResponse),
                put: JSON.stringify(putResponse),
                delete: JSON.stringify(deleteResponse),
                loaded: true
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    parts(): string[] {
        return [
            'get',
            'post',
            'put',
            'delete'
        ];
    }

    getUrl(): string {
        return this.endpoint + '/api?input=abc'
    }

    postUrl(): string {
        return this.endpoint + '/api'
    }

    putUrl(): string {
        return this.endpoint + '/api'
    }

    deleteUrl(): string {
        return this.endpoint + '/api?input=abc'
    }

    getUrlByPart(part: string): string {
        const methodName = part + 'Url';
        return (this as any)[methodName]?.() || '';
    }
}
