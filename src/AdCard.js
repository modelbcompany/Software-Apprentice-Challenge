function AdCard({adObj, googleList}) {
    let result= 'N/A'
    for (let i=0; i < googleList.length; i++) {
        if ((adObj.campaign_name || adObj.campaign) === googleList[i].utm_campaign && (adObj.media_buy_name || adObj.ad_group || adObj.ad_squad_name) === googleList[i].utm_medium && (adObj.ad_name || adObj.image_name || adObj.creative_name) === googleList[i].utm_content) {
            result= googleList[i].results
        }
    }
    return(
        <div className="card-box">
            <p>Campain: {adObj.campaign_name || adObj.campaign}</p>
            <p>Adset: {adObj.media_buy_name || adObj.ad_group || adObj.ad_squad_name}</p>
            <p>Creative: {adObj.ad_name || adObj.image_name || adObj.creative_name}</p>
            <p>Spend: {adObj.spend || adObj.cost}</p>
            <p>Impressions: {adObj.impressions}</p>
            <p>Clicks: {adObj.clicks || adObj.post_clicks}</p>
            <p>Results: {result}</p>
        </div>
    )
}

export default AdCard