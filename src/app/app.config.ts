import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class AppConfig {

private config: Object = null;
private env: Object = null;
path: string = "/src/app/configFiles/env.json";

constructor(private http: Http) {

}

/**
* Use to get the data found in the second file (config file)
*/
public getConfig(key: any) {
return this.config[key];
}

/**
* Use to get the data found in the first file (env file)
*/
public getEnv(key: any) {
return this.env[key];
}

/**
* This method:
* a) Loads “env.json” to get the current working environment (e.g.: ‘production’, ‘development’)
* b) Loads “config.[env].json” to get all env’s variables (e.g.: ‘config.development.json’)
*/
public load() {
return new Promise((resolve, reject) => {
this.http.get(this.path).map(res => res.json()).catch((error: any): any => {
console.log(error);
resolve(true);
return Observable.throw(error.json().error || 'Server error');
}).subscribe((envResponse) => {
this.env = envResponse;
let request: any = null;
console.log(envResponse['env']);
switch (envResponse['env']) {
case 'production': {
request = this.http.get('/src/app/configFiles/config.' + envResponse['env'] + '.json');
} break;

case 'development': {
request = this.http.get('/src/app/configFiles/config.' + envResponse['env'] + '.json');
} break;

case 'default': {
console.error('Environment file is not set or invalid');
resolve(true);
} break;
}
if (request) {
request
.map((res: any) => res.json())
.catch((error: any) => {
console.error('Error reading ' + envResponse + 'configuration file');
resolve(error);
return Observable.throw(error.json().error || 'Server error');
})
.subscribe((responseData: any) => {
this.config = responseData;
resolve(true);
console.log(responseData['host']);
});

} else {
console.error('Env config file "env.json" is not valid');
resolve(true);
}
});

});
}
}