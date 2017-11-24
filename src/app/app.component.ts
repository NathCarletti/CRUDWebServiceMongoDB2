import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private http: Http) {

  }
  ngOnInit() {
    console.log("buscando os dados");
    let resultado = {};
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    let users = this.http.get('http://localhost:3000/api/users',headers).subscribe(result => resultado =result.json());


    console.log('dados recebidos', resultado);
}

private getHeaders(){
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  return headers;
}

}


