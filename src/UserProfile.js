<link href="./output.css" rel="stylesheet"/>

export const UserProfile =(props)=>{

    return <div>     
              <h1 class="text-3xl font-bold ">Welcome,  {props.userName}!</h1>  
              <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                Save changes
              </button>            
          </div>
  }