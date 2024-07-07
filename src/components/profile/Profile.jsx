import { useEffect, useState } from "react"
import { account, databases } from "../../appwrite/appwriteConfig";
import { Navigate } from "react-router-dom";


function Profile() {
    const [userdetails,setuserdetails]=useState([]);
    const [comments,setcomments]=useState([]);
    useEffect(()=>{
        const getdata=account.get()
        getdata.then(
            function(response){
                setuserdetails(response);
                console.log(userdetails);
            },
            function(error)
            {
                console.log(error);
            }
        )
        const commentdata=databases.listDocuments("66895dfa002638cdcfed","66895e4b0011672dcfbb")
        commentdata.then(
            function(response){
                setcomments(response.documents);
                console.log(response);
            },
            function(error)
            {
                console.log(error);
            }

        )
    },[])
    const handlelogout=async()=>{
        try{
            await account.deleteSession("current")
            Navigate('/')
        }
        catch(error){
            console.log(error);
        }

    }

  return (
    <div>
        <h2>hlw Profile:{userdetails.name}</h2>
        <div>
            {
                comments.map((cmnts)=>(
                    <div>
                        <h1>comments:{cmnts.todo}</h1>
                        <h1>By:{cmnts.name}</h1>
                    </div>
                    
                ))
            }
        </div>
        <button onClick={handlelogout}>logout</button>
    </div>
  )
}

export default Profile;