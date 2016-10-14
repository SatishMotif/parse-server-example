
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:


Parse.Cloud.define('linkUserWithFB', function(request, response) {
                   Parse.Cloud.useMasterKey();
                   var userId = request.params.objectId;
                   
                   var query = new Parse.Query(Parse.User);
                   query.get(userId).then(function(user) {
                                          
                                          user.set("authData",request.params.authdataDic);
                                          
                                          user.save(null, {userMasterKey:true
                                                    
                                                    }).then(function(user) {
                                                            response.success(user);
                                                            }, function(error) {
                                                            response.error(error);
                                                            });
                                         });
                   
                   });



Parse.Cloud.define('getAuthDataById', function(request, response) {
                   Parse.Cloud.useMasterKey();
                   var userId = request.params.objectId;
                   var query = new Parse.Query(Parse.User);
                   query.get(userId).then(function(user) {
                           response.success(user.get("authData"));
                        });
                   });


Parse.Cloud.define('updateUser', function(request, response) {
                   Parse.Cloud.useMasterKey();
                   var userId = request.params.objectId;
                   var displayName = request.params.displayName;
                   //
                   var query = new Parse.Query(Parse.User);
                   query.get(userId).then(function(user) {
                                          
                                          user.set("displayName",displayName);
                                          user.set("bio",request.params.bio);
                                          user.set("phone",request.params.phone);
                                          user.set("username",request.params.username);
                                          
                                          user.save(null, {userMasterKey:true
                                                    
                                                    }).then(function(user) {
                                                            response.success(user);
                                                            }, function(error) {
                                                            response.error(error);
                                                            });
                                          });
                   
                   });

