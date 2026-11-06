
const steps = [
    {
        heart: "🕷",
        title: "یه چیزی می‌خوام بهت بگم!",
        message: "اون حرفی که همش تو دلم بودهههه!",
        button: "بزن بعدی دختر زهراااا"
    },
    {
        heart: "🤫",
        title: "اول یه قول بده!",
        message: "قول بده تا آخر این صفحه رو ببینی و وسطش فرار نکنییی!",
        button: "من دختر یحیام قول میدم🤣"
    },
    {
        heart: "💗",
        title: "یه سؤال!",
        message: "می‌دونی چرا امروز با بقیه روزا فرق داره؟",
        button: "چرااا؟ 👀"
    },
    {
        heart: "🐱",
        title: "چون امروز...",
        message: "تولد یکی از آدمای پیشی دوستهههه",
        button: "حسنا:خبببب؟"
    },
    {
        heart: "🎁",
        title: "یه حدس بزن!",
        message: "فکر می‌کنی برای تولدت چی آماده کردم؟",
        button: "حسنا:چیییی😍"
    },
    {
        heart: "🐱‍👤",
        title: "هیچیییی",
        message: "همینکه آدمی مث من تو زندگیت داری برو خدا رو شکر کنن",
        button: 'حسنا: <img src="images/sticker.webp" class="dino-sticker" alt="دایناسور">',
    },
    {
        heart: "🎁",
        title: "آماده‌اییی؟",
        message: "دیگه وقتشه سورپرایز اصلی رو ببینییی!",
        button: 'حسنا: <video class="dino-sticker" autoplay loop muted playsinline><source src="images/sticker1.webm" type="video/webm"></video>',
    },
    {
        heart: "🎂",
        title: "تولدت مبارک ادمین گارد جاویداننن!",
        message: "امیدوارم همیشه بخندی و همیشه دلت خوش باشه. ایشالله جشن آزادی ایران رو ببینیم💖",
        button: "بسه دیگ پرو میشی🕷🕸"
    }
];

const card = document.querySelector(".card");

function normalizeDate(value) {
    return value
        .replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
        .replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
        .replace(/\s/g, "")
        .toLowerCase();
}

function showBirthdayQuestion() {
    card.innerHTML = `
        <div class="heart">🕸</div>
        <h1>سلام بتمن</h1>
        <p>تاریخ تولدت رو وارد کن ببینم دختر زهرا هستی یا نه؟ 😏</p>

        <input
            id="birthdayInput"
            type="text"
            placeholder="مثلاً 9 اسفند 1404(روز خوشی ما ایرانی ها)"
            autocomplete="off"
        >

        <p id="errorMessage" style="color:#ff9abf; margin-top:15px;"></p>

        <button id="checkBirthday">بریم ببینیم دختر زهرایی یا یحیی</button>
    `;

    document.getElementById("checkBirthday").addEventListener("click", checkDate);

    document.getElementById("birthdayInput").addEventListener("keydown", event => {
        if (event.key === "Enter") checkDate();
    });
}

function checkDate() {
    const enteredDate = normalizeDate(
        document.getElementById("birthdayInput").value
    );

    const correctDate = normalizeDate("16 آبان 1384");

    if (enteredDate === correctDate) {
        currentStep = 0;
        showStep();
    } else {
        document.getElementById("errorMessage").textContent =
            "بتمننن تاریخ تولد خودتو بزنننن";
    }
}

let currentStep = 0;

function showStep() {
    const step = steps[currentStep];

    card.innerHTML = `
        <div class="heart">${step.heart}</div>
        <h1>${step.title}</h1>
        <p>${step.message}</p>
        <button id="nextBtn">${step.button}</button>
        <div class="progress">${currentStep + 1} از ۸</div>
    `;

    card.style.animation = "none";
    card.offsetHeight;
    card.style.animation = "appear 0.8s ease";

    document.getElementById("nextBtn").addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep();
        } else {
            card.innerHTML = `
                <div class="heart">🌹</div>
                <h1></h1>
                <p>اینم از سورپرایز کوچولوی اینترنتی(حالا باز حضوریش فرق میکنه که شما نمیتونی بیای)🤣🤣</p>
                <button onclick="location.reload()">حالا برو تمرینای بینایی رو انجام بده</button>
            `;
        }
    });
}

showBirthdayQuestion();
