import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AndamentoLeituraPage } from './andamento-leitura.page';

describe('AndamentoLeituraPage', () => {
  let component: AndamentoLeituraPage;
  let fixture: ComponentFixture<AndamentoLeituraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentoLeituraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
