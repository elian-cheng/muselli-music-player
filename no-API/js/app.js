(() => {
  "use strict";
  function isWebp() {
    function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
        callback(2 == webP.height);
      };
      webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
      let className = true === support ? "webp" : "no-webp";
      document.documentElement.classList.add(className);
    });
  }
  let addWindowScrollEvent = false;
  setTimeout(() => {
    if (addWindowScrollEvent) {
      let windowScroll = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(windowScroll);
      });
    }
  }, 0);
  const dataMusic = [
    {
      id: "6005060009",
      artist: "Go A",
      track: "Shum",
      poster: "./img/posters/6005060009.jpg",
      mp3: "./files/audio/6005060009.mp3",
    },
    {
      id: "7709396708",
      artist: "Kalush Orchestra",
      track: "Stefania",
      poster: "./img/posters/7709396708.jpg",
      mp3: "./files/audio/7709396708.mp3",
    },
    {
      id: "5987614638",
      artist: "Kalush feat. Skofka",
      track: "Додому",
      poster: "./img/posters/5987614638.jpg",
      mp3: "./files/audio/5987614638.mp3",
    },
    {
      id: "0851929096",
      artist: "Krutь",
      track: "Колискова",
      poster: "./img/posters/0851929096.jpg",
      mp3: "./files/audio/0851929096.mp3",
    },
    {
      id: "3820960149",
      artist: "Аліна Паш",
      track: "Тіні Забутих Предків",
      poster: "./img/posters/3820960149.jpg",
      mp3: "./files/audio/3820960149.mp3",
    },
    {
      id: "8081902003",
      artist: "Leleka",
      track: "Запізно",
      poster: "./img/posters/8081902003.jpg",
      mp3: "./files/audio/8081902003.mp3",
    },
    {
      id: "9430910636",
      artist: "Kazka",
      track: "Плакала",
      poster: "./img/posters/9430910636.jpg",
      mp3: "./files/audio/9430910636.mp3",
    },
    {
      id: "7521931988",
      artist: "Jerry Heil",
      track: "When God Shut The Door",
      poster: "./img/posters/7521931988.jpg",
      mp3: "./files/audio/7521931988.mp3",
    },
    {
      id: "6432817901",
      artist: "Jerry Heil",
      track: "Мрія",
      poster: "./img/posters/6432817901.jpg",
      mp3: "./files/audio/6432817901.mp3",
    },
    {
      id: "8245478183",
      artist: "Jerry Heil",
      track: "Козацькому роду нема переводу",
      poster: "./img/posters/8245478183.jpg",
      mp3: "./files/audio/8245478183.mp3",
    },
    {
      id: "0807225230",
      artist: "Vivienne Mort",
      track: "Сліди маленьких рук",
      poster: "./img/posters/0807225230.jpg",
      mp3: "./files/audio/0807225230.mp3",
    },
    {
      id: "7029192878",
      artist: "Один в каное",
      track: "У мене немає дому",
      poster: "./img/posters/7029192878.jpg",
      mp3: "./files/audio/7029192878.mp3",
    },
    {
      id: "5267233768",
      artist: "Один в каное",
      track: "Небо",
      poster: "./img/posters/5267233768.jpg",
      mp3: "./files/audio/5267233768.mp3",
    },
    {
      id: "8132573299",
      artist: "Один в каное",
      track: "Дерево",
      poster: "./img/posters/8132573299.jpg",
      mp3: "./files/audio/8132573299.mp3",
    },
    {
      id: "7572681218",
      artist: "Wellboy",
      track: "Ворогів На Ножі",
      poster: "./img/posters/7572681218.jpg",
      mp3: "./files/audio/7572681218.mp3",
    },
    {
      id: "1289699523",
      artist: "Тінь Сонця",
      track: "Тінь Сонця",
      poster: "./img/posters/1289699523.jpg",
      mp3: "./files/audio/1289699523.mp3",
    },
    {
      id: "5173802955",
      artist: "Тінь Сонця",
      track: "Козаки",
      poster: "./img/posters/5173802955.jpg",
      mp3: "./files/audio/5173802955.mp3",
    },
    {
      id: "2031101209",
      artist: "Океан Ельзи",
      track: "Без Бою",
      poster: "./img/posters/2031101209.jpg",
      mp3: "./files/audio/2031101209.mp3",
    },
    {
      id: "9736629074",
      artist: "Океан Ельзи",
      track: "Така, як ти",
      poster: "./img/posters/9736629074.jpg",
      mp3: "./files/audio/9736629074.mp3",
    },
    {
      id: "8458449651",
      artist: "Друга Ріка",
      track: "Так мало тут тебе",
      poster: "./img/posters/8458449651.jpg",
      mp3: "./files/audio/8458449651.mp3",
    },
    {
      id: "7780715415",
      artist: "Друга Ріка",
      track: "П'ю з твоїх долонь",
      poster: "./img/posters/7780715415.jpg",
      mp3: "./files/audio/7780715415.mp3",
    },
    {
      id: "9238045504",
      artist: "Марія Бурмака",
      track: "Все починається, коли...",
      poster: "./img/posters/9238045504.jpg",
      mp3: "./files/audio/9238045504.mp3",
    },
    {
      id: "7435198574",
      artist: "Марія Бурмака",
      track: "Не бійся жити",
      poster: "./img/posters/7435198574.jpg",
      mp3: "./files/audio/7435198574.mp3",
    },
    {
      id: "4391068272",
      artist: "ТаРута",
      track: "Єднайся, народе",
      poster: "./img/posters/4391068272.jpg",
      mp3: "./files/audio/4391068272.mp3",
    },
    {
      id: "5301092244",
      artist: "Руслана",
      track: "Світанок",
      poster: "./img/posters/5301092244.jpg",
      mp3: "./files/audio/5301092244.mp3",
    },
    {
      id: "5698907681",
      artist: "Shumei",
      track: "Біля Тополі",
      poster: "./img/posters/5698907681.jpg",
      mp3: "./files/audio/5698907681.mp3",
    },
    {
      id: "4157048810",
      artist: "Крихітка Цахес",
      track: "Ти щось неймовірне",
      poster: "./img/posters/4157048810.jpg",
      mp3: "./files/audio/4157048810.mp3",
    },
    {
      id: "9762913319",
      artist: "Спів Братів",
      track: "Maskva",
      poster: "./img/posters/9762913319.jpg",
      mp3: "./files/audio/9762913319.mp3",
    },
    {
      id: "1626965584",
      artist: "Karna",
      track: "Моя мила",
      poster: "./img/posters/1626965584.jpg",
      mp3: "./files/audio/1626965584.mp3",
    },
    {
      id: "3959251175",
      artist: "Tember Blanche",
      track: "Вечорниці",
      poster: "./img/posters/3959251175.jpg",
      mp3: "./files/audio/3959251175.mp3",
    },
  ];
  let playList = [];
  const favoriteList = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [];
  const catalogContainer = document.querySelector(".catalog__container");
  const headerLogo = document.querySelector(".header__logo");
  const favoriteBtn = document.querySelector(".header__favorite_btn");
  const player = document.querySelector(".player");
  const trackCard = document.getElementsByClassName("track");
  const pauseBtn = document.querySelector(".player__controller-pause");
  const stopBtn = document.querySelector(".player__controller-stop");
  const prevBtn = document.querySelector(".player__controller-prev");
  const nextBtn = document.querySelector(".player__controller-next");
  const likeBtn = document.querySelector(".player__controller-like");
  const muteBtn = document.querySelector(".player__icon_mute");
  const playerProgressInput = document.querySelector(".player__progress-input");
  const activeTrackTitle = document.querySelector(".track-info_title");
  const activeTrackArtist = document.querySelector(".track-info_artist");
  const playerTimePassed = document.querySelector(".player__time-passed");
  const playerTimeTotal = document.querySelector(".player__time-total");
  const playerVolumeInput = document.querySelector(".player__volume-input");
  const search = document.querySelector(".search");
  document.querySelector(".tracksList-hidden");
  const audio = new Audio();
  const catalogAddBtn = document.createElement("button");
  catalogAddBtn.classList.add("catalog__btn-add");
  catalogAddBtn.innerHTML = `\n    <span>Увидеть все</span>\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />\n    </svg>\n`;
  const pausePlayer = () => {
    const trackActive = document.querySelector(".track_active");
    if (audio.paused) {
      audio.play();
      pauseBtn.classList.remove("player__icon_play");
      trackActive.classList.remove("track_pause");
    } else {
      audio.pause();
      pauseBtn.classList.add("player__icon_play");
      trackActive.classList.add("track_pause");
    }
  };
  const playMusic = event => {
    const trackActive = event.currentTarget;
    if (trackActive.classList.contains("track_active")) {
      pausePlayer();
      return;
    }
    for (let i = 0; i < trackCard.length; i++)
      trackCard[i].classList.remove("track_active-activeColor");
    trackActive.classList.add("track_active-activeColor");
    let i = 0;
    const id = trackActive.dataset.idTrack;
    const index = favoriteList.indexOf(id);
    if (-1 !== index) likeBtn.classList.add("player__icon_like_active");
    else likeBtn.classList.remove("player__icon_like_active");
    const track = dataMusic.find((item, index) => {
      i = index;
      return id === item.id;
    });
    audio.src = track.mp3;
    activeTrackTitle.innerHTML = track.track;
    activeTrackArtist.innerHTML = track.artist;
    audio.play();
    pauseBtn.classList.remove("player__icon_play");
    pauseBtn.classList.add("player__icon_pause");
    player.classList.add("player_active");
    player.dataset.idTrack = id;
    const prevTrack = 0 === i ? playList.length - 1 : i - 1;
    const nextTrack = i + 1 === playList.length ? 0 : i + 1;
    likeBtn.dataset.idTrack = id;
    prevBtn.dataset.idTrack = playList[prevTrack].id;
    nextBtn.dataset.idTrack = playList[nextTrack].id;
    for (let i = 0; i < trackCard.length; i++)
      if (id === trackCard[i].dataset.idTrack)
        trackCard[i].classList.add("track_active");
      else trackCard[i].classList.remove("track_active");
  };
  const addHandlerTrack = () => {
    for (let i = 0; i < trackCard.length; i++)
      trackCard[i].addEventListener("click", playMusic);
  };
  pauseBtn.addEventListener("click", pausePlayer);
  stopBtn.addEventListener("click", () => {
    audio.src = "";
    pauseBtn.classList.add("player__icon_play");
    player.classList.remove("player_active");
    document
      .querySelector(".track_active")
      .classList.remove("track_active-activeColor");
    document.querySelector(".track_active").classList.remove("track_active");
  });
  const createCard = ({ artist, track, id, poster }) => {
    const card = document.createElement("div");
    card.style.cursor = "pointer";
    card.classList.add("catalog__tem", "track");
    if (player.dataset.idTrack === id) {
      card.classList.add("track_active");
      if (audio.paused) card.classList.add("track_pause");
    }
    card.dataset.idTrack = id;
    card.innerHTML = `\n        <div class="track__img-wrap">\n            <img \n                class="track__poster" \n                src="${poster}" \n                alt="${artist} ${track}"\n                width="180"\n                height="180">\n        </div>\n        <div class="track__info">\n            <p class="track_title">${track}</p>\n            <p class="track_artist">${artist}</p>\n        </div>\n    `;
    return card;
  };
  const renderCatalog = dataList => {
    playList = [...dataList];
    catalogContainer.textContent = "";
    const listCards = dataList.map(createCard);
    catalogContainer.append(...listCards);
    addHandlerTrack();
  };
  const checkCount = (i = 1) => {
    trackCard[0];
    if (catalogContainer.clientHeight > 3 * trackCard[0].clientHeight) {
      trackCard[trackCard.length - i].style.display = "none";
      checkCount(i + 1);
    } else if (1 !== i) catalogContainer.append(catalogAddBtn);
  };
  const updateTime = () => {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progress = (currentTime / duration) * playerProgressInput.max;
    playerProgressInput.value = progress ? progress : 0;
    const minutesPassed = Math.floor(currentTime / 60) || "0";
    const secondsPassed = Math.floor(currentTime % 60) || "0";
    const minutesDuration = Math.floor(duration / 60) || "0";
    const secondsDuration = Math.floor(duration % 60) || "0";
    playerTimePassed.textContent = `${minutesPassed}:${
      secondsPassed < 10 ? "0" + secondsPassed : secondsPassed
    }`;
    playerTimeTotal.textContent = `${minutesDuration}:${
      secondsDuration < 10 ? "0" + secondsDuration : secondsDuration
    }`;
  };
  function throttle(callee, timeout) {
    let timer = null;
    return function perform(...args) {
      if (timer) return;
      timer = setTimeout(() => {
        callee(...args);
        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  }
  const addEventListener = () => {
    catalogAddBtn.addEventListener("click", () => {
      [...trackCard].forEach(track => {
        track.style.display = "";
        catalogAddBtn.remove();
      });
    });
    const updateTimeThrottle = throttle(updateTime, 500);
    prevBtn.addEventListener("click", playMusic);
    nextBtn.addEventListener("click", playMusic);
    audio.addEventListener("timeupdate", updateTimeThrottle);
    audio.addEventListener("ended", () => {
      nextBtn.dispatchEvent(
        new Event("click", {
          bubbles: true,
        })
      );
    });
    playerProgressInput.addEventListener("change", () => {
      const progress = playerProgressInput.value;
      audio.currentTime = (progress / playerProgressInput.max) * audio.duration;
    });
    favoriteBtn.addEventListener("click", () => {
      const data = dataMusic.filter(item => favoriteList.includes(item.id));
      renderCatalog(data);
      checkCount();
    });
    headerLogo.addEventListener("click", () => {
      renderCatalog(dataMusic);
      checkCount();
    });
    likeBtn.addEventListener("click", () => {
      const index = favoriteList.indexOf(likeBtn.dataset.idTrack);
      if (-1 === index) {
        favoriteList.push(likeBtn.dataset.idTrack);
        likeBtn.classList.add("player__icon_like_active");
      } else {
        favoriteList.splice(index, 1);
        likeBtn.classList.remove("player__icon_like_active");
      }
      localStorage.setItem("favorite", JSON.stringify(favoriteList));
    });
    playerVolumeInput.addEventListener("input", () => {
      const value = playerVolumeInput.value;
      audio.volume = value / 100;
    });
    muteBtn.addEventListener("click", () => {
      if (audio.volume) {
        localStorage.setItem("volume", audio.volume);
        audio.volume = 0;
        playerVolumeInput.value = 0;
        muteBtn.classList.add("player__icon_mute-off");
      } else {
        muteBtn.classList.remove("player__icon_mute-off");
        audio.volume = localStorage.getItem("volume");
        playerVolumeInput.value = 100 * audio.volume;
      }
    });
    search.addEventListener("submit", e => {
      e.preventDefault();
      const value = search.search.value.toLowerCase();
      const filter = playList.filter(
        ({ artist, track }) =>
          artist.toLowerCase().includes(value) ||
          track.toLowerCase().includes(value)
      );
      renderCatalog(filter);
    });
  };
  const init = async () => {
    audio.volume = localStorage.getItem("volume") || 1;
    playerVolumeInput.value = 100 * audio.volume;
    renderCatalog(dataMusic);
    addEventListener();
    checkCount();
  };
  init();
  window["FLS"] = true;
  isWebp();
})();
