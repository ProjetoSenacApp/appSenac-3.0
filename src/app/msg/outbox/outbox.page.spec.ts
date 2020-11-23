import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutboxPage } from './outbox.page';

describe('OutboxPage', () => {
  let component: OutboxPage;
  let fixture: ComponentFixture<OutboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
