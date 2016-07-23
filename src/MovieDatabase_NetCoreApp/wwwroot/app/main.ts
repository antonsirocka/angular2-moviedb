import {bootstrap} from '@angular/platform-browser-dynamic'
import {MainComponent} from './components/main.component';
import {HTTP_PROVIDERS} from '@angular/http'

bootstrap(MainComponent, HTTP_PROVIDERS);