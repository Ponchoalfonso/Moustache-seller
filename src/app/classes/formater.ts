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

  static stringToDate(sdate: string): Date {
    const dateValues = sdate.split('-');
    const date = new Date(+dateValues[0], +dateValues[1] - 1, +dateValues[2]);

    return date;
  }

  static formatTime(date: Date): string {
    return Formater.pad(date.getHours(), 2) + ':' + Formater.pad(date.getMinutes(), 2);
  }

  static maxLength(value: string, max: number): string {
    if (value.length >= max) {
      return value.substr(0, max) + '...';
    } else {
      return value;
    }
  }

}
