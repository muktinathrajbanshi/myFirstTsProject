const getUsername = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const main_container = document.querySelector(".main_container") as HTMLElement;

// so lets define the contract of an object 
interface UserData {
    id : number;
    login : string;
    avatar_url : string;
    location : string;
    url : string;
}

// reusable function 
async function myCustomFetcher<T>(url : string, options? : RequestInit) : Promise<T> {

    const response = await fetch(url, options);
    
    if(!response.ok){
        throw new Error(
            ` Network response was not ok - status : ${response.status} `
            );
    }

    const data = await response.json();
    console.log(data);
    
    return data;

}

// let's display the card UI 
const showResultUI = (singleUser : UserData) => {

const { avatar_url, login, url } = singleUser;

main_container.insertAdjacentHTML(
    "beforeend",
    `
     <div class="card">
      <img src="${avatar_url}" alt="${login}" />
      <h3>${login}</h3>

      <div class="card-footer">
        <a href="${url}" target="_blank">GitHub Profile</a>
      </div>
    </div>
    
    `
)

};

function fetchUserData(url : string) {
    myCustomFetcher<UserData[]>(url, {}).then((userInfo) => {
        for(const singleUser of userInfo) {
            showResultUI(singleUser);
            console.log("login " + singleUser.login);
            
        }
    });
}

// default function call 
fetchUserData("https://api.github.com/users");

// let perform search fun 

formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchTerm = getUsername.value.toLowerCase();

    try {
        const url = "https://api.github.com/users";

        const allUserInfo =  await myCustomFetcher(url, {})

    } catch (error) {
        console.log(error);
        
    }

})