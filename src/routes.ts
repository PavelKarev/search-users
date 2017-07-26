import { Routes } from '@angular/router';
import { SearchUsersComponent } from './app/search-users/search-users.component';
import { UserComponent } from './app/user/user.component';


export const appRoutes: Routes = [
    { path: "search", component: SearchUsersComponent },
    { path: "search/:username", component: UserComponent },
    { path: "", redirectTo: "search", pathMatch: "full" }
]