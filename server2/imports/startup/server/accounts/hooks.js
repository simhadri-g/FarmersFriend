import  AccountsServer  from 'meteor/accounts-base';
import {Activities} from '../../../api/activities/activities';
import {Blogs} from '../../../api/blogs/blogs';
import {Issues} from '../../../api/issues/issues';
import {insertSolution} from '../../../api/solutions/methods';
import { follow} from '../../../api/issues/methods.js';
import { unFollow} from '../../../api/issues/methods.js';
import { updateTeam } from '../../../api/issues/methods.js';
import {insertActivity} from '../../../api/activities/methods';
import {Bert}  from 'meteor/themeteorchef:bert';
var getFbPicture = function(accessToken) { // make async call to grab the picture from facebook
    var result;
    result =  "http://graph.facebook.com/" + accessToken+ "/picture/?type=large"
    /*Meteor.http.get("https://graph.facebook.com/me", {
      params: {
        access_token: accessToken,
        fields: 'picture',
        type: 'large'
      }
    });*/
    /*if(result.error) {
      throw result.error;
    }*/
    return result //.data.picture.data.url; // return the picture's url
  };

Accounts.onCreateUser(function(options, user) {
    console.log(user);
    if(user.services.google){
        console.log('if clause');
    user.email = user.email;
    user.profile = {name:{first:user.services.google.given_name, last:user.services.google.family_name}};
    user.profile.picture = user.services.google.picture
    user.follows=[];
    user.followers=[];
    user.roles=['user'];
    console.log(user);
}
return user;
  });
  Activities.before.insert(function(userId, doc) {

      switch(doc.type) {

        case 'new_comment':
            const post=doc.post;
            insertSolution.call({
              post,
            });
            break;

        case 'follow_user':
        const followId= doc.post.followId;
        follow.call({
          followId,
        });
        break;

        case 'unfollow_user':
        const unfollowId=String(doc.post.followId);
        console.log(unfollowId);
        unFollow.call({
          unfollowId,
        });
        break;
        case 'joined_team':
        console.log('hooks working');
        const ids=doc.post.ids ;
        updateTeam.call({
          ids
        });
        break;
        case 'tag_user':
        const userId=doc.post.userId;
        const parentId=doc.post.parentId;
        console.log(doc);
        Meteor.users.update({_id: userId },{$addToSet: {tags:parentId}});
        break;


      }
    });
  Blogs.after.insert(function(userId, blog) {
    const type='new_blog';
    const blogId=blog._id;
    const post={blogId};
    const doc={post,type};
    insertActivity.call({
      doc,
    });
  });

  Issues.after.insert(function(userId, issue) {
    const type='new_issue';
    const issueId=issue._id;
    const post={issueId};
    const doc={post,type};
    console.log(doc);
    insertActivity.call({
      doc,
    });
  });
