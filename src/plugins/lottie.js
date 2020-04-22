import Lottie from 'lottie-web';

const Plugin = {

  install(Vue, name = '$lottie') {
    Object.defineProperty(Vue.prototype, name, { value: Lottie });
  },

};

export default Plugin;
