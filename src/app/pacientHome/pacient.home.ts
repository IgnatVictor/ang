import { Pacient } from '../models/pacient.interface';

import { Component, OnInit, TemplateRef } from '@angular/core';



@Component ({
    selector: 'app-root',
    templateUrl: './pacient.component.html',
    styleUrls: ["./pacient.component.css"]  

})

export class HomeComponent implements OnInit {

    pacients: Pacient[];

    constructor(private DbService: HomeComponent) {
        this.pacients= [];
    }

   ngOnInit(): void {
       this.getPacients();
   }

   getPacients() {
        this.DbService.getPacients;
   }

}