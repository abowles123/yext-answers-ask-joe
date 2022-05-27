async function getGameImage(): Promise<any> {
    const CLIENT_ID = "4tcx2peb6ansx6zb2eugirbi00tm93";
    const accessToken = await getAccessToken(CLIENT_ID);
    console.log(accessToken);
    fetch("https://api.igdb.com/v4/games",
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${accessToken}`,
            'Access-Control-Allow-Origin': 'https://amazing.site'
        },
    })
    .then(response => response.json())
    .then((data) => console.log(data));

    return "";
}

function getAccessToken(CLIENT_ID: string): Promise<any> {
    const CLIENT_SECRET = "kubdkfpq2otdvheu0g942x5wl4ojdy";
    return fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
        { method: "POST" }
    )
        .then(response => response.json());
}

export {
    getGameImage,
};
