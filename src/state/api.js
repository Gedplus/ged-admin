import axios from 'axios';
export const getArticles= async () => {
    return await axios.get("https://www.24-crm.com/webservice/api/ARTICLEs?coddos=GEDcom&serveur=/]qpmz&user=tb&pwd=Qpmztpgubinfenf{hboj234&database=PSGEDcom");
  }
