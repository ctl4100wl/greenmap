export default {
  async fetch(request, env) {
    // 1. The primary page you want people to visit
    const PRIMARY_URL = "https://ctl4100wl.github.io/greenm3423423ap/"; //404 test
    
    // 2. The backup link if your primary page goes 404
    const BACKUP_URL = "https://greenmap.asusmine1309.workers.dev/";

    const url = new URL(request.url);

    try {
      // Fast check to see if the GitHub page is up
      const response = await fetch(PRIMARY_URL, { method: "HEAD" });

      // If it's a 404 error, redirect to backup
      if (response.status === 404) {
        return Response.redirect(BACKUP_URL, 302);
      }

      // If everything is completely normal, let them through
      return Response.redirect(PRIMARY_URL, 302);

    } catch (error) {
      // Backup if GitHub itself crashes
      return Response.redirect(BACKUP_URL, 302);
    }
  }
};
