import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appClientLocationStatusValidator]',
  providers: [ { provide: NG_VALIDATORS, useExisting: ClientLocationStatusValidatorDirective, multi: true }]
})
export class ClientLocationStatusValidatorDirective implements Validator
{
  constructor()
  {
  }

  validate(control: AbstractControl) : ValidationErrors | null
  {
    let isValid = true;
    if (control.value.ClientLocation == 2 && control.value.Status == "Support")
    {
      isValid = false; //indicates invalid
    }

    if (isValid == true)
    {
      return null; //indicates valid
    }
    else
    {
      return { clientLocationStatus: { valid: false }}; //invalid
    }
  }

}
