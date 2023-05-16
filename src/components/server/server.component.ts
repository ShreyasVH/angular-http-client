import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
    state: any = {};

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

            this.state.get = JSON.stringify(getResponse);
            this.state.post = JSON.stringify(postResponse);
            this.state.put = JSON.stringify(putResponse);
            this.state.delete = JSON.stringify(deleteResponse);

            this.state.loaded = true;
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
