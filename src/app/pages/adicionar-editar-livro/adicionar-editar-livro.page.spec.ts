import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarEditarLivroPage } from './adicionar-editar-livro.page';

describe('AdicionarEditarLivroPage', () => {
  let component: AdicionarEditarLivroPage;
  let fixture: ComponentFixture<AdicionarEditarLivroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEditarLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
