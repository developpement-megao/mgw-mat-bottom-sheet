/** Type de lien à mettre en place :
 * * mailto = envoi de mail
 * * tel = appel téléphonique
 * * fax = envoi de fax
 * * sms = envoi de sms
 * * callto = lien vers un compte Skype
 * * ts3server = lien vers serveur TeamSpeak 3
 * * si non défini (undefined) c'est un lien html classique (http ou https) on n'ajoutera pas de préfixe
 */
export type LinkType = 'mailto' | 'tel' | 'fax' | 'sms' | 'callto' | 'ts3server' | undefined;

export interface LinkList {
  link: string;
  /** Type de lien à mettre en place :
   * * mailto = envoi de mail
   * * tel = appel téléphonique
   * * fax = envoi de fax
   * * sms = envoi de sms
   * * callto = lien vers un compte Skype
   * * ts3server = lien vers serveur TeamSpeak 3
   * * si non défini (undefined) c'est un lien html classique (http ou https) on n'ajoutera pas de préfixe
   */
  linkType?: LinkType;
  label: string;
  icone?: string;
  subtitle?: string;
}
