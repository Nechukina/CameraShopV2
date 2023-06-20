export enum AppRoute {
  Main = '/',
  Catalog = '/catalog/:page',
  Basket = '/basket',
  Product = '/product/:id',
  Description = '/product/:id/description',
  Features = '/product/:id/features',
  NotFound = '*'
}

export enum APIRoute {
  Catalog = '/cameras',
  Product = '/cameras/:cameraId',
  Similar = '/cameras/:cameraId/similar',
  Promo = '/promo',
  Reviews = '/cameras/:cameraId/reviews',
  AddReview = '/reviews',
  Coupon = '/coupons',
  Order = '/orders',
}

export enum NameSpace {
  Cameras = 'CAMERAS',
  Product = 'PRODUCT',
  Similar = 'SIMILAR',
  Promo = 'PROMO',
  Review = 'REVIEW',
  Reviews = 'REVIEWS',
  Coupon = 'COUPON',
  Order = 'ORDER',
  Notification = 'NOTIFICATION',
  Filter = 'FILTER',
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}

export enum CameraType {
  Collection = 'Коллекционная',
  Instant = 'Моментальная',
  Digital = 'Цифровая',
  Film = 'Плёночная',
}

export enum CameraCategory {
  Videocamera = 'Видеокамера',
  Photocamera = 'Фотоаппарат',
}

export enum CameraLevel {
  Zero = 'Нулевой',
  Amature = 'Любительский',
  Professional = 'Профессиональный',
}

export const CAMERAS_PER_PAGE = 9;

export const DEFAULT_REVIEWS_COUNT = 3;


