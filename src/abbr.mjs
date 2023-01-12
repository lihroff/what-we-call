class Abbr {
  constructor(data = [], case_ignore) {
    this.data = data;
    this.case_ignore = case_ignore;
  }

  get(k) {
    const item = this.data.find(item => {
      if (this.case_ignore) {
        return item.key.toUpperCase() === k.toUpperCase();
      }

      return item.key === k;
    });

    return item?.value;
  }
}

export default Abbr;
