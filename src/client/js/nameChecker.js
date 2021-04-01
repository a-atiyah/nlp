function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const regurl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
    if (inputText !== null && regurl.test(inputText)) {
        return true;
    } else {
        console.log('URL Not Correct!')
        return false;
    }
}

export { checkForName }