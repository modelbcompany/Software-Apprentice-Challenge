import AdCard from "./AdCard"

function AdList({adData}) {

    const facebookList= adData.facebook_ads
    const twitterList= adData.twitter_ads
    const snapchatList= adData.snapchat_ads
    const googleList= adData.google_analytics

    const masterList= [...facebookList, ...twitterList, ...snapchatList]

    const adCards= masterList.map(adObj => {
        return <AdCard adObj= {adObj} googleList= {googleList}/>
    })

    return(
        <div className= 'card-container'>
            {adCards}
        </div>
    )
}

export default AdList