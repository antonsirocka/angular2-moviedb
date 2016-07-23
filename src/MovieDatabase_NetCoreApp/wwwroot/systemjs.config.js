System.config({
    map: {
        'app' : 'app',
        '@angular'                         : 'js/angular'
    },
    packages: {
        'app'                              : {main: 'main.js', defaultExtension: 'js'},
        '@angular/core'                    : {main: 'index.js'},
        '@angular/common'                  : {main: 'index.js'},
        '@angular/compiler'                : {main: 'index.js'},
        '@angular/router'                  : {main: 'index.js'},
        '@angular/http'                    : {main: 'index.js'},
        '@angular/platform-browser'        : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'}
    }
});