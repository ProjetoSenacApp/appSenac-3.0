import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReplyPage } from './reply.page';

describe('ReplyPage', () => {
  let component: ReplyPage;
  let fixture: ComponentFixture<ReplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
