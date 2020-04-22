import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const QUERY_URL: string = 'https://us-central1-angular-bq-7cbda.cloudfunctions.net/bigQSqlQuery' ;

@Injectable({
  providedIn: 'root'
})
export class BigqueryService {

  constructor(private http: HttpClient) { }

  onQuery(datasetName: string, q: string) {
    const postParams = {
      datasetName: datasetName,
      query: q
    };
    return this.http.post(QUERY_URL, postParams);
  }
}
