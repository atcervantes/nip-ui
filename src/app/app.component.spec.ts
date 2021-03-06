import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppSideBarComponent} from './app.sidebar.component';
import {AppEditorComponent} from './app.editor.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                AppTopBarComponent,
                AppSideBarComponent,
                AppEditorComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
