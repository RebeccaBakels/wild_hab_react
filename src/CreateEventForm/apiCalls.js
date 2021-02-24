

export const submitForm = (event, formValues, setResponseMessage) => {
    console.log(formValues)
    fetch("https://wildhab-api-a.web.app/events", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
    })
        .then(result => result.json())
        .then(data => {
            data.statusCode < 300 ? setResponseMessage(data.message) : console.log('error')
        })
        .catch(error => console.log('error', error))
}
