import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export type SharedComponentsType = typeof PageNotFoundComponent | typeof NavbarComponent;
export const components : SharedComponentsType[] = [PageNotFoundComponent, NavbarComponent];

export * from './navbar/navbar.component';
export * from './page-not-found/page-not-found.component';
