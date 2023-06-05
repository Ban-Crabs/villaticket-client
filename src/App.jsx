import style from "./App.module.scss";
import imgBbPlayer from "./assets/image-bb-player.png";
import cardImage from "./assets/yankees-mets.jpg";

function App() {

  return (
    <>
      {/* TOP SECTION */}
      <div className={style["top-section"]}>
        <div className={style["top-section-container"]}>
          <div className={style["top-left-section"]}>
            <img src={imgBbPlayer} alt="img-bb-player" />
          </div>
          <div className={style["top-right-section"]}>
            <h1 className={style["landing-text-title"]}>
              <span className={style["title"]}>
                Score MLB <br /> Playoff Tickets! <br />
              </span>
              <span className={style["span1"]}> Buy Tickets, Earn Rewards! </span>
            </h1>
          </div>
        </div>
        <div className={style["searchbar-container"]}>
          <form>
            <input type="text" placeholder="What are you looking for?"/>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      {/* MAIN TITLE */}
      <h1 className={style["upcoming"]}> Upcoming Events </h1>

      {/* CARDS */}
      <main>
        <div className={style["card"]}>
          <div className={style["card-container"]}>
            <div className={style["image-container"]}>
              <img src={cardImage} alt="image-card" />
            </div>
            <div className={style["card-body"]}>
              <div className={style["card-title-container"]}>
                <div className={style["event-date"]}>
                  <span>SEP</span>
                  <h2>18</h2>
                </div>
                <div className={style["card-title"]}>
                  <h3>New York Yankess @ Mets</h3>
                </div>
              </div>
              <div className={style["card-body"]}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste similique eius illum.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* LOAD MORE EVENTS */}
      <div className={style["load-more"]}>
        <button>Load More</button>
      </div>

      {/* FOOTER */}
      <div className={style["footer"]}>
        <div className={style["footer-container"]}>
          <div className={style["footer-title"]}> <b>villaticket</b> </div>
          <div className={style["footer-description"]}>

            <div className={style["footer-desctiption-links"]}>
              {/* Helpful Links */}
              <div className={style["list-container"]}>
                <h4>Helpful Links</h4>
                <ul>
                  <li>FAQ</li>
                  <li>My account</li>
                  <li>Contact Us</li>
                  <li>Refunds</li>
                </ul>
              </div>

              {/* About Us Links */}
              <div className={style["list-container"]}>
                <h4>About Us</h4>
                <ul>
                  <li>Who are we</li>
                  <li>Privacy Policy</li>
                  <li>Careers</li>
                  <li>Ticket Your Event</li>
                </ul>
              </div>

              {/* Social Links */}
              <div className={style["list-container"]}>
                <h4>Social</h4>
                <ul>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Email Us</li>
                </ul>
              </div>
            </div>

            <span className={style["copyright"]}> © 2023 Villa Ticket LLC. All Rights Reserved     Privacy   Accessibility   Terms   Site Map</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
