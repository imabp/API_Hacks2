import React from 'react'
const Notification = () => {
    const [loading, setLoading] = React.useState(true);
    const [notification, setNotification] = React.useState(null);
    React.useEffect(() => {
        fetch("https://idv2l4.deta.dev/apihacksstatus").then(response => response.json()).then(data => {
            setNotification(data[0].title);
            setLoading(false);
        }
        ).catch((err) => {
            setNotification("fixing something up...");
            setLoading(false);
            console.error(err);
        })
    }, [])

    return (<>


        {/* <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">📣</span>
            <span class="font-semibold mr-2 text-left flex-auto">{notification}   {loading && <>cooking up api hacks status</>} </span>


        </div> */}
        <div style={{ background: '#6a6864' }} class="justify-items-start bg-gray-700 border-l-4 border-orange-500 text-orange-700 px-2 " role="alert">
            <p class="font-bold ">📣Announcement</p>
            <p>{notification}   {loading && <>cooking up api hacks status</>}</p>
        </div>
    </>
    )
}
export default Notification