import { DataBuilder } from '../data/DataBuilder.service';
import { HttpService } from '../helper/http.service';
import { AssignQuestions } from './assign-question/assign-question.test';
import { Dashboard } from './dashboard';
import { ManageApproval } from './manage-approvals/manage-approval';
import { ManageResponse } from './manage-response/manage-response.test';
import { PendingQuestion } from './manage-response/pending-question.test';

const bearerToken = ``;

const requestHeaders = {
  
}
const httpService = new HttpService();
export let options = {
   discardResponseBodies: true,
   scenarios: {

      dashboard: {
         executor: 'constant-arrival-rate',
         rate: 3,
         duration: '1m',
         preAllocatedVUs: 20,
         maxVUs: 20,
         exec: 'dashboard',
      }

   },
};

export function dashboard() {
   const db = new Dashboard(httpService);
   db.runAll(requestHeaders)
}