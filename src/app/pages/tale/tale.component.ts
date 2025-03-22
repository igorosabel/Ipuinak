import {
  Component,
  input,
  InputSignalWithTransform,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-tale',
  templateUrl: './tale.component.html',
  styleUrls: ['./tale.component.scss'],
})
export default class TaleComponent {
  id: InputSignalWithTransform<number, unknown> = input.required({
    transform: numberAttribute,
  });
}
