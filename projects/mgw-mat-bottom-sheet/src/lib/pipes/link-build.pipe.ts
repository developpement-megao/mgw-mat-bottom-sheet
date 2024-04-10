import { Pipe, PipeTransform } from '@angular/core';

import { LinkType } from '../models/link-list';

@Pipe({
  name: 'linkBuild',
  standalone: true
})
export class LinkBuildPipe implements PipeTransform {
  transform(value: string, linkType: LinkType): string {
    if (linkType) {
      // on a bien un link type on ajoute le link type au début du lien (suivi de :)
      return `${linkType}:${value}`;
    }
    return value;
  }
}
