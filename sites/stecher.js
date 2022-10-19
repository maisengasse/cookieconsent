// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.setLogo("/static/stecher/img/logo.svg");
cfg.disableCategory("targeting");
cfg.addGoogleAnalytics();
//cfg.addMatomoAnalytics();
cc.run(cfg.getConfig());
