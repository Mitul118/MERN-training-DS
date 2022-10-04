import { MyencryptPipe } from './myencrypt.pipe';

describe('MyencryptPipe', () => {
  it('create an instance', () => {
    const pipe = new MyencryptPipe();
    expect(pipe).toBeTruthy();
  });
});
