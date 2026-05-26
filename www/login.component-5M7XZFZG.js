import {
  AuthService,
  CommonModule,
  Component,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
  IonTitle,
  IonToolbar,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  Validators,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/pages/login/login.component.ts
var _c0 = () => ["/registro"];
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "ion-text", 16)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.errorMessage = "";
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          this.router.navigate(["/home"]);
        },
        error: (err) => {
          this.errorMessage = "Usu\xE1rio ou senha inv\xE1lidos";
        }
      });
    }
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 30, vars: 7, consts: [[3, "translucent"], ["color", "primary"], [1, "ion-padding", 3, "fullscreen"], [1, "login-container"], [1, "header-section", "ion-text-center", "ion-margin-bottom"], [3, "ngSubmit", "formGroup"], ["lines", "full"], ["position", "stacked"], ["type", "text", "formControlName", "username", "placeholder", "Seu nome de usu\xE1rio"], ["type", "password", "formControlName", "password", "placeholder", "Sua senha"], ["class", "ion-padding-top ion-text-center", 4, "ngIf"], [1, "ion-padding-top"], ["expand", "block", "type", "submit", 3, "disabled"], [1, "ion-margin-top", "ion-text-center"], [3, "routerLink"], [1, "ion-padding-top", "ion-text-center"], ["color", "danger"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title");
    \u0275\u0275text(3, "Entrar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 2)(5, "div", 3)(6, "div", 4)(7, "h2");
    \u0275\u0275text(8, "Bem-vindo de volta!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Entre na sua conta para continuar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "form", 5);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(12, "ion-list", 6)(13, "ion-item")(14, "ion-label", 7);
    \u0275\u0275text(15, "Usu\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "ion-input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-item")(18, "ion-label", 7);
    \u0275\u0275text(19, "Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "ion-input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, LoginComponent_div_21_Template, 4, 1, "div", 10);
    \u0275\u0275elementStart(22, "div", 11)(23, "ion-button", 12);
    \u0275\u0275text(24, " Acessar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 13)(26, "p");
    \u0275\u0275text(27, "N\xE3o tem uma conta? ");
    \u0275\u0275elementStart(28, "a", 14);
    \u0275\u0275text(29, "Cadastre-se");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.loginForm.valid);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
  }
}, dependencies: [
  CommonModule,
  NgIf,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  RouterModule,
  RouterLink,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonText
], encapsulation: 2 });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonInput,
      IonButton,
      IonLabel,
      IonText,
      IonNote
    ], template: `<ion-header [translucent]="true">
  <ion-toolbar color="primary">
    <ion-title>Entrar</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true" class="ion-padding">
  <div class="login-container">
    <div class="header-section ion-text-center ion-margin-bottom">
      <h2>Bem-vindo de volta!</h2>
      <p>Entre na sua conta para continuar</p>
    </div>

    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <ion-list lines="full">
        <ion-item>
          <ion-label position="stacked">Usu\xE1rio</ion-label>
          <ion-input type="text" formControlName="username" placeholder="Seu nome de usu\xE1rio"></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label position="stacked">Senha</ion-label>
          <ion-input type="password" formControlName="password" placeholder="Sua senha"></ion-input>
        </ion-item>
      </ion-list>

      <div *ngIf="errorMessage" class="ion-padding-top ion-text-center">
        <ion-text color="danger">
          <p>{{ errorMessage }}</p>
        </ion-text>
      </div>

      <div class="ion-padding-top">
        <ion-button expand="block" type="submit" [disabled]="!loginForm.valid">
          Acessar
        </ion-button>
      </div>
    </form>

    <div class="ion-margin-top ion-text-center">
      <p>N\xE3o tem uma conta? <a [routerLink]="['/registro']">Cadastre-se</a></p>
    </div>
  </div>
</ion-content>
` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 43 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-5M7XZFZG.js.map
