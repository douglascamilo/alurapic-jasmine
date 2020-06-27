import { SignUpComponent } from './signup.component';
import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/componets/vmessage/vmessage.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpService } from './signup.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe(`Testes unitario para: ${SignUpComponent.name}`, () => {
  let componente: SignUpComponent;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ SignUpComponent ],
        providers: [ SignUpService ],
        imports: [
          ReactiveFormsModule,
          VMessageModule,
          HttpClientTestingModule,
          RouterTestingModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(SignUpComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(componente).toBeDefined();
  });
});