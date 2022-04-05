import { Pacient } from '../models/pacient.interface';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class DbService implements InMemoryDbService {
  createDb() {
    let pacients = [
      {
        id: 1,
        firstName: 'Brokes',
        lastName: 'Juan',
        dateOfBirth: new Date('1987-04-25'),
        gender: 'M',
        ssn: 1870405017527,
        phoneNumber: 628249027596,
      },
      {
        id: 2,
        firstName: 'Raul',
        lastName: 'Stefanie',
        dateOfBirth: new Date('1989-04-25'),
        gender: 'F',
        ssn: 2870405015031,
        phoneNumber: 628249027597,
      },
     
    ];
    return {
      pacients: pacients,
    };
  }

  generateId(pacients: Pacient[]): number {
    if (pacients.length > 0) {
      return pacients[length - 1].id + 1;
    }
    return 1;
  }
}
