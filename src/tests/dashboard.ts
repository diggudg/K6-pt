import { check } from "k6";
import { HttpService } from "../helper/http.service";


export class Dashboard {

  constructor(private readonly http: HttpService) {
  }

  /**
   * Run All test for dashboard
   */
  public runAll(headers: any) {
    const urls = [
     ]

    urls.forEach(url => {
      const resp = this.http.get(url, headers);
      check(resp, { 'Dashboard': r => r.status == 200 });
    });

    const postUrls = "";
    const resp = this.http.post(postUrls, '{ }', headers);
    check(resp, { 'Dashboard': r => r.status == 200 });
  }
}