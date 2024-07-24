export default function getTimePeriod(): string {
    // 抓取目前的日期和時間
    const now = new Date();

    // 獲取小時和分鐘
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // 將時間轉換為分鐘數以便比較
    const totalMinutes = hours * 60 + minutes;

    let timePeriod = '';

    if (totalMinutes >= 360 && totalMinutes < 630) { // 06:00 - 10:30
        timePeriod = '早餐';
    } else if (totalMinutes >= 630 && totalMinutes < 900) { // 10:30 - 15:00
        timePeriod = '午餐';
    } else if (totalMinutes >= 900 && totalMinutes < 1230) { // 15:00 - 20:30
        timePeriod = '晚餐';
    } else { // 20:30 - 06:00
        timePeriod = '宵夜';
    }

    return timePeriod;
}