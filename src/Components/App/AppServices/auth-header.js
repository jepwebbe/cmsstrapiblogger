export default function authHeader() {
    const currentToken = sessionStorage.getItem("token") ?
    JSON.parse(sessionStorage.getItem("token")) :
    "";

    if (currentToken && currentToken) {
        return {
            "Access-ControlAllow-Origin": "*",
            authorization: `Bearer ${currentToken.access_token}`
        };
    } else {
        return {};
    }
}