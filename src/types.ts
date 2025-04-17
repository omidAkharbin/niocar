export interface HeroDataItem {
  text1: string;
  text2: string;
}

export interface BackgroundProps {
  playStatepas: boolean;
  heroCountpas: number;
}

export interface HeroProps {
  setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
  setheroCount: React.Dispatch<React.SetStateAction<number>>;
  PlayState: boolean;
  heroCount: number;
  heroData: HeroDataItem;
}
