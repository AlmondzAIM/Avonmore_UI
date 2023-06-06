import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-holders',
  templateUrl: './share-holders.component.html',
  styleUrls: ['./share-holders.component.css']
})
export class ShareHoldersComponent implements OnInit {
  panelOpenState = false
  constructor() { }

  ngOnInit(): void {
  }

files = [
  {
    title:'Financial Year 2022-23',
    files:[
      {
        name:'Shareholding Pattern Q1 (2022-23)',
        path:'assets/pdf/shareholders/shp_june2022.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2022-23)',
        path:'assets/pdf/shareholders/shareholding_acms_sep22.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2022-23)',
        path:'assets/pdf/shareholders/shareholding_dec22.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2022-23)',
        path:'assets/pdf/shareholders/sp_march2023.pdf'
      }
    ]
  },
  {
    title:'Financial Year 2021-22',
    files:[
      {
        name:'Shareholding Pattern Q1 (2021-22)',
        path:'assets/pdf/shareholders/June_2021.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2021-22)',
        path:'assets/pdf/shareholders/shareholding_Acms_sep21.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2021-22)',
        path:'assets/pdf/shareholders/Shareholding Pattern Q3 2021-22.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2021-22)',
        path:'assets/pdf/shareholders/Avon_march2022__Q4_acms.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2020-21',
    files:[
      {
        name:'Shareholding Pattern Q1 (2020-21)',
        path:'assets/pdf/shareholders/SHP 30.06.2020 ACMS.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2020-21)',
        path:'assets/pdf/shareholders/sep_2020.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2020-21)',
        path:'assets/pdf/shareholders/Dec_2020.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2020-21)',
        path:'assets/pdf/shareholders/March_2021.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2019-20',
    files:[
      {
        name:'Shareholding Pattern Q1 (2019-20)',
        path:'assets/pdf/shareholders/AGSL_shareholding.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2019-20)',
        path:'assets/pdf/shareholders/ACMS_SHAREHOLDING.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2019-20)',
        path:'assets/pdf/shareholders/SHP_Q3_ACMS.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2019-20)',
        path:'assets/pdf/shareholders/SHP 31.03.2020 ACMS.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2018-19',
    files:[
      {
        name:'Shareholding Pattern Q1 (2018-19)',
        path:'assets/pdf/shareholders/shareholding_avonmore_1819.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2018-19)',
        path:'assets/pdf/shareholders/acms_shareholding (1).pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2018-19)',
        path:'assets/pdf/shareholders/shareholding_ACMS1819.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2018-19)',
        path:'assets/pdf/shareholders/shareholdingpattern_ACMs_mar.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2017-18',
    files:[
      {
        name:'Shareholding Pattern Q1 (2017-18)',
        path:'assets/pdf/shareholders/shareholding_Avonmore_jul17.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2017-18)',
        path:'assets/pdf/shareholders/ShareholdingPatternQ21718.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2017-18)',
        path:'assets/pdf/shareholders/shareholding_ACMS_DEC.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2017-18)',
        path:'assets/pdf/shareholders/shareholding_AVonmore_1718.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2016-17',
    files:[
      {
        name:'Shareholding Pattern Q1 (2016-17)',
        path:'assets/pdf/shareholders/shareholding_ACMs.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2016-17)',
        path:'assets/pdf/shareholders/shareholdingspattern_Avonmroe_1.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2016-17)',
        path:'assets/pdf/shareholders/shareholding_PatternQ3.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2016-17)',
        path:'assets/pdf/shareholders/shareholding_ACMS_AprQ4.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2015-16',
    files:[
      {
        name:'Shareholding Pattern Q2 (2015-16)',
        path:'assets/pdf/shareholders/shareholding_pattern_Q2.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2015-16)',
        path:'assets/pdf/shareholders/shareholding_Pattern_Q3.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2015-16)',
        path:'assets/pdf/shareholders/shareholding_Pattern_Q4.pdf'
      },
    ]
  },
]

files2 = [
  {
    title:'2016-17 (Q1)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimation_website_ACMS.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/website_ACMs_publish.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/website_ACMs_outcome.pdf'
      },
    ]
  },
  {
    title:'2016-17 (Q2)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/avonmoe _Website_1.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/ACMS PUBLISHED NOTICE_NOV 2016.pdf'
      },
    ]
  },
  {
    title:'2016-17 (Q3)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/acms_Intimation_01_02_2017.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/acms_Intimation publish_20170202153556.pdf'
      },
    ]
  },
  {
    title:'2016-17 (Q4)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/website_ACMs_May17.pdf'
      },
      {
        name:'Outcome of Board Meeting Q4 16-17',
        path:'assets/pdf/shareholders/outcome_website_Avomnore_Mar_17.pdf'
      },
    ]
  },
  {
    title:'2017-18 (Q1)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/notice_Avonmore_BSE_Aug17.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/published_ACMS_Aug17.pdf'
      },
      {
        name:'Outcome of Board Meeting Q1 17-18',
        path:'assets/pdf/shareholders/outcome of Boardmeeting_avonmore_Jun117.pdf'
      },
    ]
  },
  {
    title:'2017-18 (Q2)',
    files:[
      {
        name:'Intimation Of Board Meeting Nov 2017',
        path:'assets/pdf/shareholders/intimation_boardmeetingNov17.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication Nov 2017',
        path:'assets/pdf/shareholders/publication_boardmeetingNov17.pdf'
      },
      {
        name:'Outcome of Board Meeting Nov 17-18',
        path:'assets/pdf/shareholders/Outcome_2017.pdf'
      },
      {
        name:'Intimation Of Board Meeting Dec 2017',
        path:'assets/pdf/shareholders/intimation_ACMSDec17.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication Dec 2017',
        path:'assets/pdf/shareholders/BSE_NewspaperPublication_Dec2017.pdf'
      },
    ]
  },
  {
    title:'2018-19 (Q1)',
    files:[
      {
        name:'Intimation Of Board Meeting 2018',
        path:'assets/pdf/shareholders/Intimation of board meeting1819.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2018',
        path:'assets/pdf/shareholders/bse_publication_sw1819.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome of board meeting1819.pdf'
      },
    ]
  },
  {
    title:'2018-19 (Q2)',
    files:[
      {
        name:'Intimation Of Board Meeting 2018',
        path:'assets/pdf/shareholders/notice_avonmoresep18.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2018',
        path:'assets/pdf/shareholders/publish_Avonmoresep18.pdf'
      },
    ]
  },
  {
    title:'2018-19 (Q3)',
    files:[
      {
        name:'Intimation Of Board Meeting 2019',
        path:'assets/pdf/shareholders/acms_BSE.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2019',
        path:'assets/pdf/shareholders/acms_Publish.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome_avonmore.pdf'
      },
    ]
  },
  {
    title:'2018-19 (Q4)',
    files:[
      {
        name:'Intimation Of Board Meeting 2019',
        path:'assets/pdf/shareholders/ACMS_BSE_intimation.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2019',
        path:'assets/pdf/shareholders/ACMS_publish_Q4.pdf'
      },
    ]
  },
  {
    title:'2019-20 (Q1)',
    files:[
      {
        name:'Outcome Of Board Meeting Dated 21 August 2019',
        path:'assets/pdf/shareholders/outcome of board meeting dated 21.08.2019.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimation of board meeting.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2019',
        path:'assets/pdf/shareholders/ACMS_publish_Q1_6sep.pdf'
      },
      {
        name:'Outcome Of Board Meeting Dated 14 September 2019',
        path:'assets/pdf/shareholders/outcome_sw.pdf'
      },
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/ACMS_BSE_74.pdf'
      },
      {
        name:'Intimation of implementation of IND-AS',
        path:'assets/pdf/shareholders/ACMS_BSE_INDAS.pdf'
      },
    ]
  },
  {
    title:'2019-20 (Q2)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_5_sep19.pdf'
      },
      {
        name:'Intimation Of Board Meeting 2019',
        path:'assets/pdf/shareholders/intimation_dec19_BSE.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2019',
        path:'assets/pdf/shareholders/dec19_acms_publish.pdf'
      },
      {
        name:'Outcome Of Board Meeting Dated 14 December 2019',
        path:'assets/pdf/shareholders/outcome_avonmore_dec19.pdf'
      },
    ]
  },
  {
    title:'2019-20 (Q3)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_jan20.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BMnotice_BSE_jan2020.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/publish_BSE_Acms_jan2020.pdf'
      },
    ]
  },
  {
    title:'2019-20 (Q4)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/74(5) 31.03.2020.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BM_Notice_ACMS_30.07.2020.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/Newspaper Publication.pdf'
      },
      {
        name:'Outcome Of Board Meeting',
        path:'assets/pdf/shareholders/Outcome_ACMS_Q4.pdf'
      },
    ]
  },
  {
    title:'2020-21 (Q1)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/74(5)30.06.2020.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimationBM_Acms.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/publication_intimation_Acms.pdf'
      },
    ]
  },
  {
    title:'2020-21 (Q2)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/ACMS_74-q3.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BMavonmore_q2.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/acms_publication_q2.pdf'
      },
      {
        name:'Outcome Of Board Meeting',
        path:'assets/pdf/shareholders/outcome_avonmore_q2.pdf'
      },
    ]
  },
  {
    title:'2020-21 (Q3)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/AVONMORE_74_q2.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/Intimation_ACMS-Q3.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/publication_ACMS_Q3.pdf'
      },
      {
        name:'Outcome Of Board Meeting',
        path:'assets/pdf/shareholders/outcome_Acms_q3.pdf'
      },
    ]
  },
  {
    title:'2020-21 (Q4)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/bse_intimation.pdf'
      },
      {
        name:'Outcome Of Board Meeting',
        path:'assets/pdf/shareholders/outcome of boardmeeting.pdf'
      },
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_q4.pdf'
      },
    ]
  },
  {
    title:'2021-22 (Q1)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BM_Notice_aug2021.pdf'
      },
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74june2021.pdf'
      },
    ]
  },
  {
    title:'2021-22 (Q2)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_Q2.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/BM_ACMS_sep2021.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome_Sep21_Acms.pdf'
      },
    ]
  },
  {
    title:'2021-22 (Q3)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/74_ACMS_dec21.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/intimation_BM_acms_feb22.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome_feb22_Acms.pdf'
      },
    ]
  },
  {
    title:'2021-22 (Q4)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_MARCH22.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimation_BM_may2022.pdf'
      },
      {
        name:'Intimation Of Postponement Of Board Meeting',
        path:'assets/pdf/shareholders/intimationofboardmeeting_ACMS.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome_acms_2022.pdf'
      },
    ]
  },
  {
    title:'2022-23 (Q1)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/74_acms_june2022.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimation_BM_AUG2022.pdf'
      }
    ]
  },
  {
    title:'2022-23 (Q2)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms _74 (5) Sep 2022.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/Notice_BM_ACMS_SEP2022.pdf'
      }
    ]
  },
  {
    title:'2022-23 (Q3)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms _74 (5) Dec 2022.pdf'
      },
      {
        name:'2022-23 (Q3)- Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome.pdf'
      },
      {
        name:'2022-23(Q3)- Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BM_intimation_dec2022.pdf'
      }
    ]
  },
  {
    title:'2022-23 (Q4)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_5_March 2023.pdf'
      },
      {
        name:'2022-23(Q4)- Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimation_BM_march2023.pdf'
      }
    ]
  }
]

