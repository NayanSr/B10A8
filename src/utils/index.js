// import { toast } from "react-toastify";

/* 
  const getStoredReadList = () => {
      // read-list
      const storedListStr = localStorage.getItem('read-list');
      if (storedListStr) {
          const storedList = JSON.parse(storedListStr);
          return storedList;
      }
      else {
          return [];
      }
  } 
*/

const getFromLs = (dataKey) => {
  const storedCollectionStringify = localStorage.getItem(dataKey);
  if (storedCollectionStringify) {
    const storedCollection = JSON.parse(storedCollectionStringify);
    return storedCollection;
  } else {
    return [];
  }
};

/* 
    const addToStoredReadList = (id) => {
        const storedList = getStoredReadList();
        if (storedList.includes(id)) {
            // already exists. do not add it
            console.log(id, 'already exists in the read list')
        }
        else {
            storedList.push(id);
            const storedListStr = JSON.stringify(storedList);
            localStorage.setItem('read-list', storedListStr);
            // ideally trigger toast from the component
            toast('This book is added to your read list.')
        }
    }
 */

const addToLs = (id, dataKey) => {
  const storedDataInLs = getFromLs(dataKey);
  if (storedDataInLs.includes(id)) {
    alert("This Item Already Added");
  } else {
    storedDataInLs.push(id);
    const storedDataInLsStringify = JSON.stringify(storedDataInLs);
    localStorage.setItem(dataKey, storedDataInLsStringify);
    alert("Added product successfully");
  }
};


const removeFromLs= (id, dataKey)=>{
  const storedDataInLs = getFromLs(dataKey);
  const restItem= storedDataInLs.filter(dt=>dt!==id);
  const restItemInStringify= JSON.stringify(restItem);
  localStorage.setItem(dataKey,restItemInStringify)

}







// export { addToStoredReadList, addToStoredWishList, getStoredReadList }
export { getFromLs, addToLs, removeFromLs };
