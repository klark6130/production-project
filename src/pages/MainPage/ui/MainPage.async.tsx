import { lazy } from "react";

export const MainPageAsync = lazy(async () => {
  await new Promise(res => setTimeout(res, 2000))
  return import('./MainPage')
});