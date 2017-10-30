import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataFormService } from "./dataform.service";
import { DumpDataService } from "../../../shared/services/dumpdata";

@Component( {
  selector: 'new-person',
  templateUrl: './newperson.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ './newperson.component.scss' ]
} )
export class NewPerson implements OnInit, OnChanges {

  @Input() input ='21122112';

  private person;

  private data;

  private dataBasic;

  private dataAuto;

  private result;

  constructor(public formDataService: DataFormService,  private dataDumpService: DumpDataService) {
    this.dataAuto = this.dataDumpService.createRandomData( 200 );
  }

  ngOnInit() {
    this.data = [
      { textItem : 'Male', valueItem : 'M' },
      { textItem : 'Female', valueItem : 'F' },
    ];
    this.dataBasic =
      [
        { source: { id: 1, firstName: 'Isadora', lastName: 'Nascimento', email: 'contact@domain.com', }, effect: { icon: 'ion-gear-a', color: '#5dba8c' } },
        { source: { id: 1, firstName: 'Maria', lastName: 'King', email: 'contact@domain.com', }, effect: { icon: 'ion-gear-a', color: '#a485e5' } },
        { source: { id: 1, firstName: 'Andrea', lastName: 'King', email: 'contact@domain.com', }, effect: { icon: 'ion-gear-a', color: '#ff0000' } },
        { source: { id: 1, firstName: 'Fred', lastName: 'King', email: 'contact@domain.com', }, effect: { icon: 'ion-gear-a', color: '#dd6c6c' } },
        { source: { id: 1, firstName: 'Laura', lastName: 'King', email: 'contact@domain.com', }, effect: { icon: 'ion-gear-a', color: '#0090d9' } }
        ,
      ];

    this.person = this.formDataService.getDataForm();
  }


  ngOnChanges(data: SimpleChanges) {
    console.log(data);
  }


  changess() {
    console.log('add');
  }

}
