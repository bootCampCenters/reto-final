import { OfertasModule } from './ofertas.module';

describe('OfertasModule', () => {
  let ofertasModule: OfertasModule;

  beforeEach(() => {
    ofertasModule = new OfertasModule();
  });

  it('should create an instance', () => {
    expect(ofertasModule).toBeTruthy();
  });
});
