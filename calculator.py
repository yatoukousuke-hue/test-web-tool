def calculate(left, operator, right):
    if operator == "+":
        return left + right
    if operator == "-":
        return left - right
    if operator == "*":
        return left * right
    if operator == "/":
        if right == 0:
            raise ZeroDivisionError("0で割ることはできません")
        return left / right
    raise ValueError("使える演算子は +, -, *, / です")


def main():
    print("簡単な電卓です。例: 3 + 5")
    print("履歴を見るには history と入力してください。")
    print("終了するには q と入力してください。")

    history = []

    while True:
        text = input("> ").strip()
        if text.lower() in {"q", "quit", "exit"}:
            print("終了します。")
            break
        if text.lower() == "history":
            if not history:
                print("履歴はまだありません。")
                continue

            for index, item in enumerate(history, start=1):
                print(f"{index}: {item}")
            continue

        parts = text.split()
        if len(parts) != 3:
            print("入力形式: 数字 演算子 数字  例: 10 / 2")
            continue

        left_text, operator, right_text = parts

        try:
            left = float(left_text)
            right = float(right_text)
            result = calculate(left, operator, right)
        except ValueError as error:
            print(f"エラー: {error}")
            continue
        except ZeroDivisionError as error:
            print(f"エラー: {error}")
            continue

        entry = f"{left_text} {operator} {right_text} = {result}"
        history.append(entry)
        print(result)


if __name__ == "__main__":
    main()
