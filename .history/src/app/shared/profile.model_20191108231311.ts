import { ViolationType } from './violationtype.model';
import { HuntingSession } from './huntingsession.model';

export class Profile {
    FirstName: string;
    LastName: string;
    email: string;
    tele: string;
    Liscence: number;
    Password: string;
    ProPhoto: File;
    TotGamBirSho: number;
    TotProBirSho: number;
    ViolationType : ViolationType;
    HuntingSession: HuntingSession;
}
