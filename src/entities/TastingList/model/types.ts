interface TastingInfo {
  drinkId: number;
  drinkName: string;
  drinkTaste?: string; // 음료 맛
  drinkFlavor?: string; // 음료 향
  drinkColor?: string; // 음료 색
  dringImgUrl?: string;
}

export default interface TastingList {
  tastingList: TastingInfo[];
}
