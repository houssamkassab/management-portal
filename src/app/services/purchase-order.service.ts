import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  orderData =[{
    "id": 1,
    "name": "Fintone",
    "type": "Andalax",
    "example": "edu.psu.Transcof",
    "information": "Bihoro"
  }, {
    "id": 2,
    "name": "Zathin",
    "type": "Hatity",
    "example": "com.go.Andalax",
    "information": "Ridder"
  }, {
    "id": 3,
    "name": "Regrant",
    "type": "Subin",
    "example": "com.nymag.Home Ing",
    "information": "Sanlei"
  }, {
    "id": 4,
    "name": "Daltfresh",
    "type": "Alpha",
    "example": "com.cafepress.Flowdesk",
    "information": "Cergy-Pontoise"
  }, {
    "id": 5,
    "name": "Pannier",
    "type": "Tres-Zap",
    "example": "gov.whitehouse.Kanlam",
    "information": "Marathon"
  }, {
    "id": 6,
    "name": "Cardguard",
    "type": "Ventosanzap",
    "example": "com.mysql.Zamit",
    "information": "Kangān"
  }, {
    "id": 7,
    "name": "Overhold",
    "type": "Treeflex",
    "example": "uk.co.webeden.Konklux",
    "information": "Sparwood"
  }, {
    "id": 8,
    "name": "Alphazap",
    "type": "Bitchip",
    "example": "com.businesswire.Cookley",
    "information": "Slutsk"
  }, {
    "id": 9,
    "name": "Solarbreeze",
    "type": "Konklux",
    "example": "com.mayoclinic.Voyatouch",
    "information": "Capalayan"
  }, {
    "id": 10,
    "name": "Zathin",
    "type": "Bitwolf",
    "example": "com.vistaprint.Quo Lux",
    "information": "Labinot-Mal"
  }];

  purchaseData=[{
    "id": 1,
    "name": "Flexidy",
    "type": "Latlux",
    "example": "edu.psu.Fintone",
    "information": "Huanghua"
  }, {
    "id": 2,
    "name": "Flexidy",
    "type": "Hatity",
    "example": "jp.ne.ocn.Greenlam",
    "information": "Chur"
  }, {
    "id": 3,
    "name": "Sub-Ex",
    "type": "Zaam-Dox",
    "example": "gov.nasa.Stringtough",
    "information": "Sokyryany"
  }, {
    "id": 4,
    "name": "Sonsing",
    "type": "Konklab",
    "example": "com.amazonaws.Cardguard",
    "information": "Karasuk"
  }, {
    "id": 5,
    "name": "Tempsoft",
    "type": "Daltfresh",
    "example": "com.163.Veribet",
    "information": "Antofagasta"
  }, {
    "id": 6,
    "name": "Y-Solowarm",
    "type": "Ronstring",
    "example": "edu.columbia.Latlux",
    "information": "Magaria"
  }, {
    "id": 7,
    "name": "Toughjoyfax",
    "type": "Bamity",
    "example": "com.shutterfly.Fix San",
    "information": "Sarirejo Satu"
  }, {
    "id": 8,
    "name": "Voyatouch",
    "type": "Lotlux",
    "example": "com.macromedia.Kanlam",
    "information": "Thị Trấn Mộc Châu"
  }, {
    "id": 9,
    "name": "Cookley",
    "type": "Bytecard",
    "example": "com.godaddy.Stringtough",
    "information": "Wojaszówka"
  }, {
    "id": 10,
    "name": "Holdlamis",
    "type": "Daltfresh",
    "example": "uk.co.timesonline.Latlux",
    "information": "Skelleftehamn"
  }, {
    "id": 11,
    "name": "Opela",
    "type": "Aerified",
    "example": "com.cbslocal.Sonair",
    "information": "Kyzyl-Oktyabr’skiy"
  }, {
    "id": 12,
    "name": "Cardguard",
    "type": "Konklux",
    "example": "com.canalblog.Mat Lam Tam",
    "information": "Atarodangwautu"
  }, {
    "id": 13,
    "name": "Bytecard",
    "type": "Stringtough",
    "example": "com.weather.Vagram",
    "information": "Zhonglong"
  }, {
    "id": 14,
    "name": "Sonsing",
    "type": "Namfix",
    "example": "es.google.Overhold",
    "information": "Espinheira"
  }, {
    "id": 15,
    "name": "Veribet",
    "type": "Lotstring",
    "example": "com.oracle.Redhold",
    "information": "Novalja"
  }, {
    "id": 16,
    "name": "Tresom",
    "type": "Konklux",
    "example": "com.cargocollective.Y-Solowarm",
    "information": "Rābigh"
  }, {
    "id": 17,
    "name": "Zamit",
    "type": "Holdlamis",
    "example": "com.patch.Holdlamis",
    "information": "Balzan"
  }, {
    "id": 18,
    "name": "Daltfresh",
    "type": "Stronghold",
    "example": "gov.usda.Gembucket",
    "information": "Wieniawa"
  }, {
    "id": 19,
    "name": "Tempsoft",
    "type": "Span",
    "example": "com.dropbox.Duobam",
    "information": "Maogou"
  }, {
    "id": 20,
    "name": "Keylex",
    "type": "Bitwolf",
    "example": "jp.geocities.Asoka",
    "information": "Sorodot"
  }];


  invoicesData=[{
    "id": 1,
    "name": "Greenlam",
    "type": "Bitchip",
    "example": "la.51.Tresom",
    "information": "La Cumbre"
  }, {
    "id": 2,
    "name": "Biodex",
    "type": "Lotlux",
    "example": "org.npr.Namfix",
    "information": "Balauring"
  }, {
    "id": 3,
    "name": "Domainer",
    "type": "Daltfresh",
    "example": "pl.google.Y-find",
    "information": "Sandur"
  }, {
    "id": 4,
    "name": "Stronghold",
    "type": "Aerified",
    "example": "com.tmall.Alphazap",
    "information": "Tatsuno"
  }, {
    "id": 5,
    "name": "Flexidy",
    "type": "Tres-Zap",
    "example": "com.over-blog.Fixflex",
    "information": "Guangyi"
  }];

  constructor() {

  }

  getOrderData(): any{
    return this.orderData;
  }

  getPurchaseData(): any{
    return this.purchaseData;
  }

  getInvoicesData(): any{
    return this.invoicesData;
  }
}
