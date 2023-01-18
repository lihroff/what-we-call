class Abbr {
  constructor(data = [], option) {
    this.data = data;
    this.option = option;
  }

  get(key) {
    const { _iskeyMatch, _isTopicMatch } = this;

    const item = this.data.find(item => {
      return _iskeyMatch(key, item) && _isTopicMatch(item);
    });

    return item?.value;
  }

  _iskeyMatch = (key, item) => {
    const { case_ignore = true } = this.option;
    if (case_ignore) {
      return key.toUpperCase() === item.key.toUpperCase();
    }

    return key === item.key;
  };

  _isTopicMatch = item => {
    const { topic = true } = this.option;

    if (topic) {
      return topic === item.topic;
    }
    return true;
  };
}

export default Abbr;
