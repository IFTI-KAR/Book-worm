const getStoredBook = () => {
    
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }

}

const addToStoredDB = (id) => {
    
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        console.log("hello")
        alert("bhai ei id already exist ")
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)

    }

}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem("wishList");
    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    }
    return [];
};

const addToWishListDB = (id) => {
    const storedWishList = getStoredWishList();

    if (storedWishList.includes(id)) {
        alert("This book is already in your Wish List!");
    } else {
        storedWishList.push(id);
        localStorage.setItem("wishList", JSON.stringify(storedWishList));
    }
};

export { addToStoredDB, getStoredBook, addToWishListDB, getStoredWishList };