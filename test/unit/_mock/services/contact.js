"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceContactMockData {
}
ServiceContactMockData.post = {
    company_name: 'Lim and Tan Family Clinic',
    person_name: 'Ms Siew Ling Ling',
    category: 'Staff',
    handphone: '90892020',
    telephone: '67324932',
    fax: '67493993',
    email: 'lingling@ltfc.com',
    address: '#10-90 Mount Elizabeth Specialist Center',
    notes: 'Please follow up',
    url: 'contact.com',
    change_log: [
        {
            user: 'doctor',
            timestamp: 1500000000000
        },
        {
            user: 'nurse',
            timestamp: 1500000000000
        }
    ]
};
ServiceContactMockData.missingReqField = {
    person_name: 'Ms Siew Ling Ling',
    category: 'Staff',
    handphone: '90892020',
    telephone: '67324932',
    fax: '67493993',
    email: 'lingling@ltfc.com',
    address: '#10-90 Mount Elizabeth Specialist Center',
    notes: 'Please follow up',
    url: 'contact.com',
    change_log: [
        {
            user: 'doctor',
            timestamp: 1500000000000
        },
        {
            user: 'nurse',
            timestamp: 1500000000000
        }
    ]
};
exports.ServiceContactMockData = ServiceContactMockData;
