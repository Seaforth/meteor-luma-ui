Package.describe({
  summary: "Luma Pictures User Interface"
});

Package.on_use(function (api, where) {

  /* ===== Dependencies ===== */

  api.use([
    'standard-app-packages',
    'underscore',
    'iron-router',
    'coffeescript'
  ],[ 'client', 'server' ]);

  api.use([
    'ui',
    'templating',
    'spacebars',
    'blaze-layout',
    'jquery',
    'jquery-ui',
    'less'
  ], [ 'client' ]);

  /* ===== Exports ===== */

  api.export([
    'PageLayoutController',
    'FullPageLayoutController',
    'PackageLayoutController'
  ],[ 'client' ]);

  /* ===== Models ===== */
  api.add_files([
    'models/page.model.coffee'
  ],[ 'client','server' ]);

  /* ===== Routes ===== */
  api.add_files([
    'router/router.coffee'
  ], [ 'client','server' ]);

  /* ===== Controllers ===== */

  /* Page Layout */
  api.add_files([
    'router/page/page.controller.coffee',
    'router/page/page.layout.html',
    'router/page/page.layout.coffee'
  ], [ 'client' ]);

  /* Full Page Layout */
  api.add_files([
    'router/full_page/full_page.controller.coffee',
    'router/full_page/full_page.layout.html',
    'router/full_page/full_page.layout.coffee'
  ],[ 'client' ]);

  /* Package Page Layout */
  api.add_files([
    'router/package/package.controller.coffee'
  ],[ 'client' ]);

  /* ===== Components ===== */

  /* Common */
  api.add_files([
    'components/common/anchor/anchor.html',
    'components/common/anchor/anchor.coffee',
    'components/common/brand/brand.html',
    'components/common/icon/icon.html',
    'components/labels/label.html',
    'components/labels/badge.html'
  ],[ 'client' ]);

  /* page */
  api.add_files([
    'components/page_content/pageContainer.html',
    'components/page_content/pageContent.html'
  ], [ 'client' ]);

  /* navbar */
  api.add_files([
    'components/navbar/navbar.html',
    'components/navbar/navbarRight.html',
    'components/navbar/navbarHeader.html',
    'components/navbar/navbarToggle.html'
  ], [ 'client' ]);

  /* page header */
  api.add_files([
    'components/page_header/pageHeader.html',
    'components/page_header/pageTitle.html',
    'components/page_header/pageHeaderWidget.html'
  ], [ 'client' ]);

  /* Breadcrumbs */
  api.add_files([
    'components/breadcrumbs/breadcrumbs.html',
    'components/breadcrumbs/breadcrumbsLine.html'
  ], [ 'client' ]);

  /* sidebar */
  api.add_files([
    'components/sidebar/sidebar.html',
    'components/sidebar/sidebarToggle.html',
    'components/sidebar/sidebarToggle.coffee'
  ], [ 'client' ]);

  /* navigation */
  api.add_files([
    'components/navigation/navigation.html',
    'components/navigation/navigation.coffee'
  ], [ 'client' ]);

  /* Footer */
  api.add_files(['components/footer/footer.html'], [ 'client' ]);

  /* Panels */
  api.add_files(['components/panels/panels.html'],[ 'client' ]);

  /* Bootstrap JS */
  api.add_files([
    'components/bootstrap/js/transition.js',
    'components/bootstrap/js/alert.js',
    'components/bootstrap/js/button.js',
    'components/bootstrap/js/carousel.js',
    'components/bootstrap/js/collapse.js',
    'components/bootstrap/js/dropdown.js',
    'components/bootstrap/js/modal.js',
    'components/bootstrap/js/tooltip.js',
    'components/bootstrap/js/popover.js',
    'components/bootstrap/js/scrollspy.js',
    'components/bootstrap/js/tab.js',
    'components/bootstrap/js/affix.js'
  ], ['client']);

  api.add_files(['components/stats/stats.html'], ['client']);

  /* Moment */
  api.add_files([
    'components/moment/lib/moment.min.js',
    'components/moment/lib/moment.recur.js',
    'components/moment/lib/moment.range.js'
  ], 'client');

  /* Error Pages */
  api.add_files([
    'components/error_pages/loading.html',
    'components/error_pages/error_404.html'
  ],['client']);

  /* colorpicker */
  api.add_files('components/colorpicker/lib/colorpicker.js', 'client');

  /* collapsible */
  api.add_files('components/collapsible/lib/collapsible.min.js', 'client');

  /* fancybox */
  api.add_files('components/fancybox/lib/fancybox.min.js', 'client');

  /* full_calendar */
  api.add_files('components/full_calendar/lib/fullcalendar.min.js', 'client');

  /* jGrowl */
  api.add_files('components/jGrowl/lib/jgrowl.min.js', 'client');

  /* hover dropdown */
  api.add_files('components/hover_dropdown/lib/hover_dropdown.min.js', 'client');

  /* code_prettify */
  api.add_files('components/code_prettify/lib/prettify.js', 'client');

  /* timepicker */
  api.add_files('components/time_picker/lib/timepicker.min.js', 'client');

  /* charts */
  api.add_files([
    'components/charts/lib/flot/flot.js',
    'components/charts/lib/flot/flot.animator.min.js',
    'components/charts/lib/flot/flot.orderbars.js',
    'components/charts/lib/flot/flot.pie.js',
    'components/charts/lib/flot/flot.resize.min.js',
    'components/charts/lib/flot/flot.time.js',
    'components/charts/lib/sparkline/sparkline.min.js',
    'components/charts/lib/excanvas/excanvas.min.js'
  ], 'client');

  /* Globalize */
  api.add_files([
    'components/globalize/lib/globalize.js',
    'components/globalize/lib/globalize.culture.de-DE.js',
    'components/globalize/lib/globalize.culture.ja-JP.js'
  ], 'client');

  /* tags */
  api.add_files('components/tags/lib/tags.min.js', 'client');

  /* validate */
  api.add_files('components/validate/lib/validate.min.js', 'client');

  /* list box */
  api.add_files('components/listbox/lib/listbox.js', 'client');

  /* input mask */
  api.add_files('components/input_mask/lib/inputmask.js', 'client');

  /* input limit */
  api.add_files('components/input_limit/lib/inputlimit.min.js', 'client');

  /* autosize */
  api.add_files('components/autosize/lib/autosize.js', 'client');

  /* uniform */
  api.add_files('components/uniform/lib/uniform.min.js', 'client');

  /* multi file upload */
  api.add_files([
    'components/multi_file_upload/lib/plupload.full.min.js',
    'components/multi_file_upload/lib/plupload.queue.min.js'
  ], 'client')

  /* multiselect */
  api.add_files('components/multiselect/lib/multiselect.js', 'client');

  /* bootstrap switch */
  api.add_files('components/bootstrap_switch/lib/switch.min.js', 'client');

  /* select2 */
  api.add_files('components/select2/lib/select2.min.js', 'client');

  /* date_range */
  api.add_files([
    'components/date_range/lib/daterangepicker.js',
    'components/date_range/date_range.html'
  ], 'client');

  /* pagination */
  api.add_files( 'components/pagination/pagination.html', 'client');

  /* wysihtml5
  api.add_files('components/wysihtml5/lib/wysihtml5-0.3.0.js', 'client');
  api.add_files('components/wysihtml5/lib/bootstrap3-wysihtml5.js', 'client');
  api.add_files('components/wysihtml5/lib/toolbar.js','client');
  api.export('wysihtml5','client');
  */

  /* selectors */
  api.add_files('components/language_selector/language_selector.html', 'client');

  /* search */
  api.add_files([
    'components/search/search_dropdown.html',
    'components/search/search_form.html',
    'components/search/search_line.html'
  ], 'client');

  /* TravisCI */
  api.add_files('components/travisCI/build_status.html', 'client');

  /* GitHub */
  api.add_files('components/github/report_bug_block.html', 'client');

  /* page layout */
    /* navbar */
    api.add_files([
      /* TODO : this should be a common component */
      'router/page/components/navbar/default_navbar.html',
      'router/page/components/navbar/default_navbar_brand.html',
      /* TODO : this should be a common component */
      'router/page/components/navbar/default_navbar_header.html',
      'router/page/components/navbar/default_navbar_right.html'
    ], ['client']);

    /* sidebar */
    api.add_files([
      'router/page/components/sidebar/default_sidebar.html',
      'router/page/components/sidebar/default_sidebar_content.html'
    ], 'client' );

    /* page header */
    api.add_files([
      'router/page/components/page_header/default_page_header.html',
      'router/page/components/page_header/default_page_title.html',
      'router/page/components/page_header/default_page_header_widget.html'
    ], 'client' );

    /* breadcrumbs */
    api.add_files([
      'router/page/components/breadcrumbs/default_breadcrumbs_line.html',
      'router/page/components/breadcrumbs/default_breadcrumbs.html'
    ], 'client');

    /* callouts */
    api.add_files([
      'router/page/components/callouts/default_callouts.html',
      'router/page/components/callouts/default_callout.html',
      'router/page/components/callouts/default_alert.html'
    ], 'client');

    /* footer */
    api.add_files('router/page/components/footer/default_footer.html', 'client');

  /* package layout */
  api.add_files([
    'router/package/components/package_header_widget.html',
    'router/package/components/package_navbar_right.html',
    'router/package/components/package_navbar_brand.html',
    'router/package/components/package_footer.html'
  ],['client'])
});

Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'tinytest',
    'test-helpers',
    'luma-ui'
  ], ['client', 'server']);

  api.add_files(['tests/luma-ui.test.coffee'],['client', 'server']);
});
