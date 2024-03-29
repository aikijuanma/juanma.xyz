////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function hiddenCode() {

    var kkeys = [];
    var konami = '38,38,40,40,37,39,37,39,66,65'; // up, up, down, down, left, right, left, right, b, a

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $(document).keydown(function(e) {
      kkeys.push(e.keyCode);
      if (kkeys.toString().indexOf(konami) >= 0) {
        kkeys = [];
        window.location.href = 'https://tonymoly.us/collections/cats-purrfect';
      }
    });
  }

  function randomFavicon() {

    var something = new Array(
      '1533927', // Bleach No Chlorine
      '1533928', // Bleach
      '1533929', // Drip Drying
      '1533930', // Chemical Cleaning
      '1533931', // Dry Flat
      '1533932', // No Dry Cleaning
      '1533933', // Drying
      '1533934', // Line Dry
      '1533935', // Hand Wash
      '1533936', // Ironing Low Temp
      '1533937', // Ironing High Temp
      '1533938', // Ironing Medium Temp
      '1533939', // Very Gentle Wash
      '1533940', // Ironing
      '1533941', // No Bleaching
      '1533942', // Wash Low Temp
      '1533943', // Gentle Wash
      '1533944', // Wash High Temp
      '1533945', // No Ironing
      '1533946', // No Wash
      '1533947', // Tumble Dry Medium Temp
      '1533948', // Tumble Dry Low Temp
      '1533949', // No Tumble Dry
      '1533950', // Tumble Dry High Temp
      '1533951', // Wash Medium Temp
      '1533952', // Tumble Dry
      '1533953', // Tumble Dry
      '1533954'  // Washing
    ),
    icon = something[Math.floor( Math.random() * something.length )];

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    var appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.sizes = '180x180';
    appleTouchIcon.href = window.location.origin + '/laundry-care-symbols/' + icon + '/apple-touch-icon.png';
    document.getElementsByTagName('head')[0].appendChild(appleTouchIcon);

    var favicon32x32 = document.createElement('link');
    favicon32x32.rel = 'icon';
    favicon32x32.type = 'image/png';
    favicon32x32.sizes = '32x32';
    favicon32x32.href = window.location.origin + '/laundry-care-symbols/' + icon + '/favicon-32x32.png';
    document.getElementsByTagName('head')[0].appendChild(favicon32x32);

    var favicon16x16 = document.createElement('link');
    favicon16x16.rel = 'icon';
    favicon16x16.type = 'image/png';
    favicon16x16.sizes = '16x16';
    favicon16x16.href = window.location.origin + '/laundry-care-symbols/' + icon + '/favicon-16x16.png';
    document.getElementsByTagName('head')[0].appendChild(favicon16x16);

    var manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = window.location.origin + '/laundry-care-symbols/' + icon + '/site.webmanifest';
    document.getElementsByTagName('head')[0].appendChild(manifest);

    var safariPinnedTab = document.createElement('link');
    safariPinnedTab.rel = 'mask-icon';
    safariPinnedTab.href = window.location.origin + '/laundry-care-symbols/' + icon + '/safari-pinned-tab.svg';
    safariPinnedTab.color = '#000000';
    document.getElementsByTagName('head')[0].appendChild(safariPinnedTab);

    var appleMobileWebAppTitle = document.createElement('meta');
    appleMobileWebAppTitle.name = 'apple-mobile-web-app-title';
    appleMobileWebAppTitle.content = '$&amp;@#%!';
    document.getElementsByTagName('head')[0].appendChild(appleMobileWebAppTitle);

    var applicationName = document.createElement('meta');
    applicationName.name = 'application-name';
    applicationName.content = '$&amp;@#%!';
    document.getElementsByTagName('head')[0].appendChild(applicationName);

    var msapplicationTileColor = document.createElement('meta');
    msapplicationTileColor.name = 'msapplication-TileColor';
    msapplicationTileColor.content = '#000000';
    document.getElementsByTagName('head')[0].appendChild(msapplicationTileColor);

    var msapplicationConfig = document.createElement('meta');
    msapplicationConfig.name = 'msapplicationConfig';
    msapplicationConfig.content = window.location.origin + '/laundry-care-symbols/' + icon + '/browserconfig.xml';
    document.getElementsByTagName('head')[0].appendChild(msapplicationConfig);

    var themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#ffffff';
    document.getElementsByTagName('head')[0].appendChild(themeColor);
  }

  function replacePilcrow() {

    $('body').html($('body').html().replace(/\¶/g, '<span class="pilcrow"></span>'));
  }

  function revealContent() {

    $('.page').removeClass('hide').addClass('fadeIn');
  }

  function switchLanguage() {

    $('*[href="#ca"], *[href="#en"], *[href="#es"], *[href="#jp"]').attr('role', 'button');

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="#ca"]').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'ca').attr('lang', 'ca');
      $('*[lang="ca"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="en"], *[lang="es"], *[lang="jp"]').not('html').removeClass('show').addClass('hide');

      newPageTitle = 'Juanma Pérez Rabasco <hello@juanma.xyz>';
      document.title = newPageTitle;
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="#en"]').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'en').attr('lang', 'en');
      $('*[lang="en"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="es"], *[lang="jp"]').not('html').removeClass('show').addClass('hide');

      newPageTitle = 'Juanma Pérez Rabasco <hello@juanma.xyz>';
      document.title = newPageTitle;
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="#es"]').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'es').attr('lang', 'es');
      $('*[lang="es"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="en"], *[lang="jp"]').not('html').removeClass('show').addClass('hide');

      newPageTitle = 'Juanma Pérez Rabasco <hello@juanma.xyz>';
      document.title = newPageTitle;
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="#jp"]').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'jp').attr('lang', 'jp');
      $('*[lang="jp"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="en"], *[lang="es"]').not('html').removeClass('show').addClass('hide');

      newPageTitle = 'フアンマ・ペレス・ラバスコ <hello@juanma.xyz>';
      document.title = newPageTitle;
    });
  }

  function yellowIsTheWarmestColour() {

    $('.pilcrow').click(function() {
      $('body').toggleClass('bbb-bg');
      $('.page').toggleClass('aaa-bg');
      $('.pilcrow').toggleClass('bbb');
      $('main').toggleClass('ccc');
      $('main a').toggleClass('ddd');
    });
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

jQuery(document).ready(function($) {

  hiddenCode();
  randomFavicon();
  replacePilcrow();
  revealContent();
  switchLanguage();
  yellowIsTheWarmestColour();

  console.log('↑ ↑ ↓ ↓ ← → ← → b a');
});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
