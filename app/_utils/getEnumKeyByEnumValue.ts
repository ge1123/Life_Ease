/**
 * 根據枚舉值獲取枚舉鍵。
 *
 * @template T - 枚舉類型
 * @param {T} myEnum - 枚舉對象
 * @param {string} enumValue - 枚舉值
 * @returns {(keyof T | null)} - 返回對應的枚舉鍵，如果找不到則返回 null
 */export function getEnumKeyByEnumValue<T extends object>(myEnum: T, enumValue: string): keyof T | string {
    const keys = Object.keys(myEnum) as Array<keyof T>;
    for (const key of keys) {
        if (myEnum[key] === enumValue) {
            return key;
        }
    }
    return "";
}
