FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

COPY ./app /app

RUN pip install pillow numpy

# 如果你使用TensorFlow或PyTorch，请取消注释以下行并安装适当的版本
# RUN pip install tensorflow
# RUN pip install torch torchvision

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
