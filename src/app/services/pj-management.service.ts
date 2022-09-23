import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PjManagementService {
  projectsData=[{
    "id": 1,
    "details": "Anterior subluxation of left sternoclavicular joint",
    "planning": "Transfer Vagus Nerve to Facial Nerve, Open Approach",
    "risk": 1984,
    "files": "SemperEst.jpeg",
    "issues": 1,
    "obstacles": "Talane",
    "requirements": "Cornish Hen",
    "comments": "Khaki",
    "team": "Cold Light of Day, The"
  }, {
    "id": 2,
    "details": "Breakdown (mechanical) of implanted urinary sphincter",
    "planning": "Dilation of Uterus, Via Natural or Artificial Opening",
    "risk": 2006,
    "files": "SapienCumSociis.avi",
    "issues": 2,
    "obstacles": "Quimm",
    "requirements": "Pork - European Side Bacon",
    "comments": "Fuscia",
    "team": "Grimm Love (Rohtenburg)"
  }, {
    "id": 3,
    "details": "Poisoning by mineralocorticoids and antag, assault, sequela",
    "planning": "Drainage of Left Upper Arm, Perc Endo Approach, Diagn",
    "risk": 1993,
    "files": "MiNullaAc.xls",
    "issues": 3,
    "obstacles": "Leenti",
    "requirements": "Beer - Camerons Auburn",
    "comments": "Pink",
    "team": "Mouchette"
  }, {
    "id": 4,
    "details": "Oth fracture of third lumbar vertebra, init for clos fx",
    "planning": "Extirpate matter from Sup Mesent Art, Bifurc, Open",
    "risk": 2007,
    "files": "VelNullaEget.xls",
    "issues": 4,
    "obstacles": "Zazio",
    "requirements": "Soup - Campbells, Beef Barley",
    "comments": "Pink",
    "team": "Omagh"
  }, {
    "id": 5,
    "details": "Underdosing of drug/meds/biol subst, subs",
    "planning": "Change Drainage Device in Pancreatic Duct, External Approach",
    "risk": 1997,
    "files": "IdTurpis.mp3",
    "issues": 5,
    "obstacles": "Leexo",
    "requirements": "Wine - Alsace Riesling Reserve",
    "comments": "Yellow",
    "team": "Springfield Rifle"
  }];

  constructor() { }

  getProjectsData(): any{
    return this.projectsData;
  }
}
