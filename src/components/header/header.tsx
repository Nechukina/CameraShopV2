import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import SearchForm from '../search/search-form/search-form';
import { useAppSelector } from '../../hooks';
import { getTotalCount } from '../../store/basket/basket.selectors';

function Header(): JSX.Element {
  const totalCount = useAppSelector(getTotalCount);

  return (
    <header className="header" id="header" data-testid="header">
      <div className="container">
        <Link className="header__logo" to={AppRoute.Main} aria-label="Переход на главную">
          <svg width="100" height="36" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item"><Link className="main-nav__link" to={AppRoute.Main}>Каталог</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.NotFound}>Гарантии</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.NotFound}>Доставка</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.NotFound}>О компании</Link>
            </li>
          </ul>
        </nav>
        <SearchForm />
        <Link className="header__basket-link" to={AppRoute.Basket}>
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
          {totalCount ? <span className="header__basket-count">{totalCount}</span> : ''}
        </Link>
      </div>
    </header>
  );
}

export default Header;
