function generateRandomData() {
    const data = [];

    for (let i = 0; i < 12; i++) {
        data.push(Math.floor(Math.random() * 100));
    }

    return data;
}

export { generateRandomData }