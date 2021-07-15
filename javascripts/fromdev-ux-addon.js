var UxUtils = UxUtils || {};

UxUtils.confirmShowHide = (id) => {
  $(id).show().delay(5000).fadeOut();
};

UxUtils.copyTextAddon = {
  register: (id) => {
    if(!id) return;
    const buttonId = `#copy-${id}`
    const copyButton = $(buttonId);
    if(!copyButton) return;
    const confirmSpanId = `#confirm-${id}`;
    const confirmSpan = $(confirmSpanId);
    if(!confirmSpan) return;
    copyButton.copyText({
      textElementId: id,
      confirm: function() {
        UxUtils.confirmShowHide(confirmSpanId);
      }
    });
  }
};
const CopyTextAddon = UxUtils.copyTextAddon;
