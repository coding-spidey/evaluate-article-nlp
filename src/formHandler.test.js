import { stringify } from './client/js/formHandler'
test('Testing the stringify function', ()=>{
    const string = 'abc';
    const result = stringify({string})
    expect(result).toBe("{\"string\":\"abc\"}");
})