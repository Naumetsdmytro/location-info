import { getItemFromStorage } from "../shared"

export const Main = () => {
  const user = getItemFromStorage('userData').user
  return (
     <div>
       <h1>Main</h1>
       <h3>Welcome {user.fullName}</h3>
     </div>
  )
}