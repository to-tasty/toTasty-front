export enum DrinkType {
  coffee = 'COFFEE',
  whisky = 'WHISKY',
  wine = 'WINE',
  end = 'END',
}

export interface LocationInfo {
  sido: string;
  address: string;
  detail: string;
}

export interface TastingInfo {
  drinkId?: number;
  drinkName?: string;
  drinkTaste?: string;
  drinkFlavor?: string;
  drinkColor?: string;
  drinkImgUrl?: string;
  drinkType?: DrinkType;
}
