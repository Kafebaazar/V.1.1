var JobProfileTab = document.getElementById('JobProfileTab')
var UserInfoTab = document.getElementById('UserInfoTab');
var NotitficationTab = document.getElementById('NotitficationTab');
var CourseTab = document.getElementById('CourseTab');
var LicenseTab = document.getElementById('LicenseTab');
var SettingTab = document.getElementById('SettingTab');
var ManageAccountTab = document.getElementById('ManageAccountTab');
// 
var JobProfile = document.getElementById('JobProfile');
var UserInfo = document.getElementById('UserInfo');
var Notitfication = document.getElementById('Notitfication');
var Course = document.getElementById('Course');
var License = document.getElementById('License');
var Setting = document.getElementById('Setting');
var ManageAccount = document.getElementById('ManageAccount');
function AccountingTabs(Tab)
{
   switch (Tab)
   {
    case 'JobProfile' :
        {
            JobProfileTab.classList.add('text-primary');
            UserInfoTab.classList.remove('text-primary');
            NotitficationTab.classList.remove('text-primary');
            CourseTab.classList.remove('text-primary');
            LicenseTab.classList.remove('text-primary');
            SettingTab.classList.remove('text-primary');
            ManageAccountTab.classList.remove('text-primary');
            // 
            JobProfile.classList.remove('d-none');
            UserInfo.classList.add('d-none');
            Notitfication.classList.add('d-none');
            Course.classList.add('d-none');
            License.classList.add('d-none');
            Setting.classList.add('d-none');
            ManageAccount.classList.add('d-none');
            break;
        }
    case 'UserInfo' :
        {
            JobProfileTab.classList.remove('text-primary');
            UserInfoTab.classList.add('text-primary');
            NotitficationTab.classList.remove('text-primary');
            CourseTab.classList.remove('text-primary');
            LicenseTab.classList.remove('text-primary');
            SettingTab.classList.remove('text-primary');
            ManageAccountTab.classList.remove('text-primary');
            // 
            JobProfile.classList.add('d-none');
            UserInfo.classList.remove('d-none');
            Notitfication.classList.add('d-none');
            Course.classList.add('d-none');
            License.classList.add('d-none');
            Setting.classList.add('d-none');
            ManageAccount.classList.add('d-none');
            break;
        }
    case 'Notitfication' :
        {
            JobProfileTab.classList.remove('text-primary');
            UserInfoTab.classList.remove('text-primary');
            NotitficationTab.classList.add('text-primary');
            CourseTab.classList.remove('text-primary');
            LicenseTab.classList.remove('text-primary');
            SettingTab.classList.remove('text-primary');
            ManageAccountTab.classList.remove('text-primary');
            // 
            JobProfile.classList.add('d-none');
            UserInfo.classList.add('d-none');
            Notitfication.classList.remove('d-none');
            Course.classList.add('d-none');
            License.classList.add('d-none');
            Setting.classList.add('d-none');
            ManageAccount.classList.add('d-none');
            break;
        }
    case 'Course' :
        {
            JobProfileTab.classList.remove('text-primary');
            UserInfoTab.classList.remove('text-primary');
            NotitficationTab.classList.remove('text-primary');
            CourseTab.classList.add('text-primary');
            LicenseTab.classList.remove('text-primary');
            SettingTab.classList.remove('text-primary');
            ManageAccountTab.classList.remove('text-primary');
            // 
            JobProfile.classList.add('d-none');
            UserInfo.classList.add('d-none');
            Notitfication.classList.add('d-none');
            Course.classList.remove('d-none');
            License.classList.add('d-none');
            Setting.classList.add('d-none');
            ManageAccount.classList.add('d-none');
            break;
        }
    case 'License' :
        {
            JobProfileTab.classList.remove('text-primary');
            UserInfoTab.classList.remove('text-primary');
            NotitficationTab.classList.remove('text-primary');
            CourseTab.classList.remove('text-primary');
            LicenseTab.classList.add('text-primary');
            SettingTab.classList.remove('text-primary');
            ManageAccountTab.classList.remove('text-primary');
            // 
            JobProfile.classList.add('d-none');
            UserInfo.classList.add('d-none');
            Notitfication.classList.add('d-none');
            Course.classList.add('d-none');
            License.classList.remove('d-none');
            Setting.classList.add('d-none');
            ManageAccount.classList.add('d-none');
            break;
        }
    case 'Setting' :
        {
            JobProfileTab.classList.remove('text-primary');
            UserInfoTab.classList.remove('text-primary');
            NotitficationTab.classList.remove('text-primary');
            CourseTab.classList.remove('text-primary');
            LicenseTab.classList.remove('text-primary');
            SettingTab.classList.add('text-primary');
            ManageAccountTab.classList.remove('text-primary');
            // 
            JobProfile.classList.add('d-none');
            UserInfo.classList.add('d-none');
            Notitfication.classList.add('d-none');
            Course.classList.add('d-none');
            License.classList.add('d-none');
            Setting.classList.remove('d-none');
            ManageAccount.classList.add('d-none');
            break;
        }
    case 'ManageAccount' :
        {
            JobProfileTab.classList.remove('text-primary');
            UserInfoTab.classList.remove('text-primary');
            NotitficationTab.classList.remove('text-primary');
            CourseTab.classList.remove('text-primary');
            LicenseTab.classList.remove('text-primary');
            SettingTab.classList.remove('text-primary');
            ManageAccountTab.classList.add('text-primary');
            // 
            JobProfile.classList.add('d-none');
            UserInfo.classList.add('d-none');
            Notitfication.classList.add('d-none');
            Course.classList.add('d-none');
            License.classList.add('d-none');
            Setting.classList.add('d-none');
            ManageAccount.classList.remove('d-none');
            break;
        }
   } 
}
function Load()
{
    AccountingTabs('JobProfile');
}