export const Footer = () => {


  
  return (
    <div className="ps-footer">
      <div className="ps-footer__dati">
        <div className="ps-footer__dati__content">
          <div className="ps-footer__dati__content--left">
            <div className="ps-footer__dati__title">THE MUSEUM</div>
            <div className="ps-footer__dati__maps"><a href="#nolink">Via Sant Ottavio, 44 - 10126 Torino</a></div>
            <div className="ps-footer__dati__mainpartner">MAIN<br />PARTNER</div>
            <div className="ps-footer__dati__social">
              <a href="#nolink" className="ps-footer__dati__social__icon ps-footer__dati__social__icon--facebook"><span className="ps-hide">Facebook</span></a>
              <a href="#nolink" className="ps-footer__dati__social__icon ps-footer__dati__social__icon--twitter"><span className="ps-hide">Facebook</span></a>
              <a href="#nolink" className="ps-footer__dati__social__icon ps-footer__dati__social__icon--facebook"><span className="ps-hide">Facebook</span></a>
              <a href="#nolink" className="ps-footer__dati__social__icon ps-footer__dati__social__icon--instagram"><span className="ps-hide">Facebook</span></a>
              <a href="#nolink" className="ps-footer__dati__social__icon ps-footer__dati__social__icon--facebook"><span className="ps-hide">Facebook</span></a>
            </div>
          </div>
          <div className="ps-footer__dati__content--right">
            <div className="ps-footer__dati__legal">
              <ul>
                <li><a href="#nolink">STAMPA</a></li>
                <li><a href="#nolink">STATUTO E CODICE ETICO</a></li>
                <li><a href="#nolink">PRIVACY</a></li>
              </ul>
            </div>
            <div className="ps-footer__dati__telefono">011.0062713</div>
            <div className="ps-footer__dati__mail"><a href="mailto:info@themuseum.it">info@themuseum.it</a></div>
          </div>
        </div>
      </div>
      <div className="ps-footer__newsletter">
        <div className="ps-footer__newsletter__content">
          <div className="ps-footer__newsletter__title">Resta sempre aggiornato su mostre, workshop ed eventi</div>
          <div className="ps-footer__newsletter__input">
            <div className="ps-footer__newsletter__input__element">
              <input type="text" name="newsletter-text" placeholder="email" />
            </div>
          </div>
          <div className="ps-footer__newsletter__checkbox">
            <div className="ps-footer__newsletter__checkbox__element">
              <input type="radio" id="newsletter" name="newsletter" />
              <label htmlFor="newsletter">Accetto i termini e condizioni</label>
            </div>
          </div>
          <div className="ps-footer__newsletter__link">
            <a href="#nolink" className="ps-footer__newsletter__link__element">iscriviti alla newsletter</a>
          </div>
        </div>
      </div>
      <div className="ps-footer__copyright">
        <div className="ps-footer__copyright__content">
          <div className="ps-footer__copyright__content--left">2020 THE MUSEUM®</div>
          <div className="ps-footer__copyright__content--right">Publicis Sapient</div>
        </div>
      </div>
    </div>
  );
}