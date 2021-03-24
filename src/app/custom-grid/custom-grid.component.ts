import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomGridComponent implements AfterViewInit, OnInit {
  @ViewChild('grid', { static: false }) grid: jqxGridComponent;

  @ViewChildren('customInput') inputs: QueryList<jqxInputComponent>;
  @ViewChildren('parent') parents: QueryList<ElementRef>;

  // columns = [
  //   { text: 'Id', datafield: 'id' },
  //   { text: 'Name', datafield: 'name' }
  // ];

  gridCheck: boolean = true;
  navItems;

  columns = [
    { text: 'Name', datafield: 'id', width: '30%' },
    { text: 'Value', datafield: 'name', width: '70%' }
  ];

  elementCols = [
    { text: 'Name', datafield: 'id', width: '30%' },
    { text: 'Value', datafield: 'name', width: '70%' }
  ];

  colorCols = [
    { text: 'Shorthand', datafield: 'id', width: '30%' },
    { text: 'Full Name', datafield: 'name', width: '70%' }
  ];


  sourceInput = ["Custom 1", "Custom 2"];

  data = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 21, name: 'Silicon 2' },
    { id: 22, name: 'Phosphorus 2' },
    { id: 23, name: 'Sulfur 2' },
    { id: 24, name: 'Chlorine 2' },
    { id: 25, name: 'Argon 2' },
    { id: 26, name: 'Potassium 2' },
    { id: 27, name: 'Calcium 2' },
    { id: 'R', name: 'Red' },
    { id: 'O', name: 'Orange' },
    { id: 'Y', name: 'Yellow' },
    { id: 'G', name: 'Green' },
    { id: 'B', name: 'Blue' },
    { id: 'I', name: 'Indigo' },
    { id: 'V', name: 'Violet' },
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 21, name: 'Silicon 2' },
    { id: 22, name: 'Phosphorus 2' },
    { id: 23, name: 'Sulfur 2' },
    { id: 24, name: 'Chlorine 2' },
    { id: 25, name: 'Argon 2' },
    { id: 26, name: 'Potassium 2' },
    { id: 27, name: 'Calcium 2' },
    { id: 31, name: 'Hydrogen' },
    { id: 32, name: 'Helium' },
    { id: 33, name: 'Lithium' },
    { id: 34, name: 'Beryllium' },
    { id: 35, name: 'Boron' },
    { id: 36, name: 'Carbon' },
    { id: 37, name: 'Nitrogen' },
    { id: 38, name: 'Oxygen' },
    { id: 39, name: 'Fluorine' },
    { id: 310, name: 'Neon' },
    { id: 311, name: 'Sodium' },
    { id: 312, name: 'Magnesium' },
    { id: 313, name: 'Aluminum' },
    { id: 314, name: 'Silicon' },
    { id: 315, name: 'Phosphorus' },
    { id: 316, name: 'Sulfur' },
    { id: 317, name: 'Chlorine' },
    { id: 318, name: 'Argon' },
    { id: 319, name: 'Potassium' },
    { id: 320, name: 'Calcium' },
    { id: 321, name: 'Silicon 2' },
    { id: 322, name: 'Phosphorus 2' },
    { id: 323, name: 'Sulfur 2' },
    { id: 324, name: 'Chlorine 2' },
    { id: 325, name: 'Argon 2' },
    { id: 326, name: 'Potassium 2' },
    { id: 327, name: 'Calcium 2' },
    { id: 41, name: 'Hydrogen' },
    { id: 42, name: 'Helium' },
    { id: 43, name: 'Lithium' },
    { id: 44, name: 'Beryllium' },
    { id: 45, name: 'Boron' },
    { id: 46, name: 'Carbon' },
    { id: 47, name: 'Nitrogen' },
    { id: 48, name: 'Oxygen' },
    { id: 49, name: 'Fluorine' },
    { id: 410, name: 'Neon' },
    { id: 411, name: 'Sodium' },
    { id: 412, name: 'Magnesium' },
    { id: 413, name: 'Aluminum' },
    { id: 414, name: 'Silicon' },
    { id: 415, name: 'Phosphorus' },
    { id: 416, name: 'Sulfur' },
    { id: 417, name: 'Chlorine' },
    { id: 418, name: 'Argon' },
    { id: 419, name: 'Potassium' },
    { id: 420, name: 'Calcium' },
    { id: 421, name: 'Silicon 2' },
    { id: 422, name: 'Phosphorus 2' },
    { id: 423, name: 'Sulfur 2' },
    { id: 424, name: 'Chlorine 2' },
    { id: 425, name: 'Argon 2' },
    { id: 426, name: 'Potassium 2' },
    { id: 427, name: 'Calcium 2' }
  ]

  data2 = [
    { id: 'R', name: 'Red' },
    { id: 'O', name: 'Orange' },
    { id: 'Y', name: 'Yellow' },
    { id: 'G', name: 'Green' },
    { id: 'B', name: 'Blue' },
    { id: 'I', name: 'Indigo' },
    { id: 'V', name: 'Violet' },
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 21, name: 'Silicon 2' },
    { id: 22, name: 'Phosphorus 2' },
    { id: 23, name: 'Sulfur 2' },
    { id: 24, name: 'Chlorine 2' },
    { id: 25, name: 'Argon 2' },
    { id: 26, name: 'Potassium 2' },
    { id: 27, name: 'Calcium 2' },
    { id: 31, name: 'Hydrogen' },
    { id: 32, name: 'Helium' },
    { id: 33, name: 'Lithium' },
    { id: 34, name: 'Beryllium' },
    { id: 35, name: 'Boron' },
    { id: 36, name: 'Carbon' },
    { id: 37, name: 'Nitrogen' },
    { id: 38, name: 'Oxygen' },
    { id: 39, name: 'Fluorine' },
    { id: 310, name: 'Neon' },
    { id: 311, name: 'Sodium' },
    { id: 312, name: 'Magnesium' },
    { id: 313, name: 'Aluminum' },
    { id: 314, name: 'Silicon' },
    { id: 315, name: 'Phosphorus' },
    { id: 316, name: 'Sulfur' },
    { id: 317, name: 'Chlorine' },
    { id: 318, name: 'Argon' },
    { id: 319, name: 'Potassium' },
    { id: 320, name: 'Calcium' },
    { id: 321, name: 'Silicon 2' },
    { id: 322, name: 'Phosphorus 2' },
    { id: 323, name: 'Sulfur 2' },
    { id: 324, name: 'Chlorine 2' },
    { id: 325, name: 'Argon 2' },
    { id: 326, name: 'Potassium 2' },
    { id: 327, name: 'Calcium 2' },
    { id: 41, name: 'Hydrogen' },
    { id: 42, name: 'Helium' },
    { id: 43, name: 'Lithium' },
    { id: 44, name: 'Beryllium' },
    { id: 45, name: 'Boron' },
    { id: 46, name: 'Carbon' },
    { id: 47, name: 'Nitrogen' },
    { id: 48, name: 'Oxygen' },
    { id: 49, name: 'Fluorine' },
    { id: 410, name: 'Neon' },
    { id: 411, name: 'Sodium' },
    { id: 412, name: 'Magnesium' },
    { id: 413, name: 'Aluminum' },
    { id: 414, name: 'Silicon' },
    { id: 415, name: 'Phosphorus' },
    { id: 416, name: 'Sulfur' },
    { id: 417, name: 'Chlorine' },
    { id: 418, name: 'Argon' },
    { id: 419, name: 'Potassium' },
    { id: 420, name: 'Calcium' },
    { id: 421, name: 'Silicon 2' },
    { id: 422, name: 'Phosphorus 2' },
    { id: 423, name: 'Sulfur 2' },
    { id: 424, name: 'Chlorine 2' },
    { id: 425, name: 'Argon 2' },
    { id: 426, name: 'Potassium 2' },
    { id: 427, name: 'Calcium 2' }
  ]

  source = {
    datatype: 'json',
    datafields: [
      { name: "id", type: "number" },
      { name: "name", type: "string" }
    ],
    localdata: []
  };

  DataAdapter: any = new jqx.dataAdapter(this.source);

  ngOnInit() {
    console.log("ngOnInit()", this);
    this.navItems = [
      { 'displayName': 'Home', 'url': 'home', 'openNewTab': false, 'roles': ['*'], 'childNavs': [] }, { 'displayName': 'Faim Metra', 'url': 'faim-metra', 'openNewTab': true, 'roles': ['*'], 'childNavs': [] }, { 'displayName': 'Custom Control', 'url': 'custom', 'openNewTab': false, 'roles': ['*'], 'childNavs': [{ 'displayName': 'Custom', 'url': 'custom', 'openNewTab': false, 'roles': ['*'] }, { 'displayName': 'JQX Custom Grid', 'url': 'custom/grid', 'openNewTab': true, 'roles': ['*'] }] }
    ];


  }

  ngAfterViewInit() {
    this.switchGrid();
  }

  isFirstLoad = true;
  selectedIndex = 0;

  switchGrid() {
    if (this.gridCheck) {
      this.columns = this.colorCols;
      this.source.localdata = this.data2;
    }
    else {
      this.columns = this.elementCols;
      
      this.source.localdata = this.data;
      
    }
    console.log(this.grid)
    this.grid.updatebounddata();
    this.gridCheck = !this.gridCheck;
  }

   
  
  
}
