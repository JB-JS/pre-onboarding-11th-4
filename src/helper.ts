const EXPIRE_TIME = 60 * 2 * 1000;

export class CacheLocalStorage {
  get(key: string) {
    if (localStorage.getItem(key) !== null) {
      return JSON.parse(localStorage.getItem(key) || '{}');
    }
  }

  set(key: string, value: any[]) {
    return localStorage.setItem(
      key,
      JSON.stringify({ datas: [...value], expire: Date.now() + EXPIRE_TIME }),
    );
  }

  remove(key: string) {
    return localStorage.removeItem(key);
  }
}
