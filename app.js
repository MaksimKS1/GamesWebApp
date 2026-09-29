let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

const buttons = {
    btn1: { id: "1", label: "Экшен"    },
    btn2: { id: "2", label: "RPG"      },
    btn3: { id: "3", label: "Шутеры"   },
    btn4: { id: "4", label: "Стратегии"},
    btn5: { id: "5", label: "Гонки"    },
    btn6: { id: "6", label: "Хорроры"  },
};

// Сбрасываем подсветку
function clearActive() {
    for (const id in buttons) {
        document.getElementById(id).classList.remove("active");
    }
}

// Обработчик для каждой кнопки
for (const btnId in buttons) {
    const el = document.getElementById(btnId);
    el.addEventListener("click", function () {
        clearActive();

        const data = buttons[btnId];

        if (tg.MainButton.isVisible && item === data.id) {
            // Повторное нажатие на ту же кнопку — скрыть
            tg.MainButton.hide();
            item = "";
        } else {
            tg.MainButton.setText("Показать: " + data.label);
            item = data.id;
            tg.MainButton.show();
            el.classList.add("active");
        }
    });
}

// Передаём данные в бота при нажатии MainButton
tg.MainButton.onClick(function () {
    if (item) {
        tg.sendData(item);
    }
});