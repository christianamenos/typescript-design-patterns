import { helloWorld } from './helloworld';

describe('HelloWorld', () => {
    it('happy path', () => {
        expect(helloWorld()).toBe('Hello World');
    });
});
