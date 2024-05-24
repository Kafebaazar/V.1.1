function ChangeAccountIcon(pos)
{
    var icon =document.getElementById('Account_icon');
    switch (pos) 
        {
            case 'In':
                {
                    icon.src ="../icon/User-White.png";
                    break;
                }
            case 'Out':
                {
                    icon.src ="../icon/User-Blue.png";
                    break;
                }
        }
}

function TabFocuse (tab)
{
// Get Tabs
var TabHome = document.getElementById("TabHome");
var TabCategory = document.getElementById("TabCategory");
var TabWebLog = document.getElementById("TabWebLog");
var TabTraining = document.getElementById("TabTraining");
var TabAboutUs = document.getElementById("TabAboutUs");
// Switch on tab 

switch(tab)
    {
        case "Home":
            {
                TabHome.classList.add("TabActive");
                TabCategory.classList.remove("TabActive");
                TabWebLog.classList.remove("TabActive");
                TabTraining.classList.remove("TabActive");
                TabAboutUs.classList.remove("TabActive");
                break;
            }
        case "Category":
            {
                TabHome.classList.remove("TabActive");
                TabCategory.classList.add("TabActive");
                TabWebLog.classList.remove("TabActive");
                TabTraining.classList.remove("TabActive");
                TabAboutUs.classList.remove("TabActive");
                break;
            }
        case "WebLog":
            {
                TabHome.classList.remove("TabActive");
                TabCategory.classList.remove("TabActive");
                TabWebLog.classList.add("TabActive");
                TabTraining.classList.remove("TabActive");
                TabAboutUs.classList.remove("TabActive");
                break;
            }
        case "Training":
            {
                TabHome.classList.remove("TabActive");
                TabCategory.classList.remove("TabActive");
                TabWebLog.classList.remove("TabActive");
                TabTraining.classList.add("TabActive");
                TabAboutUs.classList.remove("TabActive");
                break;
            }
        
        case "AboutUs":
            {
                TabHome.classList.remove("TabActive");
                TabCategory.classList.remove("TabActive");
                TabWebLog.classList.remove("TabActive");
                TabTraining.classList.remove("TabActive");
                TabAboutUs.classList.add("TabActive");
                break;
            }
    }
}