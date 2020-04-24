import "babel-polyfill"
const server = './server/index'
test('testing if the api object is storing something', ()=>{
    expect(server).not.toBeNull();
})