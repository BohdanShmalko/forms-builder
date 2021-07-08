import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';

export type SharedComponentsType =
  typeof PageNotFoundComponent |
  typeof NavbarComponent |
  typeof CustomInputComponent;
export const components : SharedComponentsType[] = [
  PageNotFoundComponent,
  NavbarComponent,
  CustomInputComponent
];

export * from './navbar/navbar.component';
export * from './page-not-found/page-not-found.component';
export * from '@shared/components/custom-input/custom-input.component';
