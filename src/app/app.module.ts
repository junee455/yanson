import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HttpRequest, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MessengerComponent } from './messenger/messenger.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConvsComponent } from './messenger/convs/convs.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordRestoreComponent } from './password-restore/password-restore.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
// import * as $ from 'jquery';


@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        WelcomeComponent,
        SignUpComponent,
        UserComponent,
        PostEditorComponent,
        ColorPickerComponent,
        CustomizerComponent,
        UserMenuComponent,
        MessengerComponent,
        ToolbarComponent,
        ConvsComponent,
        PasswordRestoreComponent,
        MenuComponent,
        HeaderComponent
        // $
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
