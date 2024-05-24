var Categories = document.getElementById('categories_fiter');
var City = document.getElementById('city_filter');
var Certificate = document.getElementById('certificate_filter');
var Categories_img = document.getElementById('categories_fiter_img');
var City_img = document.getElementById('city_filter_img');
var Certificate_img = document.getElementById('certificate_filter_img');
var Categories_Open = false;
var City_Open = false;
var Certificate_Open = false;
// 
var Popular = document.getElementById('Popular');
var Newest = document.getElementById('Newest');
var Closest = document.getElementById('Closest');
var Offers = document.getElementById('Offers');
// 
function FilterOpen (filter)
{   
    switch (filter)
    {
        case 'Categories' :
            {
                if(!Categories_Open)
                {
                    City.classList.remove('filter-open');
                    Certificate.classList.remove('filter-open');
                    Categories.classList.add('filter-open');
                    // 
                    Categories_img.src="../icon/CloseFilter.png";
                    City_img.src="../icon/MoreFilter.png";
                    Certificate_img.src="../icon/MoreFilter.png";
                    Categories_Open = true;
                }
                else if(Categories_Open)
                {
                    Categories.classList.remove('filter-open');
                    Categories_img.src="../icon/MoreFilter.png";
                    Categories_Open =false;
                } 
            break;   
            }
        case 'City' :
            {
                if(!City_Open)
                {
                    Categories.classList.remove('filter-open');
                    Certificate.classList.remove('filter-open');
                    City.classList.add('filter-open');
                    // 
                    Categories_img.src="../icon/MoreFilter.png";
                    City_img.src="../icon/CloseFilter.png";
                    Certificate_img.src="../icon/MoreFilter.png";
                    City_Open=true;
                }
                else if(City_Open)
                {
                    City.classList.remove('filter-open');
                    City_img.src="../icon/MoreFilter.png";
                    City_Open=false;
                }
                break;
            }
        case 'Certificate' :
            {
                if(!Certificate_Open)
                {
                    Categories.classList.remove('filter-open');
                    City.classList.remove('filter-open');
                    Certificate.classList.add('filter-open');
                    // 
                    Categories_img.src="../icon/MoreFilter.png";
                    City_img.src="../icon/MoreFilter.png";
                    Certificate_img.src="../icon/CloseFilter.png";
                    Certificate_Open=true;
                }
                else if(Certificate_Open)
                {
                    Certificate.classList.remove('filter-open');
                    Certificate_img.src="../icon/MoreFilter.png";
                    Certificate_Open=false;
                }
                break;
            }
    }

}

function SortChange (Sort)
{
    switch (Sort)
    {   
        case 'Popular' :
        {
            Popular.classList.add('TabActive');
            Newest.classList.remove('TabActive');
            Closest.classList.remove('TabActive');
            Offers.classList.remove('TabActive');
            break;
        }
        case 'Newest' :
        {
            Popular.classList.remove('TabActive');
            Newest.classList.add('TabActive');
            Closest.classList.remove('TabActive');
            Offers.classList.remove('TabActive');
            break;
        }
        case 'Closest' :
        {
            Popular.classList.remove('TabActive');
            Newest.classList.remove('TabActive');
            Closest.classList.add('TabActive');
            Offers.classList.remove('TabActive');
            break;
        }
        case 'Offers' :
        {
            Popular.classList.remove('TabActive');
            Newest.classList.remove('TabActive');
            Closest.classList.remove('TabActive');
            Offers.classList.add('TabActive');
            break;
        }
    }
}