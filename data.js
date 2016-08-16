


angular.module("sportsStore")
    .controller("sportsStoreCtrl", function ($scope) {
        $scope.data = {
            question: [


                {


                    "name": "The first event triggers in an aspx page is.?",
                    "category": "ASP.NET",
                    "id": 1,
                    "option": [{"value": "Page_Init()", "oid": 1, "isAns": false},
                        {"value": "Page_load()", "oid": 2, "isAns": false},
                        {"value": "Page_Click()", "oid": 3, "isAns": true}]
                },
                {

                    "name": " Which of the following ASP.NET object encapsulates the state of the client?",
                    "category":"ASP.NET",
                    "id": 2,
                    "option": [{"value": "Session object", "oid": 1, "isAns": true},
                        {"value": "Application object", "oid": 2, "isAns": false},
                        {"value": "Response object", "oid": 3, "isAns": false}]
                },
                {

                    "name": "__________________ is a special subfolder within the windows folder that stores the shared .NET component.",
                    "category": "ASP.NET",
                    "id": 3,
                    "option": [{"value": "/bin", "oid": 1, "isAns": false},
                        {"value": "GAC", "oid": 2, "isAns": true},
                        {"value": "Root", "oid": 3, "isAns": false}]

                },
                {

                        "name": "Which of the following authentication is best suited for a corporate network?",
                         "category": "ASP.NET",
                          "id": 4,
                          "option": [{"value": "Windows", "oid": 1, "isAns": true},
                           {"value": "Form", "oid": 2, "isAns": false},
                          {"value": "User", "oid": 3, "isAns": false}]
                },
                {
                   "name": "What attributes do you use to hide a public .Net class from COM?",
                    "category": "ASP.NET",
                     "id": 5,
                    "option": [{"value": "DLLImport Attributes", "oid": 1, "isAns": false},
                    {"value": "ComVisible attributes", "oid": 2, "isAns": true},
                    {"value": "COM Interop", "oid": 3, "isAns": false}]
                },
                {

                      "name": "Which of the following is used to cache multiple responses for a single web form based on HTTP POST parameter or query string?",
                       "category": "ASP.NET",
                        "id": 6,
                         "option": [{"value": "VaryByParams", "oid": 1, "isAns": true},
                        {"value": "VaryByHeaders", "oid": 2, "isAns": false},
                         {"value": "SetCacheability", "oid": 3, "isAns": false}]

                },

                {
                    "name": "What is the size of char variable?",
                    "category": "JAVA",
                    "id": 1,
                    "option": [{"value": "8", "oid": 1, "isAns": false},
                        {"value": "4", "oid": 2, "isAns": true},
                        {"value": "2", "oid": 3, "isAns": false}]
                },
                {
                     "name": "What is class variable?",
                      "category": "JAVA",
                       "id": 2,
                        "option": [{"value": "class variables are static variables within a class but outside any method.", "oid": 1, "isAns": false},
                                   {"value": "class variables are variables defined inside methods, constructors or blocks.", "oid": 2, "isAns": true},
                                   {"value": "class variables are variables within a class but outside any method.", "oid": 3, "isAns": false}]


                },
                {
                         "name": "Static binding uses which information for binding?",
                          "category": "JAVA",
                           "id": 3,
                          "option": [{"value": "type.", "oid": 1, "isAns": false},
                          {"value": "object", "oid": 2, "isAns": true},
                          {"value": "Both of the above", "oid": 3, "isAns": false}]


                },
                {
                           "name": "What are the types of linkages?",
                            "category": "C",
                             "id": 1,
                             "option": [{"value": "Internal and External", "oid": 1, "isAns": false},
                             {"value": "External, Internal and None", "oid": 2, "isAns": true},
                             {"value": "External and None", "oid": 3, "isAns": false}]


                 },
                  {
                           "name": "How would you round off a value from 1.66 to 2.0?",
                            "category": "C",
                             "id": 2,
                           "option": [{"value": "ceil(1.66)", "oid": 1, "isAns": false},
                          {"value": "floor(1.66)", "oid": 2, "isAns": true},
                          {"value": "roundup(1.66)", "oid": 3, "isAns": false}]


                                  }

                ]
        };

         $scope.display = function (name)
         {

                                         $scope.store = name.value;

        			                             if(!name.isAns)
                            						{
                            						$scope.msg="Incorrect Option!";
                            						}
                            						else
                            						{
                            						$scope.msg="Correct Option";
                            						}

         }


    });


