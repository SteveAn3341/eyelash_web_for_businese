
import "../App.css"
export const Contact = () =>{
return(
  <div className="contact_page">

<h1 className ='contact'> CONTACT US </h1>
<div className="iframe-container">
  <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3993.987438891508!2d-117.99016746797899!3d33.931375834127586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d4cdd9905e69%3A0x395bd3d2726524ec!2s11135%201st%20Ave%2C%20Whittier%2C%20CA%2090603!5e0!3m2!1sen!2sus!4v1702568208118!5m2!1sen!2sus" 
  width="600" height="450" style={{border:0}} 
  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe></div>
<div className="bottom">
        <p>11135 1st Ave,<br/>
        Whittier, CA 90603<br/> 
        562-315-5517<br/> 
        ohwaxingstudio@gmail.com</p>
    </div>
</div>
)
}