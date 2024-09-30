// Đối tượng lưu trữ các mảng âm thanh cho 6 hình ảnh
var audioData = {
    1: [
      "https://webstatic.mihoyo.com/upload/op-public/2021/12/26/056844683ca23dbe3b58cab410ef9be0_757044844048201450.mp3",
      "https://webstatic.mihoyo.com/upload/op-public/2021/12/26/c77a84005d45c9544b1580bc64901bd2_5200032578571916449.mp3",
    ],
    2: [
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100914473283016.mp3",
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100914473621389.mp3",
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100914473997800.mp3",
    ],
    3: [
      "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/f5ebdc3aa2852da587147600ddf6fa57_6096579464354887122.mp3",
      "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/3a443d837b1c5437f0804fa33bc3d529_890241425180613694.mp3",
      "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/9cd02801fe0e3ec1abf119a79706772d_7524271030234915679.mp3",
    ],
    4: [
      "https://webstatic.mihoyo.com/upload/op-public/2021/06/22/b08b2fb2429cfc5e7c4ecbe799cd91af_3455995324286761439.mp3",
      "https://webstatic.mihoyo.com/upload/op-public/2021/06/22/23f47b3bad600b20f0a7c63344413f9f_1060755609112878729.mp3",
      "https://webstatic.mihoyo.com/upload/op-public/2021/06/22/ff8839ca9a215cba697bb6c83ed326e7_4832914189475967608.mp3",
    ],
    5: [
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/02/09/5e408235063f7f7aebbe6772d2384922_3132900725248142408.mp3",
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/02/09/dcd72f90631bea0ba203eca757bfee26_5707206385656052620.mp3",
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/02/09/d4b672edb91e9a1d9cd9f5792cf446a0_15710765847442250.mp3",
    ],
    6: [
      "https://webstatic.mihoyo.com/upload/op-public/2021/12/26/0792b6c0c8bdcb2ac3aaa6a76e7cad77_2530009843015331227.mp3",
      "https://webstatic.mihoyo.com/upload/op-public/2021/12/26/78730d94fca99170f3130fbe98ecd0d4_2278858340028903353.mp3",
      "https://webstatic.mihoyo.com/upload/op-public/2021/12/26/74806a55052e2a4507e666d66039ca73_6140399396953337977.mp3",
    ],
  };

  // Đối tượng theo dõi chỉ số hiện tại cho mỗi hình ảnh
  var currentIndex = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  function playNextAudio(imageId) {
    var audio = document.getElementById("myAudio");

    // Lấy mảng âm thanh cho hình ảnh cụ thể
    var audioSources = audioData[imageId];

    // Gán đường dẫn của file âm thanh hiện tại
    audio.src = audioSources[currentIndex[imageId]];

    // Phát âm thanh
    audio.play();

    // Tăng chỉ số, nếu đến cuối mảng thì quay lại file đầu tiên
    currentIndex[imageId] =
      (currentIndex[imageId] + 1) % audioSources.length;
  }