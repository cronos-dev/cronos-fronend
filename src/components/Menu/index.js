import React, { Component } from "react";
import Menu from "./Menu";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Menu: { screen: Menu },
}));
