import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedidasensoresPage } from './medidasensores.page';

describe('MedidasensoresPage', () => {
  let component: MedidasensoresPage;
  let fixture: ComponentFixture<MedidasensoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidasensoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedidasensoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
