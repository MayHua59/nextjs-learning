export default async function UserDetailPage({params}:{
    params: Promise<{userId: string}>
}){
const {userId} = await params;
if(userId === '1' || userId == '2' || userId =='3'){
    return (
        <div>
            <h1>ID {userId} </h1>
            <h2>ERmail</h2>
        </div>
    )
}
return <h1>User Not Found {userId}</h1>
}