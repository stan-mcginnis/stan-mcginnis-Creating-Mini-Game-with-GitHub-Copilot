function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controlller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}

