import header from "./header.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

document.getElementById("header").innerHTML = header;
document.getElementById("content").innerHTML = home;

document.getElementById("home").onclick = function() {
  document.getElementById("content").innerHTML = home;
};
document.getElementById("menu").onclick = function() {
  document.getElementById("content").innerHTML = menu;
};
document.getElementById("contact").onclick = function() {
  document.getElementById("content").innerHTML = contact;
};
