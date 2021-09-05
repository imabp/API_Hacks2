import React from 'react'
import { WaveBTN } from '../../components'
import { Link } from 'react-router-dom'
import sendData from './functions/sendData'
import SponsorCard from './../../components/sponsor'
import { useSponsors } from './functions/useSponsors'
const Sponsor = () => {
    
    const sponsordata = useSponsors();

   
    
    
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [coType, setCoType] = React.useState('')
    const [msg, setMsg] = React.useState('');
    const [cb, setCB] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);
   
    let payload = {
        name: name, company: `${company} (${coType})`, email: email, message: msg
    }
    return (
        <div className=" text-xl pl-6 md:pl-12 pt-10 h-screen">
            <div className="text-4xl">🧏‍♂️ Sponsors </div><br />

            wanna be one of our awesome sponsors?<br />
            <span style={{ color: 'gray', cursor: 'pointer' }} onClick={() => { setShowForm(!showForm) }}>{showForm ? <WaveBTN type="btn-fade" text="view sponsors" /> : <WaveBTN type="btn-fade" text="sponsor form" />}</span>    &nbsp;&nbsp;&nbsp;
            <Link to="/brochure">
                <WaveBTN type="btn-fade" text="see our brochure.."/>
            </Link>
            <>
                {sponsordata && !showForm && <>
                    <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mr-5">
                        {sponsordata.gold && sponsordata.gold.map((item, index) => {
                            
                               return (<><SponsorCard type="gold" organization={item.organization} hashtags={item.hashtags} img={item.img} url={item.url} /></>)
                           })
                       }
                        {sponsordata.auth && sponsordata.auth.map((item, index) => {

                            return (<><SponsorCard type="auth" organization={item.organization} hashtags={item.hashtags} img={item.img} url={item.url} /></>)
                        })
                        }
                        {sponsordata.media && sponsordata.media.map((item, index) => {

                            return (<><SponsorCard type="media" organization={item.organization} hashtags={item.hashtags} img={item.img} url={item.url} /></>)
                        })
                        }
                        {sponsordata.silver && sponsordata.silver.map((item, index) => {

                            return (<><SponsorCard type="silver" organization={item.organization} hashtags={item.hashtags} img={item.img} url={item.url} /></>)
                        })
                        }
                        {sponsordata.bronze && sponsordata.bronze.map((item, index) => {

                            return (<><SponsorCard type="bronze" organization={item.organization} hashtags={item.hashtags} img={item.img} url={item.url} /></>)
                        })
                        }
                        {sponsordata.community && sponsordata.community.map((item, index) => {

                            return (<><SponsorCard type="community" organization={item.organization} hashtags={item.hashtags} img={item.img} url={item.url} /></>)
                        })
                        }
                    </div>
                </>}
                {showForm && <> <form className="w-full max-w-sm mt-5">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/3">
                            <input
                                onChange={(e) => { setName(e.target.value) }}
                                value={name}
                                className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name" type="text" placeholder="your good name" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/3">
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}
                                className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name" type="text" placeholder="your email" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/3">
                            <input
                                onChange={(e) => { setCompany(e.target.value) }}
                                value={company}
                                className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name" type="text" placeholder="organization name" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6 inline-block relative w-64">
                        <select
                            onChange={(e) => { setCoType(e.target.value) }}
                            value={coType}
                            className="fontLight block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>organization type</option>
                            <option>student community</option>
                            <option>company (profit/not-profit)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <textarea onChange={(e) => { setMsg(e.target.value) }} value={msg} placeholder="we are looking to help api hacks..." className="resize-none border rounded-md p-4 w-full fontLight" style={{ height: '200px' }} ></textarea>
                    </div>

                </form>
                    <div className="md:flex md:items-center">
                        <div className="md:w-2/3">
                            {!cb && !loading && <WaveBTN text="talk to us" type="btn-fade" onClick={() => { setLoading(true); sendData(payload, setCB, setLoading) }} />}
                            {cb && <>thanks! we will be reaching you out super soon</>}<br />
                            {cb && <>meanwhile, you can go see our existing<br />
                                <span style={{ color: 'gray', cursor: 'pointer' }} onClick={() => { setShowForm(!showForm) }}>sponsors</span><br />
                                <Link to="/brochure">
                                    <span style={{ color: 'gray' }}>and  brochure</span>
                                </Link>
                            </>}
                            {loading && <>sending your request...</>}
                        </div>
                    </div>
                </>
                }

                <br />


            </><br /><br /><br />

        </div>
    )
}

export default Sponsor
