// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.setLogo("/static/schadenbauer/img/logo.svg");
cfg.disableCategory("targeting");
cfg.addGoogleAnalytics();
cc.run(cfg.getConfig());
