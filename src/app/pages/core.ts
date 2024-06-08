import { Provider } from '@angular/core';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import ApiService from '@services/api.service';
import ClassMapperService from '@services/class-mapper.service';
import DialogService from '@services/dialog.service';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

export default function provideCore(): Provider[] {
  return [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
    ApiService,
    DialogService,
    ClassMapperService,
  ];
}
