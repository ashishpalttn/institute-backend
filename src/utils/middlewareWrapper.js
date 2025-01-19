const selectiveAuth = (protectedRoutes, authMiddleware) => (req, res, next) => {
    const { method, path } = req;
  
    // Check if the route and method combination requires protection
    // Check if the route and method combination requires protection
    const isProtected = protectedRoutes.some(
        (route) => route.method === method && new RegExp(`^${route.path}$`).test(path)
      );
    
      if (isProtected) {
        return authMiddleware(req, res, next);// Apply authMiddleware for protected routes
      }
  
    next(); // Skip authMiddleware for unprotected routes
  };

  module.exports = selectiveAuth
  