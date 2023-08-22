import "./Footer.css";
function Footer({ openPost, setOpenPost }) {
  return (
    <footer>
      <div className="footer-title" onClick={() => setOpenPost(!openPost)}>
        {openPost ? 'x' : '+'}
      </div>
    </footer>
  );
}

export default Footer;
