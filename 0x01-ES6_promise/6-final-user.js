import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default  async function handleProfileSignup(firstName, lastName, filename){
    return Promise.all([ await signUpUser(firstName, lastName), 
         await uploadPhoto(filename)]).then((values) => {
            return [{ 
        

            }]

    })

}
