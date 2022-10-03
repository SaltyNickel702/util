if (!js) {
  const js = {};
}
js.import = (fileUrl) => {
    const head = document.head;
    const link = document.createElement('script');
    link.setAttribute('src',fileUrl);

    head.append(link);
}
