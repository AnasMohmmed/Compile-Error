import React, { useContext } from 'react'
import classes from './Service.module.css'
import Card from './Card'
import { FiCode, FiBookOpen, FiGitBranch, FiTriangle, FiUpload } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../../Context/ThemeContext';
function Service() {
  const { serviceactive } = useContext(ThemeContext);
  const { id } = useParams()
  let Services = [
    { icon: <FiCode />, title: 'Architecture Diagram', updated: '3 days', devname: 'Anas Mohammed', servname: 'Diagram' },
    { icon: <FiBookOpen />, title: 'Incident Runbook', updated: '1 week', devname: 'Mostafa Kamel', servname: 'Runbook' },
    { icon: <FiBookOpen />, title: 'API Documentation', updated: '2 weeks', devname: 'Salem Alkahtany', servname: 'API Docs' },
    { icon: <FiTriangle />, title: 'Postmortem — Sept 12 outage', updated: '1 month', devname: 'Anas Mohammed', servname: 'Postmortem' }
  ]
  return (
    <>
      <div className={classes["service-head"]}>
        <div className={classes['details']}>
          <span>{serviceactive}</span>
          <span>Documentation & runbooks · Owned by Checkout</span>
        </div>
        <button className={classes['upload-btn']}><FiUpload />Upload document</button>
      </div>
      <div className={classes['cards']}>
        {
          serviceactive == 'payments-api' ?
            Services.map((e) => <Card devname={e.devname}
              serviceTitle={e.title}
              servname={e.servname}
              updated={e.updated}
              icon={e.icon}
            />)
            : serviceactive == 'notifications-svc' ? <Card devname={Services[0].devname}
              serviceTitle={Services[0].title}
              servname={Services[0].servname}
              updated={Services[0].updated}
              icon={Services[0].icon}
            /> : ''
        }
      </div >
    </>
  )
}

export default Service