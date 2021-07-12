import { UserPageService } from './user-page.service';
import { AuthService } from './auth/auth.service';

export type ServiceType = typeof UserPageService | typeof AuthService;
export const services : ServiceType[] = [UserPageService, AuthService];

export * from './user-page.service';
export * from './auth/auth.service';


