
from flask import Flask, render_template
import json
from time import sleep

app = Flask(__name__)


def get_cv_data(url="data.json"):
    with open(url, mode="r") as f:
        cv_data = json.loads(f.read())
    return cv_data


@app.route('/')
def home():
    cv_data = get_cv_data()
    return render_template('index-jinja-render.html', **cv_data)


@app.route('/generator')
def generator():
    cv_data = get_cv_data()

    html_file = render_template('index-jinja-render.html', **cv_data)
    with open('index.html', 'w') as f:
        f.write(html_file)

    return {"datail": "Success generator !"}


if __name__ == "__main__":
    app.run(debug=True, port=5050)
    sleep(2)


# Télécharger le nouveau CV
