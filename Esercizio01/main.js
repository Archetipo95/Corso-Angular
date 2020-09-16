"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_components_1 = require("./like.components");
var component = new like_components_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
