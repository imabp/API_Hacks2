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
        {notification && !loading && (<>{notification}</>)}
        {loading && <>cooking up api hacks status</>}
    </>
    )
}
export default Notification