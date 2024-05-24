function load()
{
    ProfileChange('Info');
}
var GalleryTab = document.getElementById('ProfileGalleryTab');
var InfoTab = document.getElementById('ProfileInfoTab');
var GalleryView = document.getElementById('ProfileGalleryView');
var InfoView = document.getElementById('ProfileInfoView');
function ProfileChange(tab)
{
    switch (tab)
    {
        case 'Gallery':
        {
            InfoTab.classList.remove('TabActive');
            GalleryTab.classList.add('TabActive');
            // 
            InfoView.style.display = 'none';
            GalleryView.style.display = 'flex';
            break;
        }
        case 'Info':
        {
            InfoTab.classList.add('TabActive');
            GalleryTab.classList.remove('TabActive');
            // 
            GalleryView.style.display = 'none';
            InfoView.style.display = 'flex';
            break;
        }

    }
}