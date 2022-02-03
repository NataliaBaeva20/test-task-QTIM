function Contact() {
  return (
    <div id="primary" className="content-area column full">
      <main id="main" className="site-main">
        <article id="post-39" className="post-39 page type-page status-publish hentry">
          <header className="entry-header">
            <h1 className="entry-title">Contact</h1>
          </header>

          <div className="entry-content">


            {/* <p><script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script></p> */}
            <div style={{ overflow: 'hidden', height: 380, width: '100%' }}>
              <div id='gmap_canvas' style={{ height: 380, width: '100%' }}></div>
              <div><a>embed google maps</a></div>
              {/* <style>#gmap_canvas img{max-width:none!important;background:none!important}</style> */}
            </div>
            {/* <p>
              {
                function init_map() { var myOptions = { zoom: 10, center: new google.maps.LatLng(3.4000221, -76.387969), mapTypeId: google.maps.MapTypeId.ROADMAP }; map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions); marker = new google.maps.Marker({ map: map, position: new google.maps.LatLng(3.4000221, -76.387969) }); infowindow = new google.maps.InfoWindow({ content: '<strong>Jane Photography</strong><br />Florida Beach<br />' }); google.maps.event.addListener(marker, 'click', function () { infowindow.open(map, marker); }); infowindow.open(map, marker); } 
                // google.maps.event.addDomListener(window, 'load', init_map);
              }
            </p> */}


            <div className="wpcmsdev-columns">
              <div className="column column-width-one-half">
                <h4>Quick Contact</h4>

                <form className="wpcf7" method="post" action="contact.php" id="contactform">
                  <div className="form">
                    <p><input type="text" name="name" placeholder="Name *" /></p>
                    <p><input type="text" name="email" placeholder="E-mail Address *" /></p>
                    <p><textarea name="comment" rows="3" placeholder="Message *"></textarea></p>
                    <input type="submit" id="submit" className="clearfix btn" value="Send" />
                  </div>
                </form>
                <div className="done">
                  Your message has been sent. Thank you!
                </div>

              </div>
              <div className="column column-width-one-half">
                <h4>Find Us: (888) 252 389 3571</h4>
                <p>
                  If you want to hire me or have any feedback or questions about our service in general, please send us a message by completing our enquiry form. It’s best to call though, someone we’ll always be there for you.
                </p>
                <p>
                  Monday – Friday: 9am to 5pm<br />
                  Saturday: 10am to 2pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

        </article>
      </main>

    </div>
  );
}

export default Contact;