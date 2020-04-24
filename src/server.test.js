import "babel-polyfill"
import{ testServer } from './server/index'
const value = testServer();
test('testing if the api object is storing something', ()=>{
    expect(value).toMatch(/Server is working normally/);
})