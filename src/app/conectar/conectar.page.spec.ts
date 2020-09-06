import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConectarPage } from './conectar.page';

describe('ConectarPage', () => {
  let component: ConectarPage;
  let fixture: ComponentFixture<ConectarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConectarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConectarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
