import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  panelOpenState = false
  constructor() { }

  ngOnInit(): void {
  }


  files = [
    [
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2023',
        path:'assets/pdf/financials/ResultsMarch2023ACMS.pdf'
      },
      {
        name:'Unaudited Financial Results for Quarter Ended 31st December 2022 as published',
        path:'assets/pdf/financials/News Paper Publication Dec 2022.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2022',
        path:'assets/pdf/financials/results_dec22.pdf'
      },
      {
        name:'Unaudited Financial Results for Quarter and Half Year Ended 30th September 2022 as published',
        path:'assets/pdf/financials/Newspaper.pdf'
      },
      {
        name:'Unaudited Financial Results for Quarter and Half Year Ended 30th September 2022',
        path:'assets/pdf/financials/Results.pdf'
      },
      {
        name:'Unaudited Financial Results for Quarter Ended 30th June 2022 as published',
        path:'assets/pdf/financials/Newspaper 2022.pdf'
      },
      {
        name:'Unaudited Financial Results for Quarter Ended 30th June 2022',
        path:'assets/pdf/financials/Result June 2022.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2022 as published',
        path:'assets/pdf/financials/publication_march2022_Acms.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2022',
        path:'assets/pdf/financials/results_acms_march2022.pdf'
      },
    ],

    [  
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2021 as published',
        path:'assets/pdf/financials/publication_feb22_Acms.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2021',
        path:'assets/pdf/financials/results_feb22_acms.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter and Half Year Ended 30 September 2021',
        path:'assets/pdf/financials/results_acms_sep2021.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 June 2021',
        path:'assets/pdf/financials/results_acms_jun21.pdf'
      },
    ],

    [
      
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2021 as published',
        path:'assets/pdf/financials/publication_ACMS_results_21.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2021',
        path:'assets/pdf/financials/results_avonmore_28_jun.pdf'
      },
    ],
    
    
    [
      
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2020 As Published',
        path:'assets/pdf/financials/publication_ACMS_results.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2020',
        path:'assets/pdf/financials/results_Avonmore_dec20.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 September 2020 As Published',
        path:'assets/pdf/financials/publication_Avonmore.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 September 2020',
        path:'assets/pdf/financials/results_avonmore.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 June 2020 As Published',
        path:'assets/pdf/financials/results_jun30_20_published.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 June 2020',
        path:'assets/pdf/financials/results_jun30_20.pdf'
      },
    ],


    [
        
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2020 As Published',
        path:'assets/pdf/financials/ACMS_Results_Publish_Disclosure.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2020',
        path:'assets/pdf/financials/ACMS_Results.pdf'
      },

    ],


    [
        
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 December 2019 As Published',
        path:'assets/pdf/financials/publication_feb2020.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 December 2019',
        path:'assets/pdf/financials/results_Avonmore_feb2020.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 September 2019 As Published',
        path:'assets/pdf/financials/publication_dec2019.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 September 2019',
        path:'assets/pdf/financials/results_avonmore_dec19.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 June 2019 As Published',
        path:'assets/pdf/financials/pulication.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 June 2019',
        path:'assets/pdf/financials/results_BSE.pdf'
      },
    ],

    [
      {
        name:'Audited Consolidated Financial Results for the Quarter & Year Ended 31 March 2019 As Published',
        path:'assets/pdf/financials/publication_march 2019.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2019',
        path:'assets/pdf/financials/results_march2019.pdf'
      },
    ],

    [
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2018 as Published',
        path:'assets/pdf/financials/publication_dec2018.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2018',
        path:'assets/pdf/financials/results_Dec2018.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 September 2018 as Published',
        path:'assets/pdf/financials/results_publication_Sep18.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 September 2018',
        path:'assets/pdf/financials/results_acms_Sep18.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 June 2018 as Published',
        path:'assets/pdf/financials/published_results_june18.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 Jun 2018',
        path:'assets/pdf/financials/results_BSE_Jun18.pdf'
      },
    ],

    [  
      {
        name:'Audited Consolidated Financial Results for the Quarter & Year Ended 31 March 2018 As Published',
        path:'assets/pdf/financials/published_results_avonmore_swMar18.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2018',
        path:'assets/pdf/financials/results_avonmoreMar_18.pdf'
      },
    ],

    [
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2017 as Published',
        path:'assets/pdf/financials/BSE_ACMS_PUBLISHED RESULTS_dec17.pdf'
      },
      {
        name:'Console Unaudited Financial Results for the Quarter Ended 31 December 2017',
        path:'assets/pdf/financials/results_dec17.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 September 2017 as Published',
        path:'assets/pdf/financials/publish_Avonmore.pdf'
      },
      {
        name:'Console Unaudited Financial Results for the Quarter Ended 30 September 2017',
        path:'assets/pdf/financials/results_BSE_AvonmoreDec17.pdf'
      },
      {
        name:'Standalone Unaudited Financial Results for the Quarter Ended 30 September 2017',
        path:'assets/pdf/financials/ResultSep_2017.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 June 2017 as Published',
        path:'assets/pdf/financials/acms_bse_publication_Jun17.pdf'
      },
      {
        name:'UnAudited Financial Results for the Quarter Ended 30 June 2017 As',
        path:'assets/pdf/financials/reults_Avonmore_Jun117.pdf'
      },
      {
        name:'Audited Consolidated Financial Results for the Quarter & Year Ended 31 March 2017 As Published',
        path:'assets/pdf/financials/published_results_mar17.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter & Year Ended 31 March 2017',
        path:'assets/pdf/financials/ACMS_Results_Jul17.pdf'
      },
    ],

    [
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 December 2016',
        path:'assets/pdf/financials/WEBSITE_UFR_ACMS_31_12_2016.pdf'
      },
      {
        name:'UnAudited Financial Results for the Quarter Ended 30 September 2016 As Published',
        path:'assets/pdf/financials/acms result published_30_09_2016.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 September 2016',
        path:'assets/pdf/financials/Results_website_Acms_Sep_2016.pdf'
      },
      {
        name:'UnAudited Financial Results for the Quarter Ended 30 June 2016 As Published',
        path:'assets/pdf/financials/UNAUDITED_RESULT_AS_PUBLISHED.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 30 June 2016',
        path:'assets/pdf/financials/unaudited_Results2016_June.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter and year Ended 31 March 2016',
        path:'assets/pdf/financials/Audited_Results2016_DSE.pdf'
      },
      {
        name:'Audited Financial Results for the Quarter and year Ended 31 March 2016 As Published',
        path:'assets/pdf/financials/results2016_publish.pdf'
      },
    ],

    [
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 Dec 2015',
        path:'assets/pdf/financials/ACMS_Website_UFR_Dec_15.pdf'
      },
      {
        name:'Unaudited Financial Results for the Quarter Ended 31 Dec 2015 As Published',
        path:'assets/pdf/financials/newpaper_publishiing_2015.pdf'
      },

    ]
    
  ]


  files2 = [
    [
      {
        name:'Almondz INFOSYSTEM PVT. LTD 2014-15',
        path:'assets/pdf/financials/Infosystem_bs_2015.pdf'
      },
      {
        name:'Almondz INFOSYSTEM PVT. LTD 2015-16',
        path:'assets/pdf/financials/Infosystem_bs_2016.pdf'
      },
      {
        name:'Almondz INFOSYSTEM PVT. LTD 2016-17',
        path:'assets/pdf/financials/almondz_infosystem1617.pdf'
      },
      {
        name:'Almondz INFOSYSTEM PVT. LTD 2017-18',
        path:'assets/pdf/financials/BS_Infosystem2018.pdf'
      },
      {
        name:'Almondz INFOSYSTEM PVT. LTD 2018-19',
        path:'assets/pdf/financials/BS_Infosystem_2019.pdf'
      },
      {
        name:'Almondz INFOSYSTEM PVT. LTD 2019-20',
        path:'assets/pdf/financials/almondzinfosystem_2020.pdf'
      },
      {
        name:'Almondz INFOSYSTEM PVT. LTD 2020-21',
        path:'assets/pdf/financials/BS_infosystem_2021.pdf'
      },
      {
        name:'Almondz INFOSYSTEM PVT. LTD 2021-22',
        path:'assets/pdf/financials/B.SHEET [ ALMONDZ INFOSYSTEM ] 31.03.2022.pdf'
      },
    ],
    [
      {
        name:'RED SOLUTIONS PVT. LTD 2014-15',
        path:'assets/pdf/financials/BS_RED_2015.pdf'
      },
      {
        name:'RED SOLUTIONS PVT. LTD 2015-16',
        path:'assets/pdf/financials/BS_RED_2016.pdf'
      },
      {
        name:'RED SOLUTIONS PVT. LTD 2016-17',
        path:'assets/pdf/financials/red solutions1617.pdf'
      },
      {
        name:'RED SOLUTIONS PVT. LTD 2017-18',
        path:'assets/pdf/financials/BS_RED2018.pdf'
      },
      {
        name:'RED SOLUTIONS PVT. LTD 2018-19',
        path:'assets/pdf/financials/BS_RED2019.pdf'
      },
      {
        name:'RED SOLUTIONS PVT. LTD 2019-20',
        path:'assets/pdf/financials/red solution_2020.pdf'
      },
      {
        name:'RED SOLUTIONS PVT. LTD 2020-21',
        path:'assets/pdf/financials/BS_red_2021.pdf'
      },
      {
        name:'RED SOLUTIONS PVT. LTD 2021-22',
        path:'assets/pdf/financials/B.SHEET [ RED SOLUTIONS ] 31.03.2022 FY.21-22.pdf'
      },
    ],
    [
      {
        name:'ALMONDZ INSURANCE BROKERS PVT. LTD 2014-15',
        path:'assets/pdf/financials/BS_Insurance_2015.pdf'
      },
      {
        name:'ALMONDZ INSURANCE BROKERS PVT. LTD 2015-16',
        path:'assets/pdf/financials/BS_Insurance_2016.pdf'
      },
      {
        name:'WILLIS TOWERS WATSON INDIA INSURANCE BROKERS PRIVATE LIMITED (FORMERLY',
        path:'assets/pdf/financials/WILLIS_2017.pdf'
      },
      {
        name:'KNOWN AS ALMONDZ INSURANCE BROKERS PVT. LTD 2016-17)',
        path:'assets/pdf/financials/WILLIS_2017.pdf'
      },
      
    ],
    [
      {
        name:'APRICOT INFOSOFT PVT. LTD 2014-15',
        path:'assets/pdf/financials/Apricot_BS_2015.pdf'
      },
      {
        name:'APRICOT INFOSOFT PVT. LTD 2015-16',
        path:'assets/pdf/financials/Apricot_BS_2016.pdf'
      },
      {
        name:'APRICOT INFOSOFT PVT. LTD 2016-17',
        path:'assets/pdf/financials/BS_Apricot1617.pdf'
      },
      {
        name:'APRICOT INFOSOFT PVT. LTD 2017-18',
        path:'assets/pdf/financials/BS_Apricot2018.pdf'
      },
      {
        name:'APRICOT INFOSOFT PVT. LTD 2018-19',
        path:'assets/pdf/financials/BS_Apricot_2019.pdf'
      },
      {
        name:'APRICOT INFOSOFT PVT. LTD 2019-20',
        path:'assets/pdf/financials/apricot_2020.pdf'
      },
      {
        name:'APRICOT INFOSOFT PVT. LTD 2020-21',
        path:'assets/pdf/financials/BS_Apricot_2021.pdf'
      },
      {
        name:'APRICOT INFOSOFT PVT. LTD 2021-22',
        path:'assets/pdf/financials/B.SHEET [ APRICOT INFOSOFT ] 31.03.2022.pdf'
      },
    ],
    [
      {
        name:'AVONMORE DEVELOPERS PVT. LTD 2014-15',
        path:'assets/pdf/financials/BS_AVonmoredevelopers_2015.pdf'
      },
      {
        name:'AVONMORE DEVELOPERS PVT. LTD 2015-16',
        path:'assets/pdf/financials/BS_AVonmoredevelopers_2016.pdf'
      },
      {
        name:'AVONMORE DEVELOPERS PVT. LTD 2016-17',
        path:'assets/pdf/financials/BS_avonmore developers1617.pdf'
      },
      {
        name:'AVONMORE DEVELOPERS PVT. LTD 2017-18',
        path:'assets/pdf/financials/BS_Develoeprs2018.pdf'
      },
      {
        name:'AVONMORE DEVELOPERS PVT. LTD 2018-19',
        path:'assets/pdf/financials/Avonmore_developers_BS2019.pdf'
      },
      {
        name:'AVONMORE DEVELOPERS PVT. LTD 2019-20',
        path:'assets/pdf/financials/adpl_2020.pdf'
      },
      {
        name:'AVONMORE DEVELOPERS PVT. LTD 2020-21',
        path:'assets/pdf/financials/BS_developers_2021.pdf'
      },
      {
        name:'AVONMORE DEVELOPERS PVT. LTD 2021-22',
        path:'assets/pdf/financials/B.SHEET [ AVONMORE DEVELOPERS ] 31.03.22.pdf'
      },
    ],
    [
      {
        name:'GLOW APPARELS PVT. LTD 2014-15',
        path:'assets/pdf/financials/Glow_BS_2015.pdf'
      },
      {
        name:'GLOW APPARELS PVT. LTD 2015-16',
        path:'assets/pdf/financials/Glow_BS_2016.pdf'
      },
      {
        name:'GLOW APPARELS PVT. LTD 2016-17',
        path:'assets/pdf/financials/glow1617.pdf'
      },
      {
        name:'GLOW APPARELS PVT. LTD 2017-18',
        path:'assets/pdf/financials/BS_Glow2018.pdf'
      },
      {
        name:'GLOW APPARELS PVT. LTD 2018-19',
        path:'assets/pdf/financials/BS_Glow2019.pdf'
      },
      {
        name:'GLOW APPARELS PVT. LTD 2019-20',
        path:'assets/pdf/financials/glow_2020.pdf'
      },
      {
        name:'GLOW APPARELS PVT. LTD 2020-21',
        path:'assets/pdf/financials/BS_GLOW_2021.pdf'
      },
      {
        name:'GLOW APPARELS PVT. LTD 2021-22',
        path:'assets/pdf/financials/Balancesheet_glow2021-22.pdf'
      },
    ],
    [
      {
        name:'ANEMONE HOLDINGS PVT. LTD. 2014-15',
        path:'assets/pdf/financials/BS_ANEMONE_2015.pdf'
      },
      {
        name:'ANEMONE HOLDINGS PVT. LTD. 2015-16',
        path:'assets/pdf/financials/BS_ANEMONE_2016.pdf'
      },
      {
        name:'ANEMONE HOLDINGS PVT. LTD. 2016-17',
        path:'assets/pdf/financials/BS_anemone.pdf'
      },
      {
        name:'ANEMONE HOLDINGS PVT. LTD. 2017-18',
        path:'assets/pdf/financials/BS_anemone2018.pdf'
      },
      {
        name:'ANEMONE HOLDINGS PVT. LTD. 2018-19',
        path:'assets/pdf/financials/BS_2019.pdf'
      },
      {
        name:'ANEMONE HOLDINGS PVT. LTD. 2019-20',
        path:'assets/pdf/financials/animone_2020.pdf'
      },
      {
        name:'ANEMONE HOLDINGS PVT. LTD. 2020-21',
        path:'assets/pdf/financials/BS_anemone_2021.pdf'
      },
      {
        name:'ANEMONE HOLDINGS PVT. LTD. 2021-22',
        path:'assets/pdf/financials/B.SHEET [ ANEMONE HOLDINGS-STANDALONE ] 31.03.22 FY.21-22.pdf'
      },
    ],
    [
      {
        name:'ALMONDZ GLOBAL SECURITIES LIMITED 2014-15',
        path:'/'
      },
      {
        name:'ALMONDZ GLOBAL SECURITIES LIMITED 2015-16',
        path:'/'
      },
      {
        name:'ALMONDZ GLOBAL SECURITIES LIMITED 2016-17',
        path:'assets/pdf/financials/Almondz Global Securities Annual Report 2016-17.pdf'
      },
      {
        name:'ALMONDZ GLOBAL SECURITIES LIMITED 2017-18',
        path:'assets/pdf/financials/annualreport_AGSL_2018.pdf'
      },
      {
        name:'ALMONDZ GLOBAL SECURITIES LIMITED 2018-19',
        path:'assets/pdf/financials/Annualreport_2019_AGSL.pdf'
      },
      {
        name:'ALMONDZ GLOBAL SECURITIES LIMITED 2019-20',
        path:'assets/pdf/financials/Annualreport_2020.pdf'
      },
      {
        name:'ALMONDZ GLOBAL SECURITIES LIMITED 2020-21',
        path:'assets/pdf/financials/AGSL_Annualreport_2021.pdf'
      },
      {
        name:'ALMONDZ GLOBAL SECURITIES LIMITED 2021-22',
        path:'assets/pdf/financials/B.SHEET [ AGSL -STANDALONE ] 31.03.2022 FY.21-22.pdf'
      },
    ],
    [
      {
        name:'TRP Social Consultants Pvt Ltd. 2017-18',
        path:'assets/pdf/financials/08 TRP Social Consultants Signed BS FY 17-18.pdf'
      },
    ],
  ]



}
