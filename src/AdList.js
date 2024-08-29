import AdCard from "./AdCard"
import { useState } from "react"

function AdList({adData}) {
    const [searchInput, setSearchInput]= useState('')
    const [sortInput, setSortInput]= useState('')

    function handleSearchInput(e) {
        setSearchInput(e.target.value)
    }

    function handleSort(e) {
        setSortInput(e.target.value)
    }
    
    // console.log(Array.isArray(adData.facebook_ads))

    const googleList= adData.google_analytics

    const masterList= [...adData.facebook_ads, ...adData.twitter_ads, ...adData.snapchat_ads]

    // console.log(masterList)

    let sortedAds= []

    switch(sortInput) {
        case '':
            sortedAds= masterList
            break
        case 'ascending':
            sortedAds= masterList.sort((a,b) => (a.spend || a.cost) - (b.spend || b.cost))
            break
        case 'descending':
            sortedAds= masterList.sort((a,b) => (b.spend || b.cost) - (a.spend || a.cost))
    }

    const filteredAds= sortedAds.filter(adObj => {
        return (adObj.campaign_name || adObj.campaign).toLowerCase().includes(searchInput.toLowerCase())
    })

    // console.log(filteredAds)

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
                    <label id= 'sort-text'>Sort by spend:</label>
                        <select name="sort" onChange={handleSort} id='sort-box'>
                            <option value=''></option>
                            <option value='ascending'>ascending</option>
                            <option value='descending'>descending</option>
                        </select>
                </div>
            </div>
            {adCards}
        </div>
    )
}

export default AdList