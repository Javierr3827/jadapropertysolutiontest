const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

function openDrawer(){
  if (!mobileMenu || !menuOverlay) return;
  mobileMenu.classList.add('open');
  menuOverlay.classList.add('open');
  document.body.classList.add('menu-open');
}
function closeDrawer(){
  if (!mobileMenu || !menuOverlay) return;
  mobileMenu.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.classList.remove('menu-open');
}
openMenu?.addEventListener('click', openDrawer);
closeMenu?.addEventListener('click', closeDrawer);
menuOverlay?.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', closeDrawer));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
