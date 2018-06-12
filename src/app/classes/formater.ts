export class Formater {

  constructor() { }

  static dateFormat(date: Date): string {
    const months = [
      'Ene', 'Feb', 'Mar', 'Abr',
      'May', 'Jun', 'Jul', 'Ago',
      'Sep', 'Oct', 'Nov', 'Dic'
    ];
    const formatedDate = Formater.pad(date.getDate(), 2) + '/' + months[date.getMonth()] + '/'
      + date.getFullYear();

    return formatedDate;
  }

  static pad(num: number, size: number) {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }

    return s;
  }
}
