from flask import Flask, request, jsonify
import h5py
import numpy as np
from PIL import Image
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

app = Flask(__name__)

model = load_model('trained_model.h5')


def preprocess_image(image_path):
    img = image.load_img(image_path, target_size=(300, 300))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0  
    return img_array

@app.route('/classify', methods=['POST'])
def classify():
    
    file = request.files['image']
    img_path = 'temp.jpg'
    file.save(img_path)

    img_array = preprocess_image(img_path)

    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions[0])

    classes = [ "Apple","Banana","DragonFruit","Durian","Grape","Kiwano","Lychee","Mango","Papaya","Pineapple","Salak","Strawberry"]  

    predicted_class_name = classes[predicted_class]

    result = {'class': predicted_class_name}
    return jsonify(result)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000, debug=True)
