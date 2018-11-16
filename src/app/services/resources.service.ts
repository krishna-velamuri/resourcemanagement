import {Injectable, Inject} from '@angular/core';

@Injectable()
export class Resources {
    getResources():any {
        return [{
            'EmployeeName': 'Krishna Velamuri',
            'Rank':'A113',
            'Designation':'Project Lead',
            'YearsofExperience': 9.0,
            'PSID':10652106,
            'ValidPassport': true,
            'JoiningDate':'16/07/2018',
            'LTIExperience':4,
            'Certifications':['Microsoft Azure 70132'],
            'KeySkills':['C#','MVC.net','Asp.net','Sql Serer', 'WCF', 'Web API', 'Angular','Node js','Azure','Bootstrap'],
            'Billable': true,
            'CurrentProject': 'OSE',
            'ResourceAvailableDate':'10/01/2019',
            'Achievements':'',
            'Utilization':50.00
        },
        {
            'EmployeeName': 'Vinay Kandimalla',
            'Rank':'A113',
            'Designation':'Project Lead',
            'YearsofExperience': 9.0,
            'PSID': 10652108,
            'ValidPassport': true,
            'JoiningDate':'16/07/2018',
            'LTIExperience':4,
            'Certifications':['Microsoft Azure 70132'],
            'KeySkills':['C#','MVC.net','Asp.net','Sql Serer', 'WCF', 'Web API', 'Angular','Node js','Azure','Bootstrap'],
            'Billable': false,
            'CurrentProject': 'OSE',
            'ResourceAvailableDate':'10/01/2019',
            'Achievements':'',
            'Utilization':19.00
        },
        {
            'EmployeeName': 'Gowri Shankar Annipu',
            'Rank':'A113',
            'Designation':'Team Lead',
            'YearsofExperience': 8.0,
            'PSID': 10652109,
            'ValidPassport': true,
            'JoiningDate':'16/07/2018',
            'LTIExperience':4,
            'Certifications':['Microsoft Azure 70132'],
            'KeySkills':['C#','MVC.net','Asp.net','Sql Serer', 'WCF', 'Web API', 'Angular','Node js','Azure','Bootstrap'],
            'Billable': true,
            'CurrentProject': 'OSE',
            'ResourceAvailableDate':'10/01/2019',
            'Achievements':'',
            'Utilization':83.00
        }]
    }
}