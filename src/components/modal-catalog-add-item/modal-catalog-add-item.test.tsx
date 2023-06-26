import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeCamera } from '../../utils/mocks';
import ModalCatalogAddItem from './modal-catalog-add-item';


const mockProduct = makeFakeCamera();


const history = createMemoryHistory();

const fakeApp = (
  <HistoryRouter history={history}>
    <ModalCatalogAddItem isOpened product={mockProduct} onCloseButtonClick={jest.fn()}/>
  </HistoryRouter>
);

describe('Component: modal catalog add item', () => {

  it('should render modal correctly', () => {

    render(fakeApp);

    expect(screen.getByText(/Добавить товар в корзину/i)).toBeInTheDocument();
  });
});
