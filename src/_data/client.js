module.exports = {
    name: "Westward Web Designs",
    email: "Zackery@westwardwebdesigns.com",
    phoneForTel: "682-812-5211",
    phoneFormatted: "(682) 812-5211",
    address: {
        lineOne: "8500 Harwood Rd APT6225",
        city: "Norht Richland Hills",
        state: "TX",
        zip: "76180",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
