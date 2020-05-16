export const updateObjectInArray = (arr, actionItemId, objPropName, newObjProp) => {
   return arr.map((item) => {
        if (item[objPropName] === actionItemId) {
            return {...item, ...newObjProp,}
        }
        return item
    })
};