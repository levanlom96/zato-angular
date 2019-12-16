import { Injectable } from '@angular/core';
import { SuperService } from './super.service';

@Injectable()
export class KeyboardStateManagerService {
  constructor(private mySuperService: SuperService) { }
}
