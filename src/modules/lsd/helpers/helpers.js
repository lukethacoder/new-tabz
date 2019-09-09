export const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
};
export const getActiveTab = browser => {
    browser.tabs.query({ currentWindow: true, active: true });
};
export const showCookiesForTab = (browser, tabs) => {
    //get the first tab object in the array
    let tab = tabs.pop();
    const rawCookies = [];

    //get all cookies in the domain
    var gettingAllCookies = browser.cookies.getAll({ url: tab.url });
    gettingAllCookies.then(cookies => {
        //set the header of the panel
        console.log('cookie => ', cookie);

        rawCookies.push(cookie);
        if (cookies.length > 0) {
            //add an <li> item with the name and value of the cookie to the list
            for (let cookie of cookies) {
                console.log('Name: ', cookie.name + ' Value:' + cookie.value);
            }
        } else {
            console.log("no cookies :'(");
        }
    });
    return rawCookies;
};
