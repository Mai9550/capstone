import {handleSubmit} from './formHandler';

describe('Test, the function "handleSubmit()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});