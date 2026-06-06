import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Imports } from './imports';

describe('Imports', () => {
  let fixture: ComponentFixture<Imports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imports],
    }).compileComponents();

    fixture = TestBed.createComponent(Imports);
    fixture.detectChanges();
  });

  it('should render the Imports heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Imports');
  });
});
