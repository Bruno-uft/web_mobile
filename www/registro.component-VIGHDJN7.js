import {
  AuthService,
  CommonModule,
  Component,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IonBackButton,
  IonButton,
  IonButtons,
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

// src/app/pages/registro/registro.component.ts
var _c0 = () => ["/login"];
function RegistroComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "ion-text", 22)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function RegistroComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "ion-text", 22)(2, "p");
    \u0275\u0275text(3, "As senhas n\xE3o coincidem.");
    \u0275\u0275elementEnd()()();
  }
}
var _RegistroComponent = class _RegistroComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.errorMessage = "";
    this.registroForm = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirm_password: ["", [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }
  ngOnInit() {
  }
  passwordMatchValidator(g) {
    return g.get("password")?.value === g.get("confirm_password")?.value ? null : { "mismatch": true };
  }
  onSubmit() {
    if (this.registroForm.valid) {
      this.authService.registro(this.registroForm.value).subscribe({
        next: (res) => {
          this.router.navigate(["/home"]);
        },
        error: (err) => {
          this.errorMessage = "Erro ao realizar cadastro. Tente outro nome de usu\xE1rio.";
        }
      });
    }
  }
};
_RegistroComponent.\u0275fac = function RegistroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegistroComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_RegistroComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistroComponent, selectors: [["app-registro"]], decls: 49, vars: 8, consts: [[3, "translucent"], ["color", "primary"], ["slot", "start"], ["defaultHref", "/login"], [1, "ion-padding", 3, "fullscreen"], [1, "registro-container"], [1, "header-section", "ion-text-center", "ion-margin-bottom"], [3, "ngSubmit", "formGroup"], ["lines", "full"], ["position", "stacked"], ["type", "text", "formControlName", "username", "placeholder", "Nome de usu\xE1rio \xFAnico"], ["type", "email", "formControlName", "email", "placeholder", "seu@email.com"], ["type", "text", "formControlName", "first_name", "placeholder", "Seu primeiro nome"], ["type", "text", "formControlName", "last_name", "placeholder", "Seu sobrenome"], ["type", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres"], ["type", "password", "formControlName", "confirm_password", "placeholder", "Repita a senha"], ["class", "ion-padding-top ion-text-center", 4, "ngIf"], [1, "ion-padding-top"], ["expand", "block", "type", "submit", "color", "success", 3, "disabled"], [1, "ion-margin-top", "ion-text-center"], [3, "routerLink"], [1, "ion-padding-top", "ion-text-center"], ["color", "danger"]], template: function RegistroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
    \u0275\u0275element(3, "ion-back-button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5, "Cadastrar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-content", 4)(7, "div", 5)(8, "div", 6)(9, "h2");
    \u0275\u0275text(10, "Crie sua conta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Preencha os dados abaixo para come\xE7ar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "form", 7);
    \u0275\u0275listener("ngSubmit", function RegistroComponent_Template_form_ngSubmit_13_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(14, "ion-list", 8)(15, "ion-item")(16, "ion-label", 9);
    \u0275\u0275text(17, "Usu\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "ion-input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ion-item")(20, "ion-label", 9);
    \u0275\u0275text(21, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "ion-input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ion-item")(24, "ion-label", 9);
    \u0275\u0275text(25, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "ion-input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ion-item")(28, "ion-label", 9);
    \u0275\u0275text(29, "Sobrenome");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "ion-input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ion-item")(32, "ion-label", 9);
    \u0275\u0275text(33, "Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "ion-input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ion-item")(36, "ion-label", 9);
    \u0275\u0275text(37, "Confirmar Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "ion-input", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, RegistroComponent_div_39_Template, 4, 1, "div", 16)(40, RegistroComponent_div_40_Template, 4, 0, "div", 16);
    \u0275\u0275elementStart(41, "div", 17)(42, "ion-button", 18);
    \u0275\u0275text(43, " Registrar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 19)(45, "p");
    \u0275\u0275text(46, "J\xE1 tem uma conta? ");
    \u0275\u0275elementStart(47, "a", 20);
    \u0275\u0275text(48, "Fa\xE7a login");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx.registroForm);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.registroForm.hasError("mismatch") && ((tmp_4_0 = ctx.registroForm.get("confirm_password")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.registroForm.valid);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
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
  IonText,
  IonButtons,
  IonBackButton
], encapsulation: 2 });
var RegistroComponent = _RegistroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistroComponent, [{
    type: Component,
    args: [{ selector: "app-registro", standalone: true, imports: [
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
      IonNote,
      IonButtons,
      IonBackButton
    ], template: `<ion-header [translucent]="true">
  <ion-toolbar color="primary">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/login"></ion-back-button>
    </ion-buttons>
    <ion-title>Cadastrar</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true" class="ion-padding">
  <div class="registro-container">
    <div class="header-section ion-text-center ion-margin-bottom">
      <h2>Crie sua conta</h2>
      <p>Preencha os dados abaixo para come\xE7ar</p>
    </div>

    <form [formGroup]="registroForm" (ngSubmit)="onSubmit()">
      <ion-list lines="full">
        <ion-item>
          <ion-label position="stacked">Usu\xE1rio</ion-label>
          <ion-input type="text" formControlName="username" placeholder="Nome de usu\xE1rio \xFAnico"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">E-mail</ion-label>
          <ion-input type="email" formControlName="email" placeholder="seu@email.com"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Nome</ion-label>
          <ion-input type="text" formControlName="first_name" placeholder="Seu primeiro nome"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Sobrenome</ion-label>
          <ion-input type="text" formControlName="last_name" placeholder="Seu sobrenome"></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label position="stacked">Senha</ion-label>
          <ion-input type="password" formControlName="password" placeholder="M\xEDnimo 6 caracteres"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Confirmar Senha</ion-label>
          <ion-input type="password" formControlName="confirm_password" placeholder="Repita a senha"></ion-input>
        </ion-item>
      </ion-list>

      <div *ngIf="errorMessage" class="ion-padding-top ion-text-center">
        <ion-text color="danger">
          <p>{{ errorMessage }}</p>
        </ion-text>
      </div>

      <div *ngIf="registroForm.hasError('mismatch') && registroForm.get('confirm_password')?.touched" class="ion-padding-top ion-text-center">
        <ion-text color="danger">
          <p>As senhas n\xE3o coincidem.</p>
        </ion-text>
      </div>

      <div class="ion-padding-top">
        <ion-button expand="block" type="submit" [disabled]="!registroForm.valid" color="success">
          Registrar
        </ion-button>
      </div>
    </form>

    <div class="ion-margin-top ion-text-center">
      <p>J\xE1 tem uma conta? <a [routerLink]="['/login']">Fa\xE7a login</a></p>
    </div>
  </div>
</ion-content>
` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistroComponent, { className: "RegistroComponent", filePath: "src/app/pages/registro/registro.component.ts", lineNumber: 47 });
})();
export {
  RegistroComponent
};
//# sourceMappingURL=registro.component-VIGHDJN7.js.map
