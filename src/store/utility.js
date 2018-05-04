const updateObject = (oldObject,newValues) => {

    return {
        ...oldObject,
        ...newValues,
    };

};

export {updateObject};