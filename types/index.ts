import { ImageProps } from "react-native";

export type StackParamList = {
  Home: undefined;
  Product: CofeeItemProps;
};

export interface CofeeItemProps {
  id: number;
  name: string;
  price: string;
  volume: string;
  stars: string;
  image: ImageProps;
  desc: string;
}

export type TabParamList = {
  First: undefined;
  Second: undefined;
  Third: undefined;
};
