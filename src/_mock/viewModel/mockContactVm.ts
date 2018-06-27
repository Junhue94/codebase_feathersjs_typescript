
import * as moment from 'moment';
import { injectable } from 'inversify';

/**
 * Mock Contact View Model
 */
@injectable()
export class ContactMockVm {
    /**
     * Mock data from client
     */
    mockDoc() {
        return (hook) => {
            hook.data = {
                docs: {
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
                            timestamp: parseInt(moment().format('x'), 10)
                        },
                        {
                            user: 'nurse',
                            timestamp: parseInt(moment().format('x'), 10)
                        }
                    ]
                },
                clinicCode: 'dev_junhue'
            };
        };
    }
}