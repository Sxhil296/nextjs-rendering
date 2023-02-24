import User from "../components/User"

function users({users}) {
  return (
    <div>
        <h1>List of users</h1>
        {
            users.map(user => {
                return (
                    <div key={user.id}>
                        <User user={user}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default users

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data,
        },
    }
}
