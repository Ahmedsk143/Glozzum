import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss'],
})
export class Section5Component implements OnInit {
  embeded: any;
  youtubeUrl = 'https://www.youtube.com/watch?v=sqljo295DkE';
  youtubeId = 'iHhcHTlGtRs';
  modalRef: BsModalRef;
  message: string;

  constructor(
    private embedService: EmbedVideoService,
    private modalService: BsModalService
  ) {
    this.embeded = this.embedService.embed(this.youtubeUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 460, height: 200 },
    });
  }
  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign(
        {},
        { class: 'gray modal-md' },
        {
          animated: true,
        }
      )
    );
  }
}
