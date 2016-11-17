import { FormControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateYearReleased][ngControl]',
    providers: [
        {
            provide:
                NG_VALIDATORS,
                useValue: checkValidYearRange,
                multi: true            
        }
    ]
})

export class YearReleasedValidator { }

function checkValidYearRange(c: FormControl) {

    if (c.value == "") {
        return null;
    }

    if (isNaN(c.value) || c.value < 1000 || c.value > 2999) {
        return { 'yearReleasedValid': false };
    }

    return null;            
}