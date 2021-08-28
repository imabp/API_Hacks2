import axios from 'axios';
function sendData(payload,cb,setLoading){
axios.post("https://api.apihacks.co/sponsorform",payload).then(function (response) {
   
    cb(true);
    setLoading(false);
    });
}
export default sendData;