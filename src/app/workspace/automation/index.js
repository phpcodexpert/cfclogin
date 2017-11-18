import { connect, } from 'react-redux';
import { Automation as AutomationComponent, } from './Automation';
import { getSequences, } from '../../../state/sequences';

const mapStateToProps = (state, props) => ({
  ...props,
  sequences: getSequences(state),
});

const Automation = connect(mapStateToProps)(AutomationComponent);

export * from './createSequence';
export * from './editSequence';
export * from './viewSequence';
export {
  Automation,
};

/**
 * Data structure:

 MessageType: TEXT, GALLERY, IMAGE, USER_INPUT,
 
[IN_DEVELOPMENT --> ] LIST, VIDEO, AUDIO, FILE, DELAY,

user: {

  sequences: [
    {
      id: '1',
      name: 'Post-purchase message',
      messages: ['m1', 'm2', 'm3', 'm4'],
    }
  ],
  broadcasts: [

  ],
  messages: {
    'm1': {
      type: 'TEXT',
      order: 0,
      payload: {
        text: 'Hello! I am excited you want to join our exclusive webinar! Tell us how excited you are!',
        delay: 0,
      },
      actions: [
        { type: 'BUTTON', action: 'OPEN_URL', payload: 'Very excited', action: { type: 'ADD_TAG', } },
        { type: 'BUTTON', action: 'OPEN_URL', payload: 'SUPER excited!!!' },
      ],
    },
    'm2': {
      type: 'TEXT',
      order: 1,
      payload: {
        text: 'Wohoooo!, I am glad you are excited! Please check what you are missing out on below!',
        delay: 3000,
        showTyping: true,
      },
      actions: [],
    },
    'm3': {
      type: 'GALLERY',
      order: 2,
      payload: {
        delay: 1000,
        showTyping: true,
        images: [
          {
            type: 'GALLERY_IMAGE',
            payload: {
              source: 'https://lalalalal.com/beauty.png',
              text: 'This beautiful cat product will AMEOWZ you!',
            },
            actions: [
              {
                type: 'LINK',
                action: 'OPEN_URL',
                payload: {
                  destination: 'https://onlinestore.com/beauty',
                  text: 'Buy it now!'
                },
              },
            ],
          },
          {
            type: 'GALLERY_IMAGE',
            payload: {
              source: 'https://lalalalal.com/nice_watch.png',
              text: 'This beautiful cat watch will AMEOWZ you!',
            },
            actions: [
              {
                type: 'LINK',
                action: 'OPEN_URL',
                payload: {
                  destination: 'https://onlinestore.com/nice_watch',
                  text: 'Buy it now!'
                },
              },
            ],
          },
        ]
      },
    },
    'm4': {
      type: 'GALLERY',
      order: 3,
      payload: [
        {
          type: 'GALLERY_IMAGE',
          payload: 'https://lalalalal.com/beauty.png',
          actions: [
            { type: 'LINK', action: 'OPEN_URL', payload: 'https://onlinestore.com/beauty', }
          ]
        },
      ],
    },
  }
}

 */