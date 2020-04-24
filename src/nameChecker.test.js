import { checkForName } from './client/js/nameChecker'
let names  = checkForName();
test('testing the name checker function', ()=>{
    expect(names[0]).toMatch(/Picard/);
})