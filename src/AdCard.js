function AdCard({adObj}) {
    return(
        <div className="card-box">
            <p>{adObj.campaign_name || adObj.campaign || adObj.utm_campaign}</p>
        </div>
    )
}

export default AdCard