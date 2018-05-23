import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationManager, Notification } from 'ngx-notification';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { not } from '@angular/compiler/src/output/output_ast';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    private notifications: Array<Notification>;
    constructor(private notificationManager: NotificationManager) {
        this.notifications = new Array();
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {}

    public push($event) {
        const notification = new Notification();
        notification.body =
            new Date().getTime().toString() + 'This is a test message!';
        const i = Math.floor(Math.random() * 5);
        switch (Math.floor(Math.random() * 5)) {
            case 0:
                this.notificationManager.generic(notification);
                break;
            case 1:
                this.notificationManager.error(notification);
                break;
            case 2:
                this.notificationManager.warning(notification);
                break;
            case 3:
                this.notificationManager.info(notification);
                break;
            case 4:
                this.notificationManager.hint(notification);
                break;
        }

        this.notifications.push(notification);
    }

    public remove($event) {
        if (this.notifications.length > 0) {
            this.notificationManager.hide(this.notifications[0]);
            this.notifications.splice(0, 1);
        }
    }
}
