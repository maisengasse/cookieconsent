// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.setLogo("/static/fflandeck/img/ff-landeck-logo-black.png");
cfg.disableCategory("targeting");
cfg.addMatomoAnalytics();
cc.run(cfg.getConfig());
