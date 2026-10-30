function AdminHome(){
     let currrentuser=JSON.parse(localStorage.getItem("currentuser"))

    return(
    <div>
        <h1>Admin home page</h1>
       <h2>welcome {currentuser.name}</h2>
    </div>
    )
}
export default AdminHome