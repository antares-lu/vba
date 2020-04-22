/**
 * @function 获取视窗宽高
 * @author cryi.liu
 * @name getViewSize
 * @param null
 * @return { width: number, height: number }
 */

export const getViewSize = () => {
  if (window) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  return { width: 0, height: 0 };
};

export const get = () => {};
