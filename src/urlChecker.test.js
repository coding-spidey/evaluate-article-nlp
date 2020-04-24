import { isValidUrl } from './client/js/urlChecker'
let bool  = isValidUrl('https://www.udacity.com');
test('testing the name checker function', ()=>{
    expect(bool).toBe(true);
})