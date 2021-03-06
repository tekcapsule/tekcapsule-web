import { Component, OnInit } from '@angular/core';

import { ChannelEvent, EventChannelService } from '@app/core';

@Component({
  selector: 'app-admin-create-questions',
  templateUrl: './admin-create-questions.component.html',
  styleUrls: ['./admin-create-questions.component.scss'],
})
export class AdminCreateQuestionsComponent implements OnInit {
  constructor(private eventChannel: EventChannelService) {}

  ngOnInit(): void {}

  activateFirstNavTab(): void {
    this.eventChannel.publish({ event: ChannelEvent.SetActiveAdminTab });
  }
}
