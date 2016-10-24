(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',

      'about-me',
      'about-us',

      'overview',

      'intro/problems-v1',
      'intro/whats-better',
      'intro/whats-new',
      'intro/compare',

      'requirements/title',
      'requirements/ng1',
      'requirements/ng2',
      'requirements/ng1-the-truth',
      'requirements/build-system/title',
      'requirements/build-system/ng1',
      'requirements/build-system/task-runner',
      'requirements/build-system/ng2',
      'requirements/typescript/title',
      'requirements/typescript/overview',

      'requirements/reactive-programming/title',
      'requirements/reactive-programming/single-sync-1',
      'requirements/reactive-programming/single-sync-2',
      'requirements/reactive-programming/multiple-sync',
      'requirements/reactive-programming/single-async',
      'requirements/reactive-programming/promises-problem',
      'requirements/reactive-programming/multiple-async',

      'conclusion',

      'end'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html'
    };
  }

  var module = angular.module('app', [
    'app.templates',
    'w11k.slides',
    'w11k.slides.template',
    'ngSanitize'
  ]);

  // set presentation mode on startup
  module.run(function (SlidesService) {
   SlidesService.setMode('screen');
  });

  module.config (configureSlides);
}());
