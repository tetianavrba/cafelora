import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const drinks = data.result;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);
const btnElement = document.querySelector('.nav-btn');
const navMenu = document.querySelector('.rollout-nav');
const menuOtevrit = () => {
  btnElement.addEventListener('click', () => {
    navMenu.classList.toggle('nav-closed');
  });
  navMenu.addEventListener('click', () => {
    navMenu.classList.add('nav-closed');
  });
};

menuOtevrit();
