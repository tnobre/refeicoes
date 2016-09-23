import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
//import { ApiConfig } from './api.service';

export function RunApplication(apiUrl: string, apiToken: string) {

	//let apiConfig = new ApiConfig();
    //apiConfig.apiUrl = apiUrl;
    //apiConfig.apiToken = apiToken;
	platformBrowserDynamic().bootstrapModule(AppModule);

}