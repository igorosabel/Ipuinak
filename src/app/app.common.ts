/**
 * Servicios
 */
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';
import { DialogService } from './services/dialog.service';

export const SERVICES: any[] = [ApiService, ClassMapperService, DialogService];
