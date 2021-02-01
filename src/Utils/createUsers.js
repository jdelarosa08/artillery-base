// A SAMPLE OF THAT YOU COULD BE IMPLEMENTED INTO YOUR LOAD TEST: CREATING USERS.
// THIS COULD BE CHANGED DEPEND OF THE PROJECT
const https = require("https");

const baseEmail = "";
const userQuantity = 100;

const profileInfo = {
    firstName: "John",
    lastName: "Doe",
    secondLastName: "Test",
    birthDate: "12-01-2000",
    neighborhood: "prueba",
    gender: "M",
    phone: "8091122333",
}

function emailBuilder(number) {
    return baseEmail + "+" + number + "@gmail.com";
}

function profileBuilder(payload, number) {
    const updatedPayload = Object.assign({}, profileInfo);
    updatedPayload.email = emailBuilder(number);
    return updatedPayload;
}

for (let counter = 1 ; counter <= userQuantity; counter++ ) {
    const profile = profileBuilder(profileInfo, counter);
    const parsedProfile = JSON.stringify(profile);
    const call = https.request({
        hostname: '[URL]',
        path: '[ENDPOINT]',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': parsedProfile.length,
        },
    }, (res) => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', (d) => {
            process.stdout.write(d)
        })
    });
    call.on('error', (error) => {
        console.error(error)
      })
    call.write(parsedProfile);
    call.end();
}