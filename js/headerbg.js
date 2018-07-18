// var rand = Math.floor(Math.random() * 4);
// var style = "header{background-image: url(./images/back0"+rand+".jpg);background-size:cover;background-repeat:no-repeat;background-position: center center;}";
// /*
// // header{    background-image: url(../images/back00.jpg);
// //     background-size:     cover;
// //     background-repeat:   no-repeat;
// //     background-position: center center;
// //     color: white;
// // }";*/
// document.write("<style>"+style+"</style>");
/* Pre Loading images */
var images = new Array()
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image()
    images[i].src = preload.arguments[0][i]
  }
}
var imgs = [
  "https://lh3.googleusercontent.com/_RHmt5ElDo1gsXsVpvQcPnR0y-tAhSUOioOMHbqZ971kMbWHfay45c0ijgabDE4Fywup3SEumwQh7sPVirGT-3QhEndhc5cl44NnoA0Lf1eYmkIKkgr1kNEzvx2LTll4JFw2dNLo6wmD4hJZXdIjYGj80Do6MzZMfStZnAjzZjOfCYqycssFQvEL6-lMNs3NlYkYss4kpse0cUFXezKDL08GhlcM8T_JBGFbA55b5WiC4AsBdC2fzzTvUqsmm9OI16pHtLAKcsLhJUp8_bcMEtz-V18Eq-ZOuzXvpnu9O8wvNpES4NqYyghpHWjjn3sSwQUffnemqdHDrV01JL3QgsEzR-ZXeL6hlUJsDYBoF0utoMH2DgzAhg5MmLJAq5AEizJnsn8LIgDlElMPb2nVksDH9c9--3OMBQSwFskBhzym09uL82rXX-5r0RcFBEltEVpYjJKP9evnZL3LSo3d-6K1RxvkzOMfZv17FCAU-S9tod6YsyrUYNOqFOP1a_zAk4xJmadRunMYMrBlvXaExtqnlQs9k5B0gCSj4pZBCCi12cJ7v9Al0DUC6KChe7jqeXHRuDaGYLKWXu5IbzEURgKxk4Fp2jjlUlxCQwF_CGCrQl0t0P-bGkz_bA9gYYw5QRj83g3tf1qROQgppWL--5J8IX5TBaVGyA=w1361-h766-no",
  "https://lh3.googleusercontent.com/RI54MoJQEst_G8u5ypIpADl03kV0ag1B8z9EV7XcfQRgCVg_f6TpiIqWuXxF7sMokkn9msg_K-udjqM-rx-ML493WtRzvfu5nroe4RjPyc3KfXgtnxYy-rBSq5HRrqoSe1tRy_qIvRMnDe4bKaj7syO0fyDGSLgjuYqFOEZyqZ0O_cLFctFDyKs4dayqVLe3awu4PmQuj0V6HO_3Ha8KmNLxtbDs-36CTjhkj7_Fc86HQo4633vjkJhHXgvlyyMNjGMoXIy1XL-V8oACZWKakmfWMtlzxcIMgZO6ZEGOyI1YOViT1QhNKzySN7nD6sFvvzibIccbOSz58bcu30v0aTqpxHngYT4wz_6QiKwV_SulZyJFJp94dX6bWIqsengTaLCb_OQp0BAyUBcbtlYHa2sLzlg0BQNeyFKod_6jgJzp6YsGY8iFeuBM2ylQAvs6lwCUGgpXspSR1dq3CJXlY_Z_RV2hl90e7v-E6JKl-cPZ46qeUEf0wMKaw-JZ0vE4yMCNwN1v3SPG1avg9XMgqxyJz2XINPFHx0Nq0bwFr2vmNn0BXNdqH0cGXwxKr54CGPvCoqi9n6x-dhxluIpSdtKoItrtCJhsf6pJwLQmeK0nDfjdGXz9Dl-pfD-RP8vqE-ZjQVd9ZZfAsVfuGn4GcCFFosKz3PXhhw=w1361-h766-no",
  "https://lh3.googleusercontent.com/BJsC4UegtHCWSk_s3K1QDBdpnSmlzvo428ThQbArerpUoX7V4iWYmzBOgObprfRSpbum1DN8vM8-tPHuViZRvqQ84z9vDlFkIi1e2QpKq6suqB9quXmtCmaVGPjI4cqKfnNcek2fxoscn1Rt4xVxtlHSQlyJWSEyznynrh-R256whXGCy9O-87H3I34jbcTgTbDnf6K6ltZmiyGkTPSI4u04ReOoVtJDP_t-heXJGdnOB33L47oBGeWRqTDQJ2bRRqS9VIYp12VY06ZIjE21rp9zmYubvNb-dzYHosr40OucvJ3yYXk0C2__49nQKxBn9a2G7Pr2UpEKHEv8qo2lnUnTXB5UgqvK5k2QvhAsiKaCV__lsz41527KsvqPb_Ao9XfPtnDezzYrm_C2IuPBChFE_oZeb8oq__bAVuzQ6FR2IlEB2UgtEwIwWd_PvZCVWU_1On9mpXN9yGDs2Jptqi3d2jAwFiCJ06uzAksaHDm77chMvr1xYQBCZNyI7zgmKVnB8XgkPE5J-D5GCmZoCC5pA2Sjwrwu39HVlkqIPQSmhAIf7EkxFt_lAGOKnCusWoR9y-P-NnoJbb2oBB_7YALDYixVw5O_owlgZAfn=w1264-h948-no",
  "https://lh3.googleusercontent.com/qkdwIW6lCQADi6AArb1we8BHFbha7PmbpDxWlFXdVniizzsTrUshOlxQL-zfc-G2KDQJzJim1XMZholV2SZyyn5z62rVrBEr0NHY82KW8-NgCmi4KFwiO2NV9eD-PNZ9ZZ2CvCAnKb_lzEiCBWcBRHlyDC1DMtrK5iovcONHBCR9QYvDL4pU2UW1wY5dLWIzkSlAW5VHwN16YjcWs-wp5PYcQDR_uk03d5Z_1gSZcvOYSwN9srw5HEw8l_OiWQKjaliyH8X6wPh1aj5M3io0OvEJknxF2Wjp0HBKFB8CAb2QP_anUKE24VT0UeWF0fG_rPDpn4uAn8lcp-2pTkvEfvH21WSg7ggCjcM3poJZR94WVTzXXIBlOjqrCGtTfTuw6SbCVVl-Is1KtSZhrlwPhBPGM6mBzdwmaZHi2-I-LvogZ-omHPi7xbDEY4HXqWxcIENycoKnqUKRnHeWjfBeKJKCO09btQG-KcGYP7oAS12lkTWrD-g5IC8T_DKE6w6g9T92layxu51b-KPMq07iUTZN0hA8os3dJkE4KnS1FmSYFmv5QL_4aGtM_EQl8TQfeCVlGFiHkSVzvyGkq4Hd2IHsmuXrH9IpL20ze07U=w1686-h948-no",
  "https://lh3.googleusercontent.com/UBnicbJquHnTc3aXXuojaBNn6eZoXgqMPSS9npu3OeYbG81WmGk0tlFL0NmV_vqORf6NWbQrAwDdpNfuoJQGrB6kMaUj8dZKcggZbWOfIaVyclHR3XBfu3ci1GLGKegPt2IJk2zQikgFcyjXieDg9m3laCJAQDDbC374lsIwr6btvuekttKkyH2gOAxYI2-VsSNRK1u0vBz1NH_XGNKjWf3ngmY2vlohv0UoQVtKAraebwYkvxNbYYPXXoGBS09geaMeqn0Ipv6qqWzfd3tA7OMxczkM7CzXZcGdXRX70aEaYWodrHAeTcD1PdEuElHHmb3-gJhgrovL0PG7O2Dxy_dbDTgKvid3HpTO9VELoHDkuOFnqKDNyzvmfdCc_hz8ekZfxFyeGwPsAaF0guJsX4IYbpuvL35EOQ9MeO0gD1_0Y5RdP--oKLbNrH1utyG75ki-Ivx6efYmoMu3HugvLAzqDApIosVERWqvyS3ZpEoUxLGwykAmgLxcSyjvWPXZ9cljpH6DgemaQA_PUbBwvMjIc6hg6h-I8RvKQLJ2ys0sRbfsdMqNMKl1aMBh_EKZRwBBBBumyeHPaYQawL957qFFe3SYyzHDgMA_FLjg=w1686-h948-no"
];
var nextimage=0;
document.onload = function() {
  preload(
    imgs
  )
}

window.onload = doSlideshow;

function doSlideshow(){
    if(nextimage>=5){nextimage=0;}
    $('header')
    .css('background-image','url("'+imgs[nextimage]+'")')
    .fadeIn(2000,function(){
        setTimeout(doSlideshow,5000);
    });
    // console.log('background-image','url("images/bg'+nextimage+'.jpg")');
    nextimage++;
    $('header')
    .css('background-size','cover');
    $('header')
    .css('background-repeat','no-repeat');
    $('header')
    .css('background-position','center center');
}
