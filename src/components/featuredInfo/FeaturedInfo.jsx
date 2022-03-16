import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward, Money, People, InsertChart } from "@material-ui/icons";
import {useJsonStore} from 'pxp-jsonstore';
import CircularProgress from '@material-ui/core/CircularProgress';
import  LocalAtmIcon from '@material-ui/icons/LocalAtm';
import MailIcon from '@material-ui/icons/Mail';
import SmsIcon from '@material-ui/icons/Sms';


export default function FeaturedInfo() {

  const dataStore = useJsonStore({
    doRequest: {
      method: 'get',
      url: `${process.env.REACT_APP_REQUEST_PXP_ND}hq-nd/Dashboard/cards`,
      typeData: 'QUERY_STRING',
      withCredentials: true,
      data: {
        start:0, limit:20, sort:'name', dir: 'asc'
      },
      headers: {
        'Authorization': process.env.REACT_APP_TOKEN_PXP_ND,
        'Content-Type': 'application/json',
      }
    },
    load: true,
  });

  const data = dataStore.getData()

if (data){
  return (
    <div className="featured">

      <div className="featuredItem">
          <div className='container_icon'>
          <LocalAtmIcon className='icon_billed' />
          </div>
        <span className="featuredTitle"
        data={data}
        >{data[0].name}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"
          data={data}>{"$" + data[0].users}</span>
          <span className="featuredMoneyRate">
            +11.4 <ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Amount billed this month </span>
      </div>


      <div className="featuredItem">
      <div className='container_icon'>
            <People className='icon_members' />
          </div>
        <span className="featuredTitle"
        data={data}>{data[1].name}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"
          data={data}>{data[1].users}</span>
        </div>
        <span className="featuredSub">Number of members</span>
      </div>


      <div className="featuredItem">
      <div className='container_icon'>
            <SmsIcon className='icon_sms' />
          </div>
        <span className="featuredTitle"
        data={data}>{data[2].name}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"
          data={data}>{data[2].users}</span>
        </div>
        <span className="featuredSub">Sms sent  this month</span>
      </div>


      <div className="featuredItem">
      <div className='container_icon'>
            <MailIcon className='icon_mail' />
          </div>
        <span className="featuredTitle"
        data={data}>{data[3].name}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"
          data={data}>{data[3].users}</span>
        </div>
        <span className="featuredSub">Email sent this month</span>
      </div>


    </div>
  );
} else {
 return (<CircularProgress/>);
}


}
