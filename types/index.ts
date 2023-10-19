import { ImageProps } from "react-native";

export type StackParamList = {
  Home: undefined;
  Second: undefined;
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
