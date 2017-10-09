export const setStore = (name, content) => {
    if(!name) {
        return ;
    }
    if(typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

export const getStore = (name) => {
    if(!name) {
        return ;
    }
    let parseValue,
        value = window.localStorage.getItem(name);
    try {
        parseValue = JSON.parse(value);
    } catch (error) {
        parseValue = value;
    }
    return parseValue;
}

export const removeStore = (name) => {
    if(!name) {
        window.localStorage.clear();
        return ;
    }
    window.localStorage.removeItem(name);
}