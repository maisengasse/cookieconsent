// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.setLogo("/static/mondschein/img/logo.svg");
cfg.disableCategory("targeting");
cc.run(cfg.getConfig());
