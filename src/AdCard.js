function AdCard({adObj}) {
    return(
        <div className="card-box">
            <p>Campain: {adObj.campaign_name || adObj.campaign || adObj.utm_campaign}</p>
            <p>Adset: {adObj.media_buy_name || adObj.ad_group || adObj.ad_squad_nam}</p>
            <p>Creative: {adObj.ad_name || adObj.image_name || adObj.creative_name}</p>
            <p>Spend: {adObj.spend || adObj.cost}</p>
            <p>Impressions: {adObj.impressions}</p>
            <p>Clicks: {adObj.clicks || adObj.post_clicks}</p>
            <p>Results: </p>
        </div>
    )
}

export default AdCard