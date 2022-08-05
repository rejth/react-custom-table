export default class TableDataService {
  public getData(): Promise<any[]> {
    const data = [
      {
        id: 1,
        title: 'React',
        href: 'https://ru.reactjs.org/',
      },
      {
        id: 2,
        title: 'React TypeScript Cheatsheet',
        href: 'https://react-typescript-cheatsheet.netlify.app/',
      },
    ];

    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 700);
    });
  }
}