files3 = [
  {
    title:'Financial Year 2021-22',
    files: [
      {
        name:'Out Come & Proceeding Of Annual General Meeting',                                                                            
        path:'assets/pdf/shareholders/proceding_AGM_2022.pdf'
      },
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/acms_bookclosure_2021.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/acms_publication_bookclosure_2021.pdf'
      },
      {
        name:'AVonmore notice of AGM',
        path:'assets/pdf/shareholders/acms_bookclosure_2021 (1).pdf'
      },
    ]
  },
  {
    title:'Financial Year 2020-21',
    files: [
      {
        name:'Out Come & Proceeding Of Annual General Meeting',                                                                            
        path:'assets/pdf/shareholders/Proceeding AGM 2021.pdf'
      },
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/ACMS_bookclosure_2020.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/acms_agmnotice_publication_2020.pdf'
      },
      {
        name:'AVonmore notice of AGM',
        path:'assets/pdf/shareholders/notice_2020_Acms.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2019-20',
    files: [
      {
        name:'Out Come & Proceeding Of Annual General Meeting',                                                                            
        path:'assets/pdf/shareholders/proceeding_AGM_2020.pdf'
      },
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/bookclosure_acms.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/bookclosurepublication_acms.pdf'
      },
      {
        name:'AVonmore notice of AGM',
        path:'assets/pdf/shareholders/notice of AGM_ACMs.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2018-19',
    files: [
      {
        name:'Out Come & Proceeding Of Annual General Meeting',
        path:'assets/pdf/shareholders/acms_proceedings.pdf'
      },
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/avonmore_bookclosure.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/avonmore_publication.pdf'
      },
      {
        name:'AVonmore notice of AGM',
        path:'assets/pdf/shareholders/AVonmore _notice of AGM.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2017-18',
    files: [
      {
        name:'Out Come & Proceeding Of Annual General Meeting',
        path:'assets/pdf/shareholders/ACMS_BSE_17.pdf'
      }
    ]
  },
  {
    title:'Financial Year 2016-17',
    files: [
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/shareholders_Meetings.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/website_Acms_16.pdf'
      },
      {
        name:'Out Come & Proceeding Of Annual General Meeting',
        path:'assets/pdf/shareholders/website_ACMs_roceeding.pdf'
      },
    ]
  },
]

files4 = [
  {
    title:'Financial Year 2022-23',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/sar_acms_june2022.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/sar_acms_sep2022.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/rscardec22.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/rscar_acms_march23.pdf'
      }
    ]
  },
  {
    title:'Financial Year 2021-22',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_ACMS_june2021.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/acms_RSCAR_sep21.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_ACMS_dec21.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/rscar_acms_march2022.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2020-21',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/RAR_ACMS_30.06.2020.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/ACMS_SCAR_sep2020.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/ACMS_SCAR_sep2020.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_ACMS (1).pdf'
      },
    ]
  },
  {
    title:'Financial Year 2019-20',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/RSCAR.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/acms_SAR.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_ACMS_jan20.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/RAR ACMS_final 31.03.2020.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2018-19',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/Avonmore_SAR_sw.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/ACMS_SAR (1).pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/acms_SAr19.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/reconsiliation of share capital_mar.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2017-18',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_AVONMORE_jul17.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/ACMS_SAR_17.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/Avonmore_SAR_18.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_march18_Q4.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2016-17',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'/'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_acms_WEBSITE.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/sar_ACMs.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/sar_ACMS_website_Mar17.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2015-16',
    files:[
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/reconciliation_of_share_Q4.pdf'
      },
      {
        name:'Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/reconciliation_of_share_Q3.pdf'
      },
    ]
  },
]

