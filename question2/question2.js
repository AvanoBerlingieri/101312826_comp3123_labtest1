// Question 2: Promises
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const success = {'message': 'promise resolved successfully'};
            resolve(success);
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            try {
                throw new Error('promise rejected');
            } catch (e) {
                reject(e);
                console.log(e);
            }
        }, 500)
    })
}

resolvedPromise().then(result => console.log(result)).catch(err => console.log(err));
rejectedPromise().then(result => console.log(result)).catch(err => console.log(err));