import { createSelector } from "@reduxjs/toolkit";
import { IRootAppState } from "../../../typings";

const selectHompage = (state: IRootAppState) => state.homePage;

export const makeSelectTopCars = createSelector(selectHompage, (homePage) => homePage.topCars);

