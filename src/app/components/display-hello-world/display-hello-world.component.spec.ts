import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHelloWorldComponent } from './display-hello-world.component';

describe('DisplayHelloWorldComponent', () => {
  let component: DisplayHelloWorldComponent;
  let fixture: ComponentFixture<DisplayHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayHelloWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



