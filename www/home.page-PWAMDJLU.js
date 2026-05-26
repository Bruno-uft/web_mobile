import {
  AuthService,
  Component,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-INMBE6L7.js";
import "./chunk-6N3PHHCR.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-H4VVC3ZL.js";
import "./chunk-6DO6SUII.js";
import "./chunk-LOUP2D3R.js";
import "./chunk-ZLPNFRTE.js";
import "./chunk-6GY55RSK.js";
import "./chunk-7D2IXJO2.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-LE25MNGD.js";
import "./chunk-6F64OIHP.js";
import "./chunk-YAS4LRVC.js";
import "./chunk-WDMUDEB6.js";

// src/app/home/home.page.ts
var _HomePage = class _HomePage {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], decls: 13, vars: 2, consts: [[3, "translucent"], ["color", "primary"], ["slot", "end"], [3, "click"], [3, "fullscreen"], [1, "ion-padding"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title");
    \u0275\u0275text(3, " Home ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 2)(5, "ion-button", 3);
    \u0275\u0275listener("click", function HomePage_Template_ion_button_click_5_listener() {
      return ctx.logout();
    });
    \u0275\u0275text(6, " Sair ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content", 4)(8, "div", 5)(9, "h1");
    \u0275\u0275text(10, "Ol\xE1!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Voc\xEA est\xE1 logado no sistema.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("fullscreen", true);
  }
}, dependencies: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons], styles: ["\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=home.page.css.map */"] });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home", imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons], template: '<ion-header [translucent]="true">\n  <ion-toolbar color="primary">\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons slot="end">\n      <ion-button (click)="logout()">\n        Sair\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]="true">\n  <div class="ion-padding">\n    <h1>Ol\xE1!</h1>\n    <p>Voc\xEA est\xE1 logado no sistema.</p>\n  </div>\n</ion-content>\n', styles: ["/* src/app/home/home.page.scss */\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=home.page.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/home/home.page.ts", lineNumber: 12 });
})();
export {
  HomePage
};
//# sourceMappingURL=home.page-PWAMDJLU.js.map
