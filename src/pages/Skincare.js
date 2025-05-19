import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Skincare.css';

const Skincare = () => {
  return (
    <div className="skincare-container">
      <h1 className="page-title">Skincare</h1>
      <section className="section">
        <h2 className="section-title">My Favorite Products</h2>
        <div className="products-carousel">
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'url(/images/skin1004.jpg)' }}></div>
            <h3 className="product-title">Skin1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+</h3>
            <p className="product-description">
              A lightweight, non-greasy sunscreen with centella asiatica and hyaluronic acid for soothing hydration and broad-spectrum UV protection.
            </p>
            <a href="https://www.yesstyle.com/en/tcuc.CAD/coc.CA/info.html/pid.1121503383" className="product-link" target="_blank" rel="noopener noreferrer">
              View Product →
            </a>
          </div>
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'url(/images/toleraine.jpg)' }}></div>
            <h3 className="product-title">La Roche-Posay Toleriane Dermo-Cleanser</h3>
            <p className="product-description">
              A gentle, soap-free cleanser for sensitive skin that removes makeup and impurities while hydrating with glycerin and thermal spring water.
            </p>
            <a href="https://www.laroche-posay.ca/en_CA/face-care/face-skin-concerns/skincare-for-dry-skin/toleriane-dermo-cleanser/toleriane-dermo-cleanser.html" className="product-link" target="_blank" rel="noopener noreferrer">
              View Product →
            </a>
          </div>
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'url(/images/cereve.png)' }}></div>
            <h3 className="product-title">CeraVe Resurfacing Retinol Serum</h3>
            <p className="product-description">
              A lightweight serum with retinol and ceramides to reduce the appearance of pores and post-acne marks while supporting the skin barrier.
            </p>
            <a href="https://well.ca/products/cerave-resurfacing-retinol-serum_215757.html" className="product-link" target="_blank" rel="noopener noreferrer">
              View Product →
            </a>
          </div>
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'url(/images/eye.jpg)' }}></div>
            <h3 className="product-title">Terez & Honor Under Eye Patches</h3>
            <p className="product-description">
              Korean skincare eye patches that hydrate and reduce puffiness, infused with nourishing ingredients for a refreshed under-eye area.
            </p>
            <a href="https://www.amazon.ca/Under-Eye-Patches-Korean-Skincare/dp/B0DX4CBSVS" className="product-link" target="_blank" rel="noopener noreferrer">
              View Product →
            </a>
          </div>
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'url(/images/repair.webp)' }}></div>
            <h3 className="product-title">First Aid Beauty Ultra Repair Cream</h3>
            <p className="product-description">
              An intensely hydrating cream for dry, distressed skin, formulated with colloidal oatmeal and shea butter to soothe and repair.
            </p>
            <a href="https://www.sephora.com/product/ultra-repair-cream-intense-hydration-P381145?skuId=1466762" className="product-link" target="_blank" rel="noopener noreferrer">
              View Product →
            </a>
          </div>
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'ur[](https://via.placeholder.com/200?text=Arazlo)' }}></div>
            <h3 className="product-title">Arazlo (Prescription Only)</h3>
            <p className="product-description">
              A retinoid cream for acne treatment, helping to unclog pores and reduce inflammation. Consult a dermatologist to obtain.
            </p>
          </div>
        </div>
      </section>
      <AppointmentForm service="Skincare Consultation" />
    </div>
  );
};

export default Skincare;