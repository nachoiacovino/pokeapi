import './Loading.scss';

import loadingGif from '../../assets/loading.gif';

const Loading = () => {
  return (
    <div class="Loading">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loading;
