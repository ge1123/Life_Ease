import { TimePeriod } from "@/_enums/timePeriod";
import { getEnumKeyByEnumValue } from "@/_utils/getEnumKeyByEnumValue";

export default function getTimePeriod(): string {
    // 抓取目前的日期和時間
    const now = new Date();

    // 獲取小時和分鐘
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // 將時間轉換為分鐘數以便比較
    const totalMinutes = hours * 60 + minutes;

    let timePeriod: string = '';

    if (totalMinutes >= 360 && totalMinutes < 630) { // 06:00 - 10:30
        timePeriod = getEnumKeyByEnumValue(TimePeriod, TimePeriod.Morning);
    } else if (totalMinutes >= 630 && totalMinutes < 900) { // 10:30 - 15:00
        timePeriod = getEnumKeyByEnumValue(TimePeriod, TimePeriod.Afternoon);
    } else if (totalMinutes >= 900 && totalMinutes < 1230) { // 15:00 - 20:30
        timePeriod = getEnumKeyByEnumValue(TimePeriod, TimePeriod.Night);
    } else { // 20:30 - 06:00
        timePeriod = getEnumKeyByEnumValue(TimePeriod, TimePeriod.LateNight);
    }

    return timePeriod;
}