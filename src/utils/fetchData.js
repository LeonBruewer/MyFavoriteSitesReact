export default function fetchSiteList(searchTerm, filter) {

    return new Promise((resolve, reject) => {
        chayns.showWaitCursor();
        let baseUrl = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=';
        let fullUrl = baseUrl + searchTerm + filter;
            fetch(fullUrl)
            .then( (response) => {
                return response.json();
            }).then( (json) => {
                resolve(json.Data);

                chayns.hideWaitCursor();
            }).catch( (ex) => {
                reject(ex);
            })
    });
}