files5 = [
  {
    title:'Financial Year 2022-23',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/IC_june2022.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/IC.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/IC_Dec2022.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/IC_acms_march2023.pdf'
      }
    ]
  },
  {
    title:'Financial Year 2021-22',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/acms_compliant.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_acms_sep21.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_Acms_dec21.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_mrach22_Acms.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2020-21',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/Investor Complaints 30.06.2020.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/AVONMORE_COMPLAINT_sep2020.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/ACMS_complaint_dec2020.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_acms_march2021.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2019-20',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/ACMS_complaint.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/ACMS_complaint_OCT19.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/acms_complaint_jan20.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/Investor Complaints 31.03.2020.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2018-19',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/acms_complaint1819.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/compliance_ACMs.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/ACMS_ComplaintJan19.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_ACMS_mar.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2017-18',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_website_avonmore_Jul17.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_website_avonmore1718.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/acms_Complaint_DEC.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'/'
      },
    ]
  },
  {
    title:'Financial Year 2016-17',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/website_ACMS.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/website_avonmore.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/BSE_Complaint.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/complaintstatus_ACMs_MAR17.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2015-16',
    files:[
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/Q3_Investors_Complaint.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/Q3_Investors_Complaint_Q4.pdf'
      },
    ]
  },
]

files6 = [
  [
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
  
];

files7 = [
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
  ],
  [
    {
      name:'TRP Social Consultants Pvt Ltd. 2017-18',
      path:'assets/pdf/financials/08 TRP Social Consultants Signed BS FY 17-18.pdf'
    },
  ],
]
}
