import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialpacientePage } from './historialpaciente.page';

describe('HistorialpacientePage', () => {
  let component: HistorialpacientePage;
  let fixture: ComponentFixture<HistorialpacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialpacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialpacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
