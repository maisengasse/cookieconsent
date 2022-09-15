// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.setLogo("/static/mondschein/img/logo.svg");
cfg.addGoogleAnalytics();
cc.run(cfg.getConfig());
