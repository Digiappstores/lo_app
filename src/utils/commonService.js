export const afterValidate = (callBack, setSnakeBarProps) => {
    var errorMszDom = [];
    setTimeout(() => {
        errorMszDom = document.getElementsByClassName("errorDom");
        if (errorMszDom.length == 0) {
            callBack()
        } else {
            setSnakeBarProps({ snackbarFlag: true, msz: "Please fill all the required field", type: "error" })
        }
    });
}


export const setInput = (value, type, pageData, setPageData) => {
    setPageData({ ...pageData, [type]: value })
}
