const getUsername = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector(".form") as HTMLFormElement;
const main_container = document.querySelector(".main-container") as HTMLElement;

// so lets define the contract of an object 
interface UserData {
    id : number;
    login : string;
    avatar_url : string;
    location : string;
    url : string;
}

// reusable function 
function myCustomFetcher<T>(url : string, options? : RequestInit) : Promise<T> {
    
}

function fetchUserData(url : string) {
    myCustomFetcher(url, {});
}


// default function call 
fetchUserData("https://api.github.com/users");