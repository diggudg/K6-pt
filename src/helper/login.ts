import http from 'k6/http';
export default function azureAuthentication() {

    const url = `https://login.microsoftonline.com/{tenant-id}/oauth2/token`;
    const AZURE_SCOPES =
  'email openid profile https://graph.microsoft.com/User.Read https://graph.microsoft.com/User.ReadBasic.All';
    const requestBody = {
        client_id: '',
        client_secret: '',
        scope: AZURE_SCOPES,
        grant_type:'client_credentials'
    };

    let response = http.post(url, requestBody);
   
     return response.json();

}