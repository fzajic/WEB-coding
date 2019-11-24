window.onload = function () {
  const CTA = document.querySelector(".cta a");
  const ALERT = document.querySelector("#booking-alert")

  CTA.classlist.remove("hide");
  ALERT.classlist.add("hide");

  function reveal() {
    CTA.classlist.toggle("hide");
    ALERT.classlist.toggle("hide");
  }
  CTA.onclick = reveal;
}
