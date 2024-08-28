import AdCard from "./AdCard"
import { useState } from "react"

function AdList({adData}) {

    const [searchInput, setSearchInput]= useState('')

    function handleSearchInput(e) {
        setSearchInput(e.target.value)
    }
    
    console.log(adData.facebook_ads)

    const googleList= adData.google_analytics

    const masterList= [...adData.facebook_ads, ...adData.twitter_ads, ...adData.snapchat_ads]

    console.log(masterList)


    const filteredAds= masterList.filter(adObj => {
        return (adObj.campaign_name || adObj.campaign).toLowerCase().includes(searchInput.toLowerCase())
    })

    console.log(filteredAds)

    const adCards= filteredAds.map(adObj => {
        return <AdCard adObj= {adObj} googleList= {googleList}/>
    })

    return(
        <div className= 'card-container'>
            <div className= 'search-sort-container'>
                <div className= 'container'>
                <input
                        type="text"
                        className="search"
                        placeholder="Search campaign name..."
                        value={searchInput}
                        onChange={handleSearchInput}
                    />
                </div>
                <div className= 'container'>
                    
                </div>

            </div>
            {adCards}
        </div>
    )
}

export default AdList