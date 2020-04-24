const dotenv = require('dotenv');
dotenv.config();
test('testing if the api object is storing something', ()=>{
    expect(process.env.API_ID).not.toBeUndefined();
    expect(process.env.API_KEY).not.toBeUndefined();
})