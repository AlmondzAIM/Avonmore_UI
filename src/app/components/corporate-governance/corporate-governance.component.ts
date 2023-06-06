import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-governance',
  templateUrl: './corporate-governance.component.html',
  styleUrls: ['./corporate-governance.component.css']
})
export class CorporateGovernanceComponent implements OnInit {

  constructor() { }
  panelOpenState = false
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'columnA', 'columnB', 'columnC', 'columnD', 'columnE', 'columnF'];
  dataSource = [
    { position: 1, name: 'Mr. Govind Prasad Agrawal',
      columnA: 'Member', columnB: 'Chairman', columnC:'Member',columnD:'Member', columnE:'Member', columnF:'Member'},
    { position: 2, name: 'Mr. Ajay Kumar',
      columnA: 'Chairman', columnB: '', columnC:'Chairman',columnD:'', columnE:'Member', columnF:'Chairman'},
    { position: 3, name: 'Mr. Shyam Sunder Lal Gupta',
      columnA: 'Member', columnB: 'Member', columnC:'Member',columnD:'Member', columnE:'', columnF:''},
    { position: 4, name: 'Mr. Ashok Kumar Gupta',
      columnA: '', columnB: 'Member', columnC:'',columnD:'Chairman', columnE:'Chairman', columnF:'Member'},
    { position: 5, name: 'Mrs. Ashu Gupta',
      columnA: '', columnB: '', columnC:'',columnD:'', columnE:'', columnF:''},
    { position: 6, name: 'Mr. Bhupinder Singh',
      columnA: '', columnB: '', columnC:'',columnD:'', columnE:'', columnF:''},
  ]


  files = [
    {
      title:'Financial Year 2022-23',
      files:[
        {
          name:' Q1 (2022-23)',
          path:'assets/pdf/bod/cg_june2022.pdf'
        },
        {
          name:' Q2 (2022-23)',
          path:'assets/pdf/bod/CG_ACMS_nov.pdf'
        },
        {
          name:' Q3 (2022-23)',
          path:'assets/pdf/bod/CG_dec22.pdf'
        },
        {
          name:' Q4 (2022-23)',
          path:'assets/pdf/bod/CG_Acms_march2023.pdf'
        }
      ]
    },
    {
      title:'Financial Year 2021-22',
      files:[
        {
          name:'Q1 (2021-22)',
          path:'assets/pdf/bod/cg_acms_june2021.pdf'
        },
        {
          name:'Q2 (2021-22)',
          path:'assets/pdf/bod/CG_sep21.pdf'
        },
        {
          name:' Q3 (2021-22)',
          path:'assets/pdf/bod/CG_dec21_acms.pdf'
        },
        {
          name:' Q4 (2021-22)',
          path:'assets/pdf/bod/cg_march_2022_Acms_Q4.pdf'
        },    
      ]
    },
    {
      title:'Financial Year 2020-21',
      files:[
        {
          name:'Q1 (2020-21)',
          path:'assets/pdf/bod/CG_june20.pdf'
        },
        {
          name:'Q2 (2020-21)',
          path:'assets/pdf/bod/CG_sep20.pdf'
        },
        {
          name:'Q3 (2020-21)',
          path:'assets/pdf/bod/ACMS_CG_dec20.pdf'
        },
        {
          name:'Q4 (2020-21)',
          path:'assets/pdf/bod/CG_ACMS_march21.pdf'
        },
      ]
    },
    {
      title:'Financial Year 2019-20',
      files:[
        {
          name:'Q1 (2019-20)',
          path:'assets/pdf/bod/ACMS_CG_june2019.pdf'
        },
        {
          name:'Q2 (2019-20)',
          path:'assets/pdf/bod/CG_Avonmore.pdf'
        },
        {
          name:'Q3 (2019-20)',
          path:'assets/pdf/bod/CG_ACMS_jan2020.pdf'
        },
        {
          name:'Q4 (2019-20)',
          path:'assets/pdf/bod/CG.PDF'
        },
      ]
    },
    {
      title:'Financial Year 2018-19',
      files:[
        {
          name:'Q1 (2018-19)',
          path:'assets/pdf/bod/acms_CG1819.pdf'
        },
        {
          name:'Q2 (2018-19)',
          path:'assets/pdf/bod/cg_acms1819.pdf'
        },
        {
          name:'Q3 (2018-19)',
          path:'assets/pdf/bod/CG_ACMSJan19.pdf'
        },
        {
          name:'Q4 (2018-19)',
          path:'assets/pdf/bod/corporategovernance_Acms_mar.pdf'
        },
      ]
    },
    {
      title:'Financial Year 2017-18',
      files:[
        {
          name:'Q1 (2017-18)',
          path:'assets/pdf/bod/cg_jul17.pdf'
        },
        {
          name:'Q2 (2017-18)',
          path:'assets/pdf/bod/CG_Avonmore_17.pdf'
        },
        {
          name:'Q3 (2017-18)',
          path:'assets/pdf/bod/ACMS_CG_DEC.pdf'
        },
        {
          name:'Q4 (2017-18)',
          path:'assets/pdf/bod/'
        },
      ]
    },
    {
      title:'Financial Year 2016-17',
      files:[
        {
          name:'Q1 (2016-17)',
          path:'assets/pdf/bod/corporate_governance_Q1_1617.pdf'
        },
        {
          name:'Q2 (2016-17)',
          path:'assets/pdf/bod/WEBSITE_acms_cg.pdf'
        },
        {
          name:'Q3 (2016-17)',
          path:'assets/pdf/bod/cg_acms.pdf'
        },
        {
          name:'Q4 (2016-17)',
          path:'assets/pdf/bod/CG_ACMs_MAR17.pdf'
        },
      ]
    },
    {
      title:'Financial Year 2015-16',
      files:[
        {
          name:'Q2 (2015-16)',
          path:'assets/pdf/bod/corporate_governance_Q2_1516.pdf'
        },
        {
          name:'Q3 (2015-16)',
          path:'assets/pdf/bod/corporate_governance_Q3_1516.pdf'
        },
        {
          name:'Q4 (2015-16)',
          path:'assets/pdf/bod/corporate_governance_Q4_1516.pdf'
        },
      ]
    },
  ]

}
