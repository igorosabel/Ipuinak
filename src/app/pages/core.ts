import { Provider } from '@angular/core';
import ApiService from '@services/api.service';
import ClassMapperService from '@services/class-mapper.service';

export default function provideCore(): Provider[] {
  return [ApiService, ClassMapperService];
}
