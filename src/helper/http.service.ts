import http from "k6/http";

export class HttpService {
    constructor() {
    }

    public get(url: string, headers: any) {
        return http.get(
            url,
            {
                headers
            }
        );
    }

    public post(url: string, payload: any, headers: any) {
        return http.post(
            url,
            payload,
            { headers }
        );
    }
}