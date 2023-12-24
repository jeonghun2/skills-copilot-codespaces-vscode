function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'skillsMember',
    bindToController: true,
    scope: {
      member: '=',
      skills: '=',
      onSkillClick: '&'
    }
  };
}