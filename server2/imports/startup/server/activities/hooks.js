import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Bert } from 'meteor/themeteorchef:bert';
import {insertSolution} from '../../../api/solutions/methods';
import {Solutions} from '../../../api/solutions/solutions';
import {Activities} from '../../../api/activities/activities';



export default function () {

Activities.before.insert(function(userId, doc) {
    console.log('hooks');
    switch(doc.type) {
      case 'new_comment':
      const post=doc.post;

      insertSolution.call({
        post,
      }, (error) => {
        if (error) {
          Bert.alert(error.reason+'bye', 'danger');
        } else {
          target.value = '';
          Bert.alert('Solution added!', 'success');
        }
      });
    }
  });
}
