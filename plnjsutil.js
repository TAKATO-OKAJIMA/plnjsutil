/**
 * 
 * @param {HTMLElement} element 
 */
const removeAllChildNodes = (element) => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


/**
 * 
 * @param {Array} array 
 * @param {Number} number 
 * @returns {Array<Array>}
 */
const sliceByNumber = (array, number) => {
    const length = array.length;

    const slicedArray = new Array(length)
                                 .fill()
                                 .map((_, i) => 
                                    array.slice(i * number, (i + 1) * number)
                                 );

    return slicedArray;
}


/**
 * 
 * @param {Array} array 
 */
const shuffleArray = (array) => {
    for(let index = array.length - 1; index > 0; index--) {
        const target = Math.floor(Math.random() * (index + 1));
        [array[index], array[target]] = [array[target], array[index]];
    }
}


/**
 * 
 * @param {Array} array
 * @returns {any} dictionary  
 */
const countArrayElements = (array) => {
    const mostCommons = array.reduce(
        (prev, curr) => ({
            ...prev,
            [curr]: 1 + (prev[curr] || 0),
        }),
        {}
    );

    return mostCommons;
}


/**
 * 
 * @param {string} url 
 * @param {string} concat 
 * @returns 
 */
const concatAndResolveUrl = (url, concat) => {
    let url1 = url.split('/');
    let url2 = concat.split('/');
    let url3 = [ ];

    for (let i = 0, l = url1.length; i < l; i ++) {
        if (url1[i] == '..') {
            url3.pop();
        } else if (url1[i] == '.') {
            continue;
        } else {
            url3.push(url1[i]);
        }
    }

    for (let j = 0, l = url2.length; j < l; j ++) {
        if (url2[j] == '..') {
            url3.pop();
        } else if (url2[j] == '.') {
            continue;
        } else {
            url3.push(url2[j]);
        }
    }
    
    return url3.join('/');
}


/**
 * 
 * @param {string} path 
 * @returns {any | Array<any>} jsonData
 */
const fetchJson = async (path) => {
    const response = await fetch(path)
                                .catch(err => {
                                    console.error(err);
                                });
    const jsonData = await response.json();

    return jsonData;
}