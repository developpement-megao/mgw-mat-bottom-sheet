import { Component, Inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { LinkList } from './models/link-list';

import { LinkBuildPipe } from './pipes/link-build.pipe';

export interface MgwMatBottomSheetData {
  linkList: ReadonlyArray<LinkList>;
  eventPreventExec?: boolean;
}

export interface MgwMatBottomSheetResult {
  item: LinkList;
  link: string;
  index: number;
}

@Component({
  selector: 'lib-mgw-mat-bottom-sheet',
  standalone: true,
  templateUrl: './mgw-mat-bottom-sheet.component.html',
  styleUrls: ['./mgw-mat-bottom-sheet.component.scss'],
  imports: [MatListModule, NgFor, NgIf, LinkBuildPipe, MatIconModule]
})
export class MgwMatBottomSheetComponent {
  constructor(
    private readonly bottomSheetRef: MatBottomSheetRef<MgwMatBottomSheetComponent, MgwMatBottomSheetResult>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: MgwMatBottomSheetData | null | undefined
  ) {}

  trackByLinkFn(index: number, item: LinkList): string | number {
    return item.link || index;
  }

  declencheClicResult(item: LinkList, link: string, index: number): void {
    this.bottomSheetRef.dismiss({ item, link, index });
  }

  /**
   * Sur clic sur un des liens du bottom sheet ferme le bottom sheet et renvoi l'élément sur lequel on a cliqué (retour de type MgwMatBottomSheetResult)
   * @param evt UIEvent (PointerEvent (MouseEvent) ou TouchEvent ou KeyboardEvent ou ...)
   * @param item Element sur lequel on a cliqué (de type LinkList)
   * @param link Lien sur lequel on a cliqué
   * @param index Index du lien sur lequel on a cliqué dans la liste
   */
  openLink(evt: UIEvent, item: LinkList, link: string, index: number): void {
    this.declencheClicResult(item, link, index);
    if (this.data?.eventPreventExec === true) {
      evt.preventDefault();
    }
  }
}
