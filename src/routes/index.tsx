import React, { ComponentType, ReactNode } from "react";

/**
 * Import screens
 */
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import TransactionHistoryScreen from "../screens/transactionHistory";

export interface RouteProperties<T> {
  id: number;
  name: string;
  iconName: string;
  component: ComponentType<T>;
}

export const routes: RouteProperties<any>[] = [
  {
    id: 0,
    name: "home",
    component: HomeScreen,
    iconName: "home",
  },
  {
    id: 1,
    name: "history",
    component: TransactionHistoryScreen,
    iconName: "payment",
  },
  {
    id: 2,
    name: "profile",
    component: ProfileScreen,
    iconName: "person",
  },
];
