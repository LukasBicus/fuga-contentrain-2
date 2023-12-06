export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeFloat: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  complex: Scalars['String']['output'];
  country: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  street: Scalars['String']['output'];
  town: Scalars['String']['output'];
};

export type AdmissionType = {
  __typename?: 'AdmissionType';
  abbreviation: Scalars['NonEmptyString']['output'];
  capacityDecreaseCount: Scalars['NonNegativeInt']['output'];
  clientId: Scalars['PositiveInt']['output'];
  color: Scalars['HexColorCode']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['PositiveInt']['output'];
  eCommerceDescriptions?: Maybe<Translated>;
  eCommerceNames?: Maybe<Translated>;
  icon?: Maybe<Scalars['NonEmptyString']['output']>;
  id: Scalars['PositiveInt']['output'];
  internalDescription?: Maybe<Scalars['NonEmptyString']['output']>;
  name: Scalars['NonEmptyString']['output'];
  startingQuantity: Scalars['PositiveInt']['output'];
  state: AdmissionTypeState;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['PositiveInt']['output'];
};

export enum AdmissionTypeState {
  Active = 'active',
  Draft = 'draft',
  Inactive = 'inactive'
}

export type ApiContact = {
  __typename?: 'ApiContact';
  email: Scalars['EmailAddress']['output'];
  name: Scalars['NonEmptyString']['output'];
  phone?: Maybe<Scalars['NonEmptyString']['output']>;
  role?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type ApiGrant = {
  __typename?: 'ApiGrant';
  businessContact: ApiContact;
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['PositiveInt']['output'];
  description: Scalars['NonEmptyString']['output'];
  expiresAt: Scalars['DateTime']['output'];
  grantedResources: Array<ApiResource>;
  id: Scalars['PositiveInt']['output'];
  maxRequestsPerHour?: Maybe<Scalars['PositiveInt']['output']>;
  maxRequestsPerMinute?: Maybe<Scalars['PositiveInt']['output']>;
  name: Scalars['NonEmptyString']['output'];
  state: ApiGrantState;
  technicalContact: ApiContact;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ApiGrantState {
  Active = 'active',
  Expired = 'expired',
  Inactive = 'inactive'
}

export enum ApiResource {
  CheckPassCode = 'checkPassCode',
  /** This resource protects data required for tests. */
  E2eTests = 'e2eTests',
  Events = 'events',
  Shows = 'shows',
  TourTimeSlots = 'tourTimeSlots',
  Tours = 'tours',
  Venues = 'venues'
}

export type AppliedDiscount = {
  __typename?: 'AppliedDiscount';
  discount: Discount;
  discountCode?: Maybe<DiscountCode>;
};

export type Auditorium = {
  __typename?: 'Auditorium';
  id: Scalars['PositiveInt']['output'];
  name: Scalars['String']['output'];
  shortcut: Scalars['String']['output'];
  state: AuditoriumState;
  venue: Venue;
  venueId: Scalars['PositiveInt']['output'];
};

export type AuditoriumLayout = {
  __typename?: 'AuditoriumLayout';
  auditoriumId: Scalars['PositiveInt']['output'];
  capacity: Scalars['Int']['output'];
  id: Scalars['PositiveInt']['output'];
  name: Scalars['String']['output'];
  status: AuditoriumLayoutState;
  type: AuditoriumLayoutType;
};

export type AuditoriumLayoutPricing = {
  __typename?: 'AuditoriumLayoutPricing';
  auditoriumLayoutId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  maxNumberOfOccupiedSeatsOnEcommerce: Scalars['PositiveInt']['output'];
  maxNumberOfOccupiedSeatsOnRetail: Scalars['PositiveInt']['output'];
  maxTicketsPerOrder: Scalars['PositiveInt']['output'];
  name: Scalars['String']['output'];
};

export enum AuditoriumLayoutPricingState {
  Active = 'active',
  Archived = 'archived',
  Draft = 'draft'
}

export enum AuditoriumLayoutState {
  Active = 'active',
  Archived = 'archived',
  Draft = 'draft'
}

export enum AuditoriumLayoutType {
  /** Mixed seats with zone standing */
  SeatingFloorPlan = 'seatingFloorPlan',
  /** Currently NA */
  WithoutSeats = 'withoutSeats',
  /** Zones standing with no seats */
  ZoneFloor = 'zoneFloor'
}

export enum AuditoriumState {
  Active = 'active',
  Archived = 'archived'
}

/** BaseListFilter will be a standard part of all list filters. */
export type BaseListFilter = {
  clientIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  fromCreatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fromUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  ids?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  toCreatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  toUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum CheckingOption {
  Entrance = 'entrance',
  EntranceExit = 'entranceExit'
}

export type Client = {
  __typename?: 'Client';
  TAXId?: Maybe<Scalars['NonEmptyString']['output']>;
  VATId?: Maybe<Scalars['NonEmptyString']['output']>;
  VATRegistered: VatRegistered;
  companyIdNumber: Scalars['NonEmptyString']['output'];
  countryCode: CountryCode;
  currency: Currency;
  id: Scalars['PositiveInt']['output'];
  legalAddress: Address;
  localeCodes: Array<LocaleCode>;
  marketingInformationUrl?: Maybe<Scalars['NonEmptyString']['output']>;
  name: Scalars['NonEmptyString']['output'];
  termsOfServiceUrl?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type CostCenter = {
  __typename?: 'CostCenter';
  clientId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  isActive: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['NonEmptyString']['output']>;
  name: Scalars['NonEmptyString']['output'];
};

export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cs = 'CS',
  Cu = 'CU',
  Cv = 'CV',
  Cy = 'CY',
  Cz = 'CZ',
  Dd = 'DD',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  In = 'IN',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Su = 'SU',
  Sv = 'SV',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yu = 'YU',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export enum Currency {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Bov = 'BOV',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Che = 'CHE',
  Chf = 'CHF',
  Chw = 'CHW',
  Clf = 'CLF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Cou = 'COU',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Mxv = 'MXV',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Stn = 'STN',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Usn = 'USN',
  Uyi = 'UYI',
  Uyu = 'UYU',
  Uyw = 'UYW',
  Uzs = 'UZS',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xag = 'XAG',
  Xau = 'XAU',
  Xba = 'XBA',
  Xbb = 'XBB',
  Xbc = 'XBC',
  Xbd = 'XBD',
  Xcd = 'XCD',
  Xdr = 'XDR',
  Xof = 'XOF',
  Xpd = 'XPD',
  Xpf = 'XPF',
  Xpt = 'XPT',
  Xsu = 'XSU',
  Xts = 'XTS',
  Xua = 'XUA',
  Xxx = 'XXX',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL'
}

export type Discount = {
  __typename?: 'Discount';
  clientId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  internalDescription?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  sellingChannels: Array<SellingChannel>;
  state: DiscountState;
  type: DiscountType;
  value: Scalars['NonNegativeFloat']['output'];
};

export enum DiscountAuthorizationMode {
  AuthorizeAll = 'authorizeAll',
  DoNotAuthorize = 'doNotAuthorize',
  ECommerceOnly = 'eCommerceOnly',
  RetailOnly = 'retailOnly'
}

export type DiscountCode = {
  __typename?: 'DiscountCode';
  activationDate?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['PositiveInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discount: Discount;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['PositiveInt']['output'];
  name: Scalars['String']['output'];
  state: DiscountCodeState;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['PositiveInt']['output'];
  usageCount: Scalars['NonNegativeInt']['output'];
  usageLimit?: Maybe<Scalars['NonNegativeInt']['output']>;
};

export enum DiscountCodeState {
  Active = 'active',
  Inactive = 'inactive',
  Invalid = 'invalid'
}

export enum DiscountState {
  Active = 'active',
  Deleted = 'deleted',
  Inactive = 'inactive'
}

export enum DiscountType {
  FixedAmount = 'fixedAmount',
  Percentage = 'percentage'
}

export type Division = {
  __typename?: 'Division';
  address: Address;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
  phoneNumber?: Maybe<Scalars['NonEmptyString']['output']>;
  state: DivisionState;
};

export enum DivisionOnlineReservationEnd {
  AfterStart = 'afterStart',
  BeforeStart = 'beforeStart',
  DayBeforeStart = 'dayBeforeStart',
  Duration = 'duration',
  EventStart = 'eventStart'
}

export enum DivisionPosReservationEnd {
  AfterStart = 'afterStart',
  BeforeStart = 'beforeStart',
  DayBeforeStart = 'dayBeforeStart',
  Duration = 'duration',
  EventStart = 'eventStart'
}

export enum DivisionState {
  Active = 'active',
  Draft = 'draft',
  Inactive = 'inactive'
}

export type Event = PaginationItem & {
  __typename?: 'Event';
  ageClassificationCode?: Maybe<ShowAgeClassificationCode>;
  allowedDiscountsSellingChannels: Array<SellingChannel>;
  auditorium: Auditorium;
  auditoriumId: Scalars['PositiveInt']['output'];
  auditoriumLayout: AuditoriumLayout;
  auditoriumLayoutId: Scalars['PositiveInt']['output'];
  auditoriumLayoutPricing: AuditoriumLayoutPricing;
  auditoriumLayoutPricingId: Scalars['PositiveInt']['output'];
  checkingOption: CheckingOption;
  client: Client;
  clientId: Scalars['PositiveInt']['output'];
  costCenter?: Maybe<CostCenter>;
  costCenterId?: Maybe<Scalars['PositiveInt']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['PositiveInt']['output'];
  division: Division;
  divisionId: Scalars['PositiveInt']['output'];
  duration: Scalars['PositiveInt']['output'];
  eCommerceSaleAndReservationOptions: SaleAndReservationOptions;
  ecommerceEventURL: Scalars['String']['output'];
  endsAt: Scalars['DateTime']['output'];
  eventCategory?: Maybe<EventCategory>;
  eventCategoryId?: Maybe<Scalars['PositiveInt']['output']>;
  formatCode?: Maybe<ShowFormatCode>;
  gateClosedAt: Scalars['DateTime']['output'];
  gateOpensAt: Scalars['DateTime']['output'];
  id: Scalars['PositiveInt']['output'];
  isRescheduled: Scalars['Boolean']['output'];
  marketingLabel?: Maybe<MarketingLabel>;
  marketingLabelId?: Maybe<Scalars['PositiveInt']['output']>;
  maxNumberOfOccupiedSeatsOnEcommerce: Scalars['NonNegativeInt']['output'];
  maxNumberOfOccupiedSeatsOnRetail: Scalars['NonNegativeInt']['output'];
  names: Translated;
  organizerNote: Scalars['String']['output'];
  passCodesCheckedInCount: Scalars['NonNegativeInt']['output'];
  passCodesCheckedOutCount: Scalars['NonNegativeInt']['output'];
  retailSaleAndReservationOptions: SaleAndReservationOptions;
  serviceTime: Scalars['NonNegativeInt']['output'];
  show: Show;
  showId: Scalars['PositiveInt']['output'];
  showOnWebsiteAndApi: Scalars['Boolean']['output'];
  soundMixCode?: Maybe<ShowSoundMixCode>;
  startsAt: Scalars['DateTime']['output'];
  state: EventState;
  ticketNote: Scalars['String']['output'];
  uniqueCheckedInCount: Scalars['NonNegativeInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['PositiveInt']['output'];
  venue: Venue;
  versionCode?: Maybe<ShowVersionCode>;
};

export type EventCategory = {
  __typename?: 'EventCategory';
  clientId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  isActive: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['NonEmptyString']['output']>;
  name: Scalars['NonEmptyString']['output'];
};

export enum EventOrderByKey {
  CreatedAt = 'createdAt',
  Id = 'id',
  StartsAt = 'startsAt',
  UpdatedAt = 'updatedAt'
}

export type EventSeat = {
  __typename?: 'EventSeat';
  createdAt: Scalars['DateTime']['output'];
  event: Event;
  floor?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  row?: Maybe<Scalars['String']['output']>;
  section?: Maybe<Scalars['String']['output']>;
  type: EventSeatType;
  updatedAt: Scalars['DateTime']['output'];
  uuid: Scalars['String']['output'];
};

export enum EventSeatType {
  Seat = 'seat',
  Zone = 'zone'
}

export enum EventState {
  Canceled = 'canceled',
  Deleted = 'deleted',
  Draft = 'draft',
  Published = 'published'
}

export type EventsFilter = {
  ageClassificationCode?: InputMaybe<ShowAgeClassificationCode>;
  baseListFilter?: InputMaybe<BaseListFilter>;
  costCenterId?: InputMaybe<Scalars['PositiveInt']['input']>;
  divisionId?: InputMaybe<Scalars['PositiveInt']['input']>;
  eventCategoryId?: InputMaybe<Scalars['PositiveInt']['input']>;
  formatCode?: InputMaybe<ShowFormatCode>;
  fromStartsAt?: InputMaybe<Scalars['DateTime']['input']>;
  isAvailableOnEcommerce?: InputMaybe<Scalars['Boolean']['input']>;
  isAvailableOnRetail?: InputMaybe<Scalars['Boolean']['input']>;
  marketingLabelId?: InputMaybe<Scalars['PositiveInt']['input']>;
  showGenreCode?: InputMaybe<ShowGenreCode>;
  showId?: InputMaybe<Scalars['PositiveInt']['input']>;
  showOnWebsiteAndApi?: InputMaybe<Scalars['Boolean']['input']>;
  showTypeCode?: InputMaybe<ShowTypeCode>;
  soundMixCode?: InputMaybe<ShowSoundMixCode>;
  state?: InputMaybe<EventState>;
  toStartsAt?: InputMaybe<Scalars['DateTime']['input']>;
  venueId?: InputMaybe<Scalars['PositiveInt']['input']>;
  versionCode?: InputMaybe<ShowVersionCode>;
};

export type EventsOrderBy = {
  direction: OrderByDirection;
  key: EventOrderByKey;
};

export enum ExceptionMessage {
  AdmissionTypeNotFound = 'AdmissionTypeNotFound',
  DiscountNotFound = 'DiscountNotFound',
  EventNotFound = 'EventNotFound',
  EventNotPublished = 'EventNotPublished',
  /** We found the grant for the token provided in Authorization header, but the grant is expired */
  GrantExpired = 'GrantExpired',
  /** We were unable to find ApiGrant for the token provided in Authorization header */
  GrantNotFound = 'GrantNotFound',
  /** We found the grant for the token provided in Authorization header, but the grant's state is not active. */
  GrantStateIsNotActive = 'GrantStateIsNotActive',
  HourRequestLimitExceeded = 'HourRequestLimitExceeded',
  /** Max pageLimit is 100 */
  MaxPageLimitExceeded = 'MaxPageLimitExceeded',
  MinuteRequestLimitExceeded = 'MinuteRequestLimitExceeded',
  PassCodeNotFound = 'PassCodeNotFound',
  /** This error may be thrown, if at least 2 of arguments **checkVenueIds**, **checkTourIds**, **checkTourTimeSlotIds** and **checkEventIds** are defined. */
  PassCodeNotFoundDueToCheckArguments = 'PassCodeNotFoundDueToCheckArguments',
  /** This error may be thrown, if argument **checkEventIds** is defined and arguments **checkTourIds**, **checkTourTimeSlotIds** and **checkVenueIds** are not defined. */
  PassCodeNotFoundDueToCheckEventIds = 'PassCodeNotFoundDueToCheckEventIds',
  /** This error may be thrown, if argument **checkTourIds** is defined and arguments **checkEventIds**, **checkTourTimeSlotIds** and **checkVenueIds** are not defined. */
  PassCodeNotFoundDueToCheckTourIds = 'PassCodeNotFoundDueToCheckTourIds',
  /** This error may be thrown, if argument **checkTourTimeSlotIds** is defined and arguments **checkTourIds**, **checkEventIds** and **checkVenueIds** are not defined. */
  PassCodeNotFoundDueToCheckTourTimeSlotIds = 'PassCodeNotFoundDueToCheckTourTimeSlotIds',
  /** This error may be thrown, if argument **checkVenueIds** is defined and arguments **checkTourIds**, **checkTourTimeSlotIds** and **checkEventIds** are not defined. */
  PassCodeNotFoundDueToCheckVenueIds = 'PassCodeNotFoundDueToCheckVenueIds',
  /** We found the grant for the token provided in Authorization header, but the grant is missing a resource needed for the requested graphql operation */
  ResourceNotGranted = 'ResourceNotGranted',
  ShowNotFound = 'ShowNotFound',
  TicketItemNotFound = 'TicketItemNotFound',
  TourItemNotFound = 'TourItemNotFound',
  TourNotFound = 'TourNotFound',
  TourTimeSlotNotFound = 'TourTimeSlotNotFound',
  TourTimeSlotNotPublished = 'TourTimeSlotNotPublished'
}

export enum ExpirationType {
  ExpiresAt = 'expiresAt',
  LastFor = 'lastFor'
}

export enum ItemType {
  Product = 'product',
  Ticket = 'ticket',
  Tour = 'tour'
}

/** Language code is used for determining a language, that is used in a Show by actors. */
export enum LanguageCode {
  Aar = 'aar',
  Abk = 'abk',
  Ace = 'ace',
  Ach = 'ach',
  Ada = 'ada',
  Ady = 'ady',
  Afa = 'afa',
  Afh = 'afh',
  Afr = 'afr',
  Ain = 'ain',
  Aka = 'aka',
  Akk = 'akk',
  Ale = 'ale',
  Alg = 'alg',
  Alt = 'alt',
  Amh = 'amh',
  Ang = 'ang',
  Anp = 'anp',
  Apa = 'apa',
  Ara = 'ara',
  Arc = 'arc',
  Arg = 'arg',
  Arn = 'arn',
  Arp = 'arp',
  Art = 'art',
  Arw = 'arw',
  Asm = 'asm',
  Ast = 'ast',
  Ath = 'ath',
  Aus = 'aus',
  Ava = 'ava',
  Ave = 'ave',
  Awa = 'awa',
  Aym = 'aym',
  Aze = 'aze',
  Bad = 'bad',
  Bai = 'bai',
  Bak = 'bak',
  Bal = 'bal',
  Bam = 'bam',
  Ban = 'ban',
  Bas = 'bas',
  Bat = 'bat',
  Bej = 'bej',
  Bel = 'bel',
  Bem = 'bem',
  Ben = 'ben',
  Ber = 'ber',
  Bho = 'bho',
  Bih = 'bih',
  Bik = 'bik',
  Bin = 'bin',
  Bis = 'bis',
  Bla = 'bla',
  Bnt = 'bnt',
  Bod = 'bod',
  Bos = 'bos',
  Bra = 'bra',
  Bre = 'bre',
  Btk = 'btk',
  Bua = 'bua',
  Bug = 'bug',
  Bul = 'bul',
  Byn = 'byn',
  Cad = 'cad',
  Cai = 'cai',
  Car = 'car',
  Cat = 'cat',
  Cau = 'cau',
  Ceb = 'ceb',
  Cel = 'cel',
  Ces = 'ces',
  Cha = 'cha',
  Chb = 'chb',
  Che = 'che',
  Chk = 'chk',
  Chm = 'chm',
  Chn = 'chn',
  Cho = 'cho',
  Chp = 'chp',
  Chr = 'chr',
  Chu = 'chu',
  Chv = 'chv',
  Chy = 'chy',
  Cmc = 'cmc',
  Cnr = 'cnr',
  Cop = 'cop',
  Cor = 'cor',
  Cos = 'cos',
  Cre = 'cre',
  Crh = 'crh',
  Crp = 'crp',
  Csb = 'csb',
  Cus = 'cus',
  Cym = 'cym',
  Dak = 'dak',
  Dan = 'dan',
  Dar = 'dar',
  Day = 'day',
  Del = 'del',
  Den = 'den',
  Deu = 'deu',
  Dgr = 'dgr',
  Din = 'din',
  Div = 'div',
  Doi = 'doi',
  Dra = 'dra',
  Dsb = 'dsb',
  Dua = 'dua',
  Dum = 'dum',
  Dyu = 'dyu',
  Dzo = 'dzo',
  Efi = 'efi',
  Egy = 'egy',
  Eka = 'eka',
  Ell = 'ell',
  Elx = 'elx',
  Eng = 'eng',
  Enm = 'enm',
  Epo = 'epo',
  Est = 'est',
  Eus = 'eus',
  Ewe = 'ewe',
  Ewo = 'ewo',
  Fan = 'fan',
  Fao = 'fao',
  Fas = 'fas',
  Fat = 'fat',
  Fij = 'fij',
  Fil = 'fil',
  Fin = 'fin',
  Fiu = 'fiu',
  Fon = 'fon',
  Fra = 'fra',
  Frm = 'frm',
  Fro = 'fro',
  Frr = 'frr',
  Frs = 'frs',
  Fry = 'fry',
  Ful = 'ful',
  Fur = 'fur',
  Gaa = 'gaa',
  Gay = 'gay',
  Gba = 'gba',
  Gem = 'gem',
  Gez = 'gez',
  Gil = 'gil',
  Gla = 'gla',
  Gle = 'gle',
  Glg = 'glg',
  Glv = 'glv',
  Gmh = 'gmh',
  Goh = 'goh',
  Gon = 'gon',
  Gor = 'gor',
  Got = 'got',
  Grb = 'grb',
  Grc = 'grc',
  Grn = 'grn',
  Gsw = 'gsw',
  Guj = 'guj',
  Gwi = 'gwi',
  Hai = 'hai',
  Hat = 'hat',
  Hau = 'hau',
  Haw = 'haw',
  Heb = 'heb',
  Her = 'her',
  Hil = 'hil',
  Him = 'him',
  Hin = 'hin',
  Hit = 'hit',
  Hmn = 'hmn',
  Hmo = 'hmo',
  Hrv = 'hrv',
  Hsb = 'hsb',
  Hun = 'hun',
  Hup = 'hup',
  Hye = 'hye',
  Iba = 'iba',
  Ibo = 'ibo',
  Ido = 'ido',
  Iii = 'iii',
  Ijo = 'ijo',
  Iku = 'iku',
  Ile = 'ile',
  Ilo = 'ilo',
  Ina = 'ina',
  Inc = 'inc',
  Ind = 'ind',
  Ine = 'ine',
  Inh = 'inh',
  Ipk = 'ipk',
  Ira = 'ira',
  Iro = 'iro',
  Isl = 'isl',
  Ita = 'ita',
  Jav = 'jav',
  Jbo = 'jbo',
  Jpn = 'jpn',
  Jpr = 'jpr',
  Jrb = 'jrb',
  Kaa = 'kaa',
  Kab = 'kab',
  Kac = 'kac',
  Kal = 'kal',
  Kam = 'kam',
  Kan = 'kan',
  Kar = 'kar',
  Kas = 'kas',
  Kat = 'kat',
  Kau = 'kau',
  Kaw = 'kaw',
  Kaz = 'kaz',
  Kbd = 'kbd',
  Kha = 'kha',
  Khi = 'khi',
  Khm = 'khm',
  Kho = 'kho',
  Kik = 'kik',
  Kin = 'kin',
  Kir = 'kir',
  Kmb = 'kmb',
  Kok = 'kok',
  Kom = 'kom',
  Kon = 'kon',
  Kor = 'kor',
  Kos = 'kos',
  Kpe = 'kpe',
  Krc = 'krc',
  Krl = 'krl',
  Kro = 'kro',
  Kru = 'kru',
  Kua = 'kua',
  Kum = 'kum',
  Kur = 'kur',
  Kut = 'kut',
  Lad = 'lad',
  Lah = 'lah',
  Lam = 'lam',
  Lao = 'lao',
  Lat = 'lat',
  Lav = 'lav',
  Lez = 'lez',
  Lim = 'lim',
  Lin = 'lin',
  Lit = 'lit',
  Lol = 'lol',
  Loz = 'loz',
  Ltz = 'ltz',
  Lua = 'lua',
  Lub = 'lub',
  Lug = 'lug',
  Lui = 'lui',
  Lun = 'lun',
  Luo = 'luo',
  Lus = 'lus',
  Mad = 'mad',
  Mag = 'mag',
  Mah = 'mah',
  Mai = 'mai',
  Mak = 'mak',
  Mal = 'mal',
  Man = 'man',
  Map = 'map',
  Mar = 'mar',
  Mas = 'mas',
  Mdf = 'mdf',
  Mdr = 'mdr',
  Men = 'men',
  Mga = 'mga',
  Mic = 'mic',
  Min = 'min',
  Mis = 'mis',
  Mkd = 'mkd',
  Mkh = 'mkh',
  Mlg = 'mlg',
  Mlt = 'mlt',
  Mnc = 'mnc',
  Mni = 'mni',
  Mno = 'mno',
  Moh = 'moh',
  Mon = 'mon',
  Mos = 'mos',
  Mri = 'mri',
  Msa = 'msa',
  Mul = 'mul',
  Mun = 'mun',
  Mus = 'mus',
  Mwl = 'mwl',
  Mwr = 'mwr',
  Mya = 'mya',
  Myn = 'myn',
  Myv = 'myv',
  Nah = 'nah',
  Nai = 'nai',
  Nap = 'nap',
  Nau = 'nau',
  Nav = 'nav',
  Nbl = 'nbl',
  Nde = 'nde',
  Ndo = 'ndo',
  Nds = 'nds',
  Nep = 'nep',
  Nia = 'nia',
  Nic = 'nic',
  Niu = 'niu',
  Nld = 'nld',
  Nno = 'nno',
  Nob = 'nob',
  Nog = 'nog',
  Non = 'non',
  Nor = 'nor',
  Nqo = 'nqo',
  Nso = 'nso',
  Nub = 'nub',
  Nwc = 'nwc',
  Nya = 'nya',
  Nym = 'nym',
  Nyn = 'nyn',
  Nyo = 'nyo',
  Nzi = 'nzi',
  Oci = 'oci',
  Oji = 'oji',
  Ori = 'ori',
  Orm = 'orm',
  Osa = 'osa',
  Oss = 'oss',
  Ota = 'ota',
  Oto = 'oto',
  Paa = 'paa',
  Pag = 'pag',
  Pal = 'pal',
  Pam = 'pam',
  Pan = 'pan',
  Pap = 'pap',
  Pau = 'pau',
  Peo = 'peo',
  Phi = 'phi',
  Phn = 'phn',
  Pli = 'pli',
  Pol = 'pol',
  Pon = 'pon',
  Por = 'por',
  Pra = 'pra',
  Pro = 'pro',
  Pus = 'pus',
  Que = 'que',
  Raj = 'raj',
  Rap = 'rap',
  Rar = 'rar',
  Roa = 'roa',
  Roh = 'roh',
  Rom = 'rom',
  Ron = 'ron',
  Run = 'run',
  Rup = 'rup',
  Rus = 'rus',
  Sad = 'sad',
  Sag = 'sag',
  Sah = 'sah',
  Sai = 'sai',
  Sam = 'sam',
  San = 'san',
  Sas = 'sas',
  Sat = 'sat',
  Scn = 'scn',
  Sco = 'sco',
  Sel = 'sel',
  Sem = 'sem',
  Sga = 'sga',
  Sgn = 'sgn',
  Shn = 'shn',
  Sid = 'sid',
  Sin = 'sin',
  Sio = 'sio',
  Sit = 'sit',
  Sla = 'sla',
  Slk = 'slk',
  Slv = 'slv',
  Sma = 'sma',
  Sme = 'sme',
  Smi = 'smi',
  Smj = 'smj',
  Smn = 'smn',
  Smo = 'smo',
  Sms = 'sms',
  Sna = 'sna',
  Snd = 'snd',
  Snk = 'snk',
  Sog = 'sog',
  Som = 'som',
  Son = 'son',
  Sot = 'sot',
  Spa = 'spa',
  Sqi = 'sqi',
  Srd = 'srd',
  Srn = 'srn',
  Srp = 'srp',
  Srr = 'srr',
  Ssa = 'ssa',
  Ssw = 'ssw',
  Suk = 'suk',
  Sun = 'sun',
  Sus = 'sus',
  Sux = 'sux',
  Swa = 'swa',
  Swe = 'swe',
  Syc = 'syc',
  Syr = 'syr',
  Tah = 'tah',
  Tai = 'tai',
  Tam = 'tam',
  Tat = 'tat',
  Tel = 'tel',
  Tem = 'tem',
  Ter = 'ter',
  Tet = 'tet',
  Tgk = 'tgk',
  Tgl = 'tgl',
  Tha = 'tha',
  Tig = 'tig',
  Tir = 'tir',
  Tiv = 'tiv',
  Tkl = 'tkl',
  Tlh = 'tlh',
  Tli = 'tli',
  Tmh = 'tmh',
  Tog = 'tog',
  Ton = 'ton',
  Tpi = 'tpi',
  Tsi = 'tsi',
  Tsn = 'tsn',
  Tso = 'tso',
  Tuk = 'tuk',
  Tum = 'tum',
  Tup = 'tup',
  Tur = 'tur',
  Tut = 'tut',
  Tvl = 'tvl',
  Twi = 'twi',
  Tyv = 'tyv',
  Udm = 'udm',
  Uga = 'uga',
  Uig = 'uig',
  Ukr = 'ukr',
  Umb = 'umb',
  Und = 'und',
  Urd = 'urd',
  Uzb = 'uzb',
  Vai = 'vai',
  Ven = 'ven',
  Vie = 'vie',
  Vol = 'vol',
  Vot = 'vot',
  Wak = 'wak',
  Wal = 'wal',
  War = 'war',
  Was = 'was',
  Wen = 'wen',
  Wln = 'wln',
  Wol = 'wol',
  Xal = 'xal',
  Xho = 'xho',
  Yao = 'yao',
  Yap = 'yap',
  Yid = 'yid',
  Yor = 'yor',
  Ypk = 'ypk',
  Zap = 'zap',
  Zbl = 'zbl',
  Zen = 'zen',
  Zgh = 'zgh',
  Zha = 'zha',
  Zho = 'zho',
  Znd = 'znd',
  Zul = 'zul',
  Zun = 'zun',
  Zxx = 'zxx',
  Zza = 'zza'
}

export enum LocaleCode {
  Cs = 'cs',
  En = 'en',
  Hu = 'hu',
  Sk = 'sk'
}

export type MarketingLabel = {
  __typename?: 'MarketingLabel';
  clientId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  isActive: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['NonEmptyString']['output']>;
  name: Scalars['NonEmptyString']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * * **passCode: "XXX0", discountAuthorizationMode: "doNotAuthorize"**	= state: allowed, additionalInformation: Checked in. Valid passcode after first check. Entrance allowed.
   * * **passCode: "XXX0", discountAuthorizationMode: "authorizeAll"** = state: pending, additionalInformation: discountAuthorizationPending. Passcode was not checked in yet and is required discount authorization to allow visitor.
   * * **passCode: "XXX1"** = state: denied, additionalInformation: gateIsNotOpen. Visitor can't enter. Event has not started yet or already finished.
   * * **passCode: "XXX2"** = state: denied, additionalInformation: ticketClaimed. Visitor can't enter. Ticket is claimed and may be refunded.
   * * **passCode: "XXX3"** = state: denied, additionalInformation: alreadyCheckedIn. Visitor can't enter. Ticket was used already.
   * * **passCode: "XXX4"** = Exception, message: TourTimeSlotNotPublished. Visitor can't enter.
   * * **passCode: "XXX5"** = Exception, message: EventNotPublished. Visitor can't enter.
   * * **passCode: "XXX6"** = Exception, message: PassCodeNotFoundDueToCheckEventIds. Visitor can't enter.
   * * **passCode: "XXX7"** = Exception, message: PassCodeNotFoundDueToCheckTourIds. Visitor can't enter.
   * * **passCode: "XXX8"** = Exception, message: PassCodeNotFoundDueToCheckTourTimeSlotIds. Visitor can't enter.
   * * **passCode: "XXX9"** = Exception, message: PassCodeNotFoundDueToCheckVenueIds. Visitor can't enter.
   * * **passCode: "XX10"** = Exception, message: PassCodeNotFoundDueToCheckArguments. Visitor can't enter.
   * * **passCode: "XX11"** = state: allowed, additionalInformation: Checked in. Valid passcode after first check. TourItem is partiallyCheckedIn. Entrance allowed.
   * * **passCode: "XXXX"** = Exception, message: PassCodeNotFound. Visitor can't enter.
   *
   * Only for apiGrants with granted resource(s): *checkPassCode*
   */
  checkPassCodeIn: PassCodeCheck;
  /**
   * * **passCode: "XXX0"** = state: allowed, additionalInformation: Checked out. Valid passcode after first check. Departure allowed.
   * * **passCode: "XXX1"** = state: denied, additionalInformation: gateIsNotOpen. Visitor can't depart. Event has not started yet or already finished.
   * * **passCode: "XXX2"** = state: denied, additionalInformation: ticketClaimed. Visitor can't depart. Ticket is claimed and may be refunded.
   * * **passCode: "XXX3"** = state: denied, additionalInformation: alreadyCheckedOut. Visitor can't depart. Ticket was used already.
   * * **passCode: "XXX4"** = Exception, message: TourTimeSlotNotPublished. Visitor can't depart.
   * * **passCode: "XXX5"** = Exception, message: EventNotPublished. Visitor can't depart.
   * * **passCode: "XXX6"** = Exception, message: PassCodeNotFoundDueToCheckEventIds. Visitor can't depart.
   * * **passCode: "XXX7"** = Exception, message: PassCodeNotFoundDueToCheckTourIds. Visitor can't depart.
   * * **passCode: "XXX8"** = Exception, message: PassCodeNotFoundDueToCheckTourTimeSlotIds. Visitor can't depart.
   * * **passCode: "XXX9"** = Exception, message: PassCodeNotFoundDueToCheckVenueIds. Visitor can't depart.
   * * **passCode: "XX10"** = Exception, message: PassCodeNotFoundDueToCheckArguments. Visitor can't depart.
   * * **passCode: "XX11"** = state: allowed, additionalInformation: Checked out. Valid passcode after first check. TourItem is partiallyCheckedIn. Depart allowed.
   * * **passCode: "XXXX"** = Exception, message: PassCodeNotFound. Visitor can't depart.
   *
   * Only for apiGrants with granted resource(s): *checkPassCode*
   */
  checkPassCodeOut: PassCodeCheck;
};


export type MutationCheckPassCodeInArgs = {
  checkEventIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  checkTourIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  checkTourTimeSlotIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  checkVenueIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  discountAuthorizationMode: DiscountAuthorizationMode;
  inputType: PassCodeCheckInputType;
  passCode: Scalars['NonEmptyString']['input'];
};


export type MutationCheckPassCodeOutArgs = {
  checkEventIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  checkTourIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  checkTourTimeSlotIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  checkVenueIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  inputType: PassCodeCheckInputType;
  passCode: Scalars['NonEmptyString']['input'];
};

export enum OrderByDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PaginatedEvents = PaginationResult & {
  __typename?: 'PaginatedEvents';
  items: Array<Event>;
  pagination: Pagination;
};

export type PaginatedShows = PaginationResult & {
  __typename?: 'PaginatedShows';
  items: Array<Show>;
  pagination: Pagination;
};

export type Pagination = {
  __typename?: 'Pagination';
  /** First page starts with index 1 */
  currentPage: Scalars['PositiveInt']['output'];
  itemsCount: Scalars['NonNegativeInt']['output'];
  pageLimit: Scalars['PositiveInt']['output'];
  pagesCount: Scalars['PositiveInt']['output'];
};

export type PaginationInput = {
  currentPage?: InputMaybe<Scalars['PositiveInt']['input']>;
  /** Max allowed value for pageLimit is 100 */
  pageLimit?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type PaginationItem = {
  id: Scalars['PositiveInt']['output'];
};

export type PaginationResult = {
  items: Array<PaginationItem>;
  pagination: Pagination;
};

export type PassCodeCheck = {
  __typename?: 'PassCodeCheck';
  additionalInformation: PassCodeCheckAdditionalInformation;
  clientId: Scalars['PositiveInt']['output'];
  direction: PassCodeCheckDirection;
  discountAuthorizationMode: DiscountAuthorizationMode;
  divisionId: Scalars['PositiveInt']['output'];
  event?: Maybe<Event>;
  id: Scalars['PositiveInt']['output'];
  inputType: PassCodeCheckInputType;
  passCode: Scalars['NonEmptyString']['output'];
  state: PassCodeCheckState;
  ticketItem?: Maybe<TicketItem>;
  tourItem?: Maybe<TourItem>;
  tourTimeSlot?: Maybe<TourTimeSlot>;
};

export enum PassCodeCheckAdditionalInformation {
  AlreadyCheckedIn = 'alreadyCheckedIn',
  AlreadyCheckedOut = 'alreadyCheckedOut',
  AuthorizedDiscount = 'authorizedDiscount',
  CheckedIn = 'checkedIn',
  CheckedOut = 'checkedOut',
  DiscountAuthorizationPending = 'discountAuthorizationPending',
  GateIsNotOpen = 'gateIsNotOpen',
  TicketClaimed = 'ticketClaimed',
  UnauthorizedDiscount = 'unauthorizedDiscount'
}

export enum PassCodeCheckDirection {
  In = 'in',
  Out = 'out'
}

export enum PassCodeCheckInputType {
  Scanned = 'scanned',
  Typed = 'typed'
}

export enum PassCodeCheckState {
  Allowed = 'allowed',
  Denied = 'denied',
  Pending = 'pending'
}

export type Query = {
  __typename?: 'Query';
  admissionType: AdmissionType;
  /** Returns information about apiGrant related to bearer token in authorization header */
  apiGrant: ApiGrant;
  discount: Discount;
  /** Only for apiGrants with granted resource(s): *events* */
  event: Event;
  /** Only for apiGrants with granted resource(s): *events* */
  events: PaginatedEvents;
  /** Only for apiGrants with granted resource(s): *shows* */
  show: Show;
  /** Only for apiGrants with granted resource(s): *shows* */
  shows: PaginatedShows;
  /** Only for apiGrants with granted resource(s): *e2eTests* */
  ticketItem: TicketItem;
  /** Only for apiGrants with granted resource(s): *tours* */
  tour: Tour;
  /** Only for apiGrants with granted resource(s): *e2eTests* */
  tourItem: TourItem;
  /** Only for apiGrants with granted resource(s): *tourTimeSlots* */
  tourTimeSlot: TourTimeSlot;
  /** Only for apiGrants with granted resource(s): *tourTimeSlots* */
  tourTimeSlots: Array<TourTimeSlot>;
  /** Only for apiGrants with granted resource(s): *tours* */
  tours: Array<Tour>;
};


export type QueryAdmissionTypeArgs = {
  id: Scalars['PositiveInt']['input'];
};


export type QueryDiscountArgs = {
  id: Scalars['PositiveInt']['input'];
};


export type QueryEventArgs = {
  id: Scalars['PositiveInt']['input'];
};


export type QueryEventsArgs = {
  filter?: InputMaybe<EventsFilter>;
  orderBy?: InputMaybe<EventsOrderBy>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryShowArgs = {
  id: Scalars['PositiveInt']['input'];
};


export type QueryShowsArgs = {
  filter?: InputMaybe<ShowsFilter>;
  orderBy?: InputMaybe<ShowsOrderBy>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryTicketItemArgs = {
  id: Scalars['PositiveInt']['input'];
};


export type QueryTourArgs = {
  id: Scalars['PositiveInt']['input'];
};


export type QueryTourItemArgs = {
  id: Scalars['PositiveInt']['input'];
};


export type QueryTourTimeSlotArgs = {
  id: Scalars['PositiveInt']['input'];
};

export type SaleAndReservationOptions = {
  __typename?: 'SaleAndReservationOptions';
  isReservationActive: Scalars['Boolean']['output'];
  isSaleActive: Scalars['Boolean']['output'];
  reservationEndsAt: Scalars['DateTime']['output'];
  reservationStartsAt: Scalars['DateTime']['output'];
  saleEndsAt: Scalars['DateTime']['output'];
  saleStartsAt: Scalars['DateTime']['output'];
};

export enum SellingChannel {
  /** Online sales */
  ECommerce = 'eCommerce',
  /** Sales on point of sale */
  Retail = 'retail'
}

export type Show = PaginationItem & {
  __typename?: 'Show';
  ageClassificationCodes: Array<ShowAgeClassificationCode>;
  clientId: Scalars['PositiveInt']['output'];
  countryCodes: Array<CountryCode>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['PositiveInt']['output'];
  distributions: Array<ShowDistribution>;
  duration?: Maybe<Scalars['PositiveInt']['output']>;
  genreCodes: Array<ShowGenreCode>;
  globalReleaseDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['PositiveInt']['output'];
  images: Array<ShowImage>;
  languageCodes: Array<LanguageCode>;
  originalTitle?: Maybe<Scalars['String']['output']>;
  primaryImage?: Maybe<ShowImage>;
  productionYear?: Maybe<Scalars['PositiveInt']['output']>;
  translations: Array<ShowTranslation>;
  typeCode: ShowTypeCode;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['PositiveInt']['output'];
};


export type ShowImagesArgs = {
  types?: InputMaybe<Array<ShowImageType>>;
};


export type ShowPrimaryImageArgs = {
  type: ShowImageType;
};

export enum ShowAgeClassificationCode {
  CzNotRestricted = 'cz_not_restricted',
  CzOver2 = 'cz_over2',
  CzOver3 = 'cz_over3',
  CzOver4 = 'cz_over4',
  CzOver5 = 'cz_over5',
  CzOver6 = 'cz_over6',
  CzOver7 = 'cz_over7',
  CzOver8 = 'cz_over8',
  CzOver9 = 'cz_over9',
  CzOver10 = 'cz_over10',
  CzOver11 = 'cz_over11',
  CzOver12 = 'cz_over12',
  CzOver13 = 'cz_over13',
  CzOver14 = 'cz_over14',
  CzOver15 = 'cz_over15',
  CzOver16 = 'cz_over16',
  CzOver17 = 'cz_over17',
  CzOver18 = 'cz_over18',
  SkNotRestricted = 'sk_not_restricted',
  SkOver2 = 'sk_over2',
  SkOver3 = 'sk_over3',
  SkOver4 = 'sk_over4',
  SkOver5 = 'sk_over5',
  SkOver6 = 'sk_over6',
  SkOver7 = 'sk_over7',
  SkOver8 = 'sk_over8',
  SkOver9 = 'sk_over9',
  SkOver10 = 'sk_over10',
  SkOver11 = 'sk_over11',
  SkOver12 = 'sk_over12',
  SkOver13 = 'sk_over13',
  SkOver14 = 'sk_over14',
  SkOver15 = 'sk_over15',
  SkOver16 = 'sk_over16',
  SkOver17 = 'sk_over17',
  SkOver18 = 'sk_over18'
}

export type ShowDistribution = {
  __typename?: 'ShowDistribution';
  formatCode?: Maybe<ShowFormatCode>;
  soundMixCode?: Maybe<ShowSoundMixCode>;
  versionCode?: Maybe<ShowVersionCode>;
};

export enum ShowFormatCode {
  Analog_16mm = 'analog_16mm',
  Analog_35mm = 'analog_35mm',
  Analog_70mm = 'analog_70mm',
  Digital_2d = 'digital_2d',
  Digital_2d_4d = 'digital_2d_4d',
  Digital_2d_4k = 'digital_2d_4k',
  Digital_2dHfr = 'digital_2d_hfr',
  Digital_3d = 'digital_3d',
  Digital_3d_4d = 'digital_3d_4d',
  Digital_3dHfr = 'digital_3d_hfr',
  DigitalBd = 'digital_bd',
  DigitalDvd = 'digital_dvd',
  Live = 'live',
  LiveStream = 'live_stream',
  Record = 'record'
}

export enum ShowGenreCode {
  ACappella = 'a_cappella',
  Accounting = 'accounting',
  Action = 'action',
  Adrenaline = 'adrenaline',
  Adult = 'adult',
  Adventure = 'adventure',
  Alternative = 'alternative',
  Animation = 'animation',
  Antiquity = 'antiquity',
  Architecture = 'architecture',
  Athletics = 'athletics',
  Badminton = 'badminton',
  Ball = 'ball',
  Ballet = 'ballet',
  Basketball = 'basketball',
  Beatbox = 'beatbox',
  BeautyContest = 'beauty_contest',
  Beer = 'beer',
  Biathlon = 'biathlon',
  Biography = 'biography',
  BlackHumor = 'black_humor',
  Blues = 'blues',
  BodyBuilding = 'body_building',
  Boxing = 'boxing',
  BrassBand = 'brass_band',
  Business = 'business',
  Cabaret = 'cabaret',
  Calligraphy = 'calligraphy',
  Carnival = 'carnival',
  Ceremony = 'ceremony',
  ChamberMusic = 'chamber_music',
  ChansonFrancaise = 'chanson_francaise',
  ChoirSinging = 'choir_singing',
  Circus = 'circus',
  ClassicalMusic = 'classical_music',
  Comedy = 'comedy',
  Communication = 'communication',
  Conference = 'conference',
  ContemporaryArt = 'contemporary_art',
  Country = 'country',
  Crime = 'crime',
  Cruise = 'cruise',
  Curling = 'curling',
  Cycling = 'cycling',
  Dance = 'dance',
  Decade_20s = 'decade_20s',
  Decade_30s = 'decade_30s',
  Decade_40s = 'decade_40s',
  Decade_50s = 'decade_50s',
  Decade_60s = 'decade_60s',
  Decade_70s = 'decade_70s',
  Decade_80s = 'decade_80s',
  Decade_90s = 'decade_90s',
  Design = 'design',
  Disaster = 'disaster',
  Disco = 'disco',
  Discoteque = 'discoteque',
  Documentary = 'documentary',
  Drama = 'drama',
  Drawing = 'drawing',
  Drinks = 'drinks',
  Educational = 'educational',
  ElectricBoogie = 'electric_boogie',
  ElectronicMusic = 'electronic_music',
  Erotic = 'erotic',
  EscapeRoom = 'escape_room',
  Esports = 'esports',
  Experimental = 'experimental',
  Fair = 'fair',
  Family = 'family',
  Fantasy = 'fantasy',
  Farce = 'farce',
  Fashion = 'fashion',
  FashionShow = 'fashion_show',
  Fauna = 'fauna',
  FieldHockey = 'field_hockey',
  Film = 'film',
  Filmnoir = 'filmnoir',
  Finance = 'finance',
  FineArt = 'fine_art',
  Fitness = 'fitness',
  Flight = 'flight',
  Floorball = 'floorball',
  Flora = 'flora',
  Folk = 'folk',
  Folklore = 'folklore',
  Food = 'food',
  Football = 'football',
  Funk = 'funk',
  Gala = 'gala',
  Gastronomy = 'gastronomy',
  Golf = 'golf',
  Grotesque = 'grotesque',
  Gymnastics = 'gymnastics',
  Handball = 'handball',
  HipHop = 'hip_hop',
  History = 'history',
  Hockey = 'hockey',
  Horror = 'horror',
  House = 'house',
  IceSkating = 'ice_skating',
  Illusions = 'illusions',
  Instrumental = 'instrumental',
  Jazz = 'jazz',
  JobFair = 'job_fair',
  Kids = 'kids',
  Lasertag = 'lasertag',
  Learning = 'learning',
  Lifestyle = 'lifestyle',
  Literature = 'literature',
  Magic = 'magic',
  Marketing = 'marketing',
  MartialArts = 'martial_arts',
  Massage = 'massage',
  Medieval = 'medieval',
  Melodrama = 'melodrama',
  Metal = 'metal',
  MiddleAges = 'middle_ages',
  Miscellaneous = 'miscellaneous',
  Modern = 'modern',
  ModernTimes = 'modern_times',
  Mosaic = 'mosaic',
  Motosport = 'motosport',
  Multimedia = 'multimedia',
  Music = 'music',
  Musical = 'musical',
  Mystery = 'mystery',
  Nature = 'nature',
  NewAge = 'new_age',
  Opera = 'opera',
  Operetta = 'operetta',
  Paintball = 'paintball',
  Painting = 'painting',
  Pantomime = 'pantomime',
  Parody = 'parody',
  Party = 'party',
  PersonalDevelopment = 'personal_development',
  Photography = 'photography',
  Politics = 'politics',
  Pop = 'pop',
  Pottery = 'pottery',
  Prehistory = 'prehistory',
  Prom = 'prom',
  Psychological = 'psychological',
  Punk = 'punk',
  Puppetry = 'puppetry',
  Racing = 'racing',
  Rafting = 'rafting',
  Rap = 'rap',
  Reggae = 'reggae',
  Relax = 'relax',
  Religious = 'religious',
  Renaissance = 'renaissance',
  RhythmAndBlues = 'rhythm_and_blues',
  Ride = 'ride',
  RoadMovie = 'road_movie',
  Rock = 'rock',
  RockAndRoll = 'rock_and_roll',
  Romance = 'romance',
  Satire = 'satire',
  Science = 'science',
  Scify = 'scify',
  Sculpture = 'sculpture',
  Short = 'short',
  Show = 'show',
  Sightseeing = 'sightseeing',
  SilentFilm = 'silent_film',
  Sing = 'sing',
  SkiJumping = 'ski_jumping',
  Skiing = 'skiing',
  Soul = 'soul',
  Spa = 'spa',
  Sport = 'sport',
  Squash = 'squash',
  StandupComedy = 'standup_comedy',
  Streetfood = 'streetfood',
  Striptease = 'striptease',
  Swimming = 'swimming',
  Swing = 'swing',
  TableTennis = 'table_tennis',
  Talkshow = 'talkshow',
  Tasting = 'tasting',
  Techno = 'techno',
  Tennis = 'tennis',
  Theatre = 'theatre',
  Thriller = 'thriller',
  Tour = 'tour',
  Tourism = 'tourism',
  Toys = 'toys',
  Tradeshow = 'tradeshow',
  Tragedy = 'tragedy',
  Tragicomedy = 'tragicomedy',
  Trance = 'trance',
  Traveling = 'traveling',
  TravestyShow = 'travesty_show',
  Variety = 'variety',
  Volleyball = 'volleyball',
  War = 'war',
  Waterpolo = 'waterpolo',
  Wellness = 'wellness',
  Western = 'western',
  Wine = 'wine',
  WorldMusic = 'world_music',
  Yoga = 'yoga'
}

export type ShowImage = {
  __typename?: 'ShowImage';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  libraryImageId: Scalars['Int']['output'];
  order: Scalars['NonNegativeFloat']['output'];
  showId: Scalars['Int']['output'];
  thumbnail?: Maybe<ShowImageThumbnail>;
  thumbnails: Array<ShowImageThumbnail>;
  type: ShowImageType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


export type ShowImageThumbnailArgs = {
  id: Scalars['Int']['input'];
};


export type ShowImageThumbnailsArgs = {
  sizes?: InputMaybe<Array<ShowImageThumbnailSize>>;
};

export type ShowImageThumbnail = {
  __typename?: 'ShowImageThumbnail';
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  size: ShowImageThumbnailSize;
  type?: Maybe<ThumbnailType>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export enum ShowImageThumbnailSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export enum ShowImageType {
  Backdrop = 'backdrop',
  Banner = 'banner',
  Cover = 'cover',
  Photo = 'photo',
  Poster = 'poster'
}

export enum ShowOrderByKey {
  ClientId = 'clientId',
  CreatedAt = 'createdAt',
  Duration = 'duration',
  GlobalReleaseDate = 'globalReleaseDate',
  Id = 'id',
  OriginalTitle = 'originalTitle',
  TypeCode = 'typeCode',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export enum ShowSoundMixCode {
  DolbyAtmos = 'dolby_atmos',
  Stereo20 = 'stereo20',
  Stereo21 = 'stereo21',
  Surround51 = 'surround51',
  Surround71 = 'surround71'
}

export type ShowTranslation = {
  __typename?: 'ShowTranslation';
  description?: Maybe<Scalars['String']['output']>;
  localeCode: LocaleCode;
  showId: Scalars['Int']['output'];
  tagline?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum ShowTypeCode {
  Education = 'education',
  Entertainment = 'entertainment',
  Exhibition = 'exhibition',
  Experience = 'experience',
  Festival = 'festival',
  Movie = 'movie',
  Music = 'music',
  Sport = 'sport',
  Theatre = 'theatre'
}

export enum ShowVersionCode {
  Ces = 'ces',
  Deu = 'deu',
  DubbingCes = 'dubbing_ces',
  DubbingDeu = 'dubbing_deu',
  DubbingEng = 'dubbing_eng',
  DubbingHun = 'dubbing_hun',
  DubbingPol = 'dubbing_pol',
  DubbingSlk = 'dubbing_slk',
  Eng = 'eng',
  Hun = 'hun',
  Original = 'original',
  Pol = 'pol',
  Rue = 'rue',
  Rus = 'rus',
  Slk = 'slk',
  SubtitlesCes = 'subtitles_ces',
  SubtitlesCesDeu = 'subtitles_ces_deu',
  SubtitlesCesEng = 'subtitles_ces_eng',
  SubtitlesDeu = 'subtitles_deu',
  SubtitlesEng = 'subtitles_eng',
  SubtitlesHun = 'subtitles_hun',
  SubtitlesPol = 'subtitles_pol',
  SubtitlesSlk = 'subtitles_slk',
  SubtitlesSlkDeu = 'subtitles_slk_deu',
  SubtitlesSlkEng = 'subtitles_slk_eng',
  SubtitlesSlkHun = 'subtitles_slk_hun',
  Ukr = 'ukr'
}

export type ShowsEventFilter = {
  eventStates?: InputMaybe<Array<EventState>>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  hasEvents: Scalars['Boolean']['input'];
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ShowsFilter = {
  ageClassificationCode?: InputMaybe<ShowAgeClassificationCode>;
  baseListFilter?: InputMaybe<BaseListFilter>;
  countryCode?: InputMaybe<CountryCode>;
  eventsFilter?: InputMaybe<ShowsEventFilter>;
  fromGlobalReleaseDate?: InputMaybe<Scalars['Date']['input']>;
  genreCode?: InputMaybe<ShowGenreCode>;
  hasText?: InputMaybe<Scalars['String']['input']>;
  toGlobalReleaseDate?: InputMaybe<Scalars['Date']['input']>;
  typeCode?: InputMaybe<ShowTypeCode>;
};

export type ShowsOrderBy = {
  direction: OrderByDirection;
  key: ShowOrderByKey;
};

export enum ThumbnailType {
  Photo = 'photo',
  Poster = 'poster'
}

export type TicketItem = {
  __typename?: 'TicketItem';
  appliedDiscounts: Array<AppliedDiscount>;
  checkStatus: TicketItemCheckStatus;
  checkedInCount: Scalars['NonNegativeInt']['output'];
  checkedOutCount: Scalars['NonNegativeInt']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  event: Event;
  eventId: Scalars['PositiveInt']['output'];
  eventSeat: EventSeat;
  id: Scalars['PositiveInt']['output'];
  passCode?: Maybe<Scalars['NonEmptyString']['output']>;
  price: Scalars['Float']['output'];
  priceBeforeDiscount: Scalars['NonNegativeFloat']['output'];
  priceLevel: Scalars['String']['output'];
  priceVatExcluded: Scalars['Float']['output'];
  totalPassCodeChecksCount: Scalars['NonNegativeInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  vat: Scalars['Float']['output'];
  vatRate: Scalars['NonNegativeFloat']['output'];
};

export enum TicketItemCheckStatus {
  CheckedIn = 'checkedIn',
  CheckedOut = 'checkedOut',
  Unchecked = 'unchecked'
}

export enum TicketValidityType {
  ValidAtSlotDatetimePlusNHours = 'validAtSlotDatetimePlusNHours',
  ValidAtSlotDayPlusNDays = 'validAtSlotDayPlusNDays',
  ValidOnlyForTimeSlot = 'validOnlyForTimeSlot'
}

export type Tour = {
  __typename?: 'Tour';
  clientId: Scalars['PositiveInt']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['PositiveInt']['output'];
  divisionId: Scalars['PositiveInt']['output'];
  /** Default value for tourTimeSlot */
  duration: Scalars['PositiveInt']['output'];
  /** Default value for tourTimeSlot */
  eCommerceAttendeesLimit?: Maybe<Scalars['NonNegativeInt']['output']>;
  /** Default value for tourTimeSlot */
  eCommerceOrderAttendeesLimit?: Maybe<Scalars['NonNegativeInt']['output']>;
  id: Scalars['PositiveInt']['output'];
  internalNote?: Maybe<Scalars['NonEmptyString']['output']>;
  name: Scalars['NonEmptyString']['output'];
  /** Default value for tourTimeSlot */
  retailAttendeesLimit?: Maybe<Scalars['NonNegativeInt']['output']>;
  /** Only for apiGrants with granted resource(s): *shows* */
  show: Show;
  showId: Scalars['PositiveInt']['output'];
  state: TourState;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['PositiveInt']['output'];
  /** Only for apiGrants with granted resource(s): *venues* */
  venue?: Maybe<Venue>;
  /** Default value for tourTimeSlot */
  venueId?: Maybe<Scalars['PositiveInt']['output']>;
};

export type TourItem = {
  __typename?: 'TourItem';
  admissionType: AdmissionType;
  admissionTypeId: Scalars['PositiveInt']['output'];
  appliedDiscounts: Array<AppliedDiscount>;
  attendeesCount: Scalars['NonNegativeInt']['output'];
  checkStatus: TourItemCheckStatus;
  checkedInCount: Scalars['NonNegativeInt']['output'];
  checkedOutCount: Scalars['NonNegativeInt']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
  passCode?: Maybe<Scalars['NonEmptyString']['output']>;
  price: Scalars['Float']['output'];
  priceBeforeDiscount: Scalars['NonNegativeFloat']['output'];
  priceVatExcluded: Scalars['Float']['output'];
  totalPassCodeChecksCount: Scalars['NonNegativeInt']['output'];
  tourTimeSlot: TourTimeSlot;
  tourTimeSlotId: Scalars['PositiveInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['PositiveInt']['output'];
  vat: Scalars['Float']['output'];
  vatRate: Scalars['NonNegativeFloat']['output'];
};

export enum TourItemCheckStatus {
  CheckedIn = 'checkedIn',
  CheckedOut = 'checkedOut',
  /** For tour items with multiple attendees (family tickets) */
  PartiallyChecked = 'partiallyChecked',
  Unchecked = 'unchecked'
}

export enum TourState {
  Active = 'active',
  Draft = 'draft',
  Inactive = 'inactive'
}

export type TourTimeSlot = {
  __typename?: 'TourTimeSlot';
  admissionRateId: Scalars['PositiveInt']['output'];
  ageClassificationCode?: Maybe<ShowAgeClassificationCode>;
  attendeesCheckedInCount: Scalars['NonNegativeInt']['output'];
  attendeesCheckedOutCount: Scalars['NonNegativeInt']['output'];
  clientId: Scalars['PositiveInt']['output'];
  costCenterId?: Maybe<Scalars['PositiveInt']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['PositiveInt']['output'];
  duration: Scalars['PositiveInt']['output'];
  eCommerceAttendeesLimit?: Maybe<Scalars['NonNegativeInt']['output']>;
  eCommerceOrderAttendeesLimit: Scalars['NonNegativeInt']['output'];
  eCommerceReservationEndsAt: Scalars['DateTime']['output'];
  eCommerceReservationExpirationExpiresAt: Scalars['DateTime']['output'];
  eCommerceReservationExpirationLastFor?: Maybe<Scalars['Int']['output']>;
  eCommerceReservationExpirationType: DivisionOnlineReservationEnd;
  eCommerceReservationStartsAt: Scalars['DateTime']['output'];
  eCommerceSaleEndsAt: Scalars['DateTime']['output'];
  eCommerceSaleStartsAt: Scalars['DateTime']['output'];
  endsAt: Scalars['DateTime']['output'];
  eventCategoryId?: Maybe<Scalars['PositiveInt']['output']>;
  gateClosesAt: Scalars['DateTime']['output'];
  gateOpensAt: Scalars['DateTime']['output'];
  guideId?: Maybe<Scalars['PositiveInt']['output']>;
  id: Scalars['PositiveInt']['output'];
  isECommerceReservationActive: Scalars['Boolean']['output'];
  isECommerceSaleActive: Scalars['Boolean']['output'];
  isRetailReservationActive: Scalars['Boolean']['output'];
  isRetailSaleActive: Scalars['Boolean']['output'];
  marketingLabelId?: Maybe<Scalars['PositiveInt']['output']>;
  names: Translated;
  passCodesCheckedInCount: Scalars['NonNegativeInt']['output'];
  passCodesCheckedOutCount: Scalars['NonNegativeInt']['output'];
  retailAttendeesLimit?: Maybe<Scalars['NonNegativeInt']['output']>;
  retailReservationEndsAt: Scalars['DateTime']['output'];
  retailReservationExpirationExpiresAt: Scalars['DateTime']['output'];
  retailReservationExpirationLastFor?: Maybe<Scalars['Int']['output']>;
  retailReservationExpirationType: DivisionPosReservationEnd;
  retailReservationStartsAt: Scalars['DateTime']['output'];
  retailSaleEndsAt: Scalars['DateTime']['output'];
  retailSaleStartsAt: Scalars['DateTime']['output'];
  showOnWebsiteAndApi: Scalars['Boolean']['output'];
  startsAt: Scalars['DateTime']['output'];
  state: TourTimeSlotState;
  ticketNote?: Maybe<Scalars['String']['output']>;
  ticketValidityType: TicketValidityType;
  ticketValidityValue?: Maybe<Scalars['PositiveInt']['output']>;
  tourId: Scalars['PositiveInt']['output'];
  uniqueCheckedInCount: Scalars['NonNegativeInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['PositiveInt']['output'];
  /** Only for apiGrants with granted resource(s): *venues* */
  venue: Venue;
  venueId: Scalars['PositiveInt']['output'];
  versionCode?: Maybe<ShowVersionCode>;
};

export enum TourTimeSlotState {
  Cancelled = 'cancelled',
  Draft = 'draft',
  Published = 'published'
}

export type Translated = {
  __typename?: 'Translated';
  cs?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  hu?: Maybe<Scalars['String']['output']>;
  sk?: Maybe<Scalars['String']['output']>;
};

export enum VatRegistered {
  Full = 'full',
  None = 'none',
  Part = 'part'
}

export type Venue = {
  __typename?: 'Venue';
  address: Address;
  clientId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  name: Scalars['String']['output'];
  secondaryName?: Maybe<Scalars['String']['output']>;
};

export type EventQueryVariables = Exact<{
  eventId: Scalars['PositiveInt']['input'];
  type: ShowImageType;
}>;


export type EventQuery = { __typename?: 'Query', event: { __typename?: 'Event', ageClassificationCode?: ShowAgeClassificationCode | null, endsAt: any, duration: any, ecommerceEventURL: string, formatCode?: ShowFormatCode | null, gateOpensAt: any, gateClosedAt: any, id: any, organizerNote: string, soundMixCode?: ShowSoundMixCode | null, startsAt: any, state: EventState, versionCode?: ShowVersionCode | null, auditorium: { __typename?: 'Auditorium', id: any, name: string }, client: { __typename?: 'Client', id: any, name: any }, division: { __typename?: 'Division', id: any, name: any, email?: any | null, phoneNumber?: any | null }, names: { __typename?: 'Translated', cs?: string | null, en?: string | null, hu?: string | null, sk?: string | null }, show: { __typename?: 'Show', id: any, languageCodes: Array<LanguageCode>, images: Array<{ __typename?: 'ShowImage', id: number, key: string, height?: number | null, url: string, width?: number | null }>, primaryImage?: { __typename?: 'ShowImage', id: number, key: string, height?: number | null, width?: number | null, url: string } | null, translations: Array<{ __typename?: 'ShowTranslation', tagline?: string | null, localeCode: LocaleCode, description?: string | null }> }, venue: { __typename?: 'Venue', id: any, name: string, secondaryName?: string | null, address: { __typename?: 'Address', complex: string, country: string, postalCode: string, street: string, town: string } } } };

export type EventsQueryQueryVariables = Exact<{
  filter?: InputMaybe<EventsFilter>;
  type: ShowImageType;
}>;


export type EventsQueryQuery = { __typename?: 'Query', events: { __typename?: 'PaginatedEvents', items: Array<{ __typename?: 'Event', id: any, startsAt: any, state: EventState, show: { __typename?: 'Show', id: any, translations: Array<{ __typename?: 'ShowTranslation', tagline?: string | null, localeCode: LocaleCode }>, primaryImage?: { __typename?: 'ShowImage', url: string, width?: number | null, height?: number | null, key: string, id: number } | null }, names: { __typename?: 'Translated', cs?: string | null, en?: string | null, sk?: string | null, hu?: string | null }, venue: { __typename?: 'Venue', id: any, name: string } }> } };
