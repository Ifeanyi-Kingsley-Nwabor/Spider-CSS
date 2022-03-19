import React from "react";
import { Link } from "react-router-dom";

const CssPlatform = () => {
  return (
    <div className="row">
      <div className="platform col s12">
        <span className="material-icons pulse">code</span>
        <h3 className="platform_title">Learn Css on these Platforms</h3>
        <div className="platform_content">
          <hr />
          <div className="list-item">
            <Link
              to="https://www.w3schools.com/css/"
              target="_blank"
              rel=" noreferrer noopener"
            >
              W3 Schools
            </Link>
          </div>
          <hr />
          <div className="list-item">
            <Link
              to="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel=" noreferrer noopener"
            >
              MDN Web Docs
            </Link>
          </div>
          <hr />
          <div className="list-item">
            <Link
              to="https://www.freecodecamp.org/news/tag/css/"
              target="_blank"
              rel=" noreferrer noopener"
            >
              FreeCodeCamp
            </Link>
          </div>
          <hr />
          <div className="list-item">
            <Link
              to="https://www.codecademy.com/catalog/language/html-css?g_network=g&g_device=c&g_adid=528849219307&g_keyword=codecademy%20css&g_acctid=243-039-7011&g_adtype=search&g_adgroupid=128133970468&g_keywordid=kwd-319752155745&g_campaign=INTL_Brand_Exact&g_campaignid=1726903838&utm_id=t_kwd-319752155745:ag_128133970468:cp_1726903838:n_g:d_c&utm_term=codecademy%20css&utm_campaign=INTL_Brand_Exact&utm_source=google&utm_medium=paid-search&utm_content=528849219307&hsa_acc=2430397011&hsa_cam=1726903838&hsa_grp=128133970468&hsa_ad=528849219307&hsa_src=g&hsa_tgt=kwd-319752155745&hsa_kw=codecademy%20css&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiAsYyRBhACEiwAkJFKonCDbj4NOSfWRtm28MvAfe811w17HoQ9fib3mxjqeZFWOvQDXun57BoCr34QAvD_BwE"
              target="_blank"
              rel=" noreferrer noopener"
            >
              Codecademy
            </Link>
          </div>
          <hr />
          <div className="list-item">
            <Link
              to="https://www.linkedin.com/learning/subscription/topics/css-2?src=go-pa&veh=sem_src.go-pa_c.LLS-C_EMEA_DACH_T1_EN_SEM_SEM_GoogleAds_NA_All_NA_NA_Core_NA_Web-Css-MKAG_Nonbrand_Exact_pkw.learn%20css_pmt.e_pcrid.476817208792_pdv.c_plc._trgid.aud-1016811499848:kwd-295916433260_net.g_learning&trk=sem_src.go-pa_c.LLS-C_EMEA_DACH_T1_EN_SEM_SEM_GoogleAds_NA_All_NA_NA_Core_NA_Web-Css-MKAG_Nonbrand_Exact_pkw.learn%20css_pmt.e_pcrid.476817208792_pdv.c_plc._trgid.aud-1016811499848:kwd-295916433260_net.g_learning&mcid=6841876146393514143&cname=&camid=11538981358&asid=114170353124&targetid=aud-1016811499848:kwd-295916433260&crid=476817208792&placement=&dev=c&ends=1&gclid=CjwKCAiAsYyRBhACEiwAkJFKotMOYtKnr3oXb9yU4ulQNe5ERZuwDKJDIWbVM6CWE7-m8YggNgRtcxoCHkYQAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              rel=" noreferrer noopener"
            >
              Linkedin Learning
            </Link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CssPlatform;
