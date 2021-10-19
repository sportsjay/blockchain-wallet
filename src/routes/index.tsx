import React, { ComponentType, ReactNode } from "react";

/**
 * Import screens
 */
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";

export interface RouteProperties {
  id: number;
  name: string;
  component: ComponentType;
}

export const routes: RouteProperties[] = [
  {
    id: 0,
    name: "home",
    component: HomeScreen,
  },
  {
    id: 1,
    name: "profile",
    component: ProfileScreen,
  },
];
