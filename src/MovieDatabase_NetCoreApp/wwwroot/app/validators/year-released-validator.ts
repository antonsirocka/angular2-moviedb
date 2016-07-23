import { Control } from '@angular/common';
import { Directive, provide } from '@angular/core';
import { NG_VALIDATORS } from '@angular/common';

@Directive({
    selector: '[validateYearReleased][ngControl]',
    providers: [
        provide(NG_VALIDATORS, {
            useValue: checkValidYearRange,
            multi: true
        })
    ]
})

export class YearReleasedValidator { }

function checkValidYearRange(c: Control) {

    if (c.value == "") {
        return null;
    }

    if (isNaN(c.value) || c.value < 1000 || c.value > 2999) {
        return { 'yearReleasedValid': false };
    }

    return null;            
}