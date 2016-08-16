
angular.module("sportsStore")
    .controller("sportsStoreCtrl", function ($scope) {
        $scope.ans = {
            answer: [


                {

                    "category": "ASP.NET",
                    "qid": 1,
                    "correct": 3


                },
                 {
                     "category": "ASP.NET",
                      "qid": 2,
                      "correct": 1


                   },
                   {
                      "category": "ASP.NET",
                       "qid": 3,
                       "correct": 2


                    }

                ]
        };



 });
