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

      'concepts/title',
      'concepts/components/title',
      'concepts/components/basics/architecture',
      'concepts/components/basics/overview',
      'concepts/components/basics/writing',
      'concepts/components/basics/using',

      'concepts/components/data-binding/data-binding',
      'concepts/components/data-binding/example',

      'concepts/components/directives/overview',
      'concepts/components/directives/structural',

      'concepts/modules/title',
      'concepts/modules/motivation',
      'concepts/modules/overview',

      'concepts/bootstrapping/title',
      'concepts/bootstrapping/template',
      'concepts/bootstrapping/code',
      'concepts/bootstrapping/process-1',
      'concepts/bootstrapping/module',
      'concepts/bootstrapping/process-2',

      'concepts/components/nested/smart-vs-dump',
      'concepts/components/nested/inputs',
      'concepts/components/nested/inputs-usage',
      'concepts/components/nested/property-bindings',
      'concepts/components/nested/outputs',
      'concepts/components/nested/dom-events',
      'concepts/components/nested/outputs-components',
      'concepts/components/nested/outputs-usage',
      'concepts/components/nested/class-and-style-bindings',

      'concepts/services-di/title',
      'concepts/services-di/overview',
      'concepts/services-di/classes',
      'concepts/services-di/concept',
      'concepts/services-di/usage-service',
      'concepts/services-di/usage-component',
      'concepts/services-di/configuration-1',
      'concepts/services-di/configuration-2',
      'concepts/services-di/hierarchical-injectors',

      'concepts/overview',

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
