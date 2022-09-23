import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventData =[{
    "id": 1,
    "details": "Disp fx of ant pro of l calcaneus, subs for fx w malunion",
    "agenda": "Restriction of Lower Esophagus, Open Approach",
    "expenses": 1996,
    "files": "Rhoncus.xls",
    "meetings": 1,
    "obstacles": "Skinder",
    "sponsorships": "Crab - Dungeness, Whole, live",
    "host": "Fuscia",
    "tasks": "0213187531",
    "attendence": false,
    "configuration": "Walcz College",
    "team": "Space Pirate Captain Harlock: Arcadia of My Youth (Waga seishun no Arcadia)"
  }, {
    "id": 2,
    "details": "Unspecified open wound of left elbow, initial encounter",
    "agenda": "Beam Radiation of Salivary Glands using Neutron Capture",
    "expenses": 2002,
    "files": "EuOrciMauris.mp3",
    "meetings": 2,
    "obstacles": "Thoughtblab",
    "sponsorships": "Cheese - Parmigiano Reggiano",
    "host": "Pink",
    "tasks": "6162514153",
    "attendence": true,
    "configuration": "Africa International University",
    "team": "Girl of Your Dreams, The (Niña de tus ojos, La)"
  }, {
    "id": 3,
    "details": "Corrosion of unspecified degree of unspecified knee",
    "agenda": "Bypass L Basilic Vein to Up Vein w Autol Sub, Perc Endo",
    "expenses": 1992,
    "files": "VestibulumAc.xls",
    "meetings": 3,
    "obstacles": "Dabfeed",
    "sponsorships": "Chicken Breast Wing On",
    "host": "Turquoise",
    "tasks": "6920639114",
    "attendence": true,
    "configuration": "University of Plymouth",
    "team": "The Oblong Box"
  }, {
    "id": 4,
    "details": "Partial traumatic amp of unsp forearm, level unsp, sequela",
    "agenda": "Neuromotor Development Assessment of Neuro Head, Neck",
    "expenses": 2006,
    "files": "Ut.avi",
    "meetings": 4,
    "obstacles": "Lajo",
    "sponsorships": "Sprite, Diet - 355ml",
    "host": "Red",
    "tasks": "2283814545",
    "attendence": true,
    "configuration": "University of Silesia",
    "team": "Day of the Doctor, The"
  }, {
    "id": 5,
    "details": "Sltr-haris Type I physl fx upr end rad, r arm, 7thP",
    "agenda": "Excision of Pineal Body, Open Approach",
    "expenses": 2004,
    "files": "Non.xls",
    "meetings": 5,
    "obstacles": "Browsezoom",
    "sponsorships": "Irish Cream - Baileys",
    "host": "Red",
    "tasks": "9009254372",
    "attendence": false,
    "configuration": "Louisiana State University Health Sciences Center New Orleans",
    "team": "Lawman"
  }];

  constructor() { }

  getEventData(): any{
    return this.eventData;
  }
}
