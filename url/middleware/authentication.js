function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
      const tokenCookieValue = req.cookies[cookieName];
  
      if (!tokenCookieValue) {
       
        return res.status(401).json({ message: 'Authentication required' });
      }
      next();
    
    }
  }
  