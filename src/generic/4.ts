/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Any {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Any> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
