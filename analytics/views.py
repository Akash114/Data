from django.contrib.auth import logout
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.shortcuts import render
from . import Form
import pandas as pd
import json
import itertools
import numpy as np
from faker import Factory
import io
import matplotlib.pyplot as plt


colorPalette = ['#55efc4', '#81ecec', '#a29bfe', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8']
colorPrimary, colorSuccess, colorDanger = '#79aec8', colorPalette[0], colorPalette[5]


# Home page
def home(request):
    form = Form.FileUploadForm()
    return render(request, 'visualization.html', {'form': form})


def read_file(request):
    file = request.FILES["Select_File"]
    try:
        df = pd.read_excel(file)
    except:
        try:
            df = pd.read_csv(file)
        except:
            return HttpResponse(json.dumps({'msg': 'File type is not supported!'}),
                                content_type="application/json")
    return df


def style_line(s):
    '''Rendering odd and even rows with different color'''
    return ['background-color: #D4E6F1' if i%2!=0 else 'background-color: #85C1E9' for i in range(len(s))]


def preview_link(request):
    if request.is_ajax():
        form = Form.FileUploadForm(data=request.POST, files=request.FILES)
        if form.is_valid():
            df = read_file(request)
            df = df.head(100).style.apply(style_line).render()
            print(df)
            return HttpResponse(json.dumps({'html': df}), content_type="application/json")


# Get the column name from first raw
def get_columns(request):
    if request.is_ajax():
        form = Form.FileUploadForm(data=request.POST, files=request.FILES)
        if form.is_valid():
            df = read_file(request)
            fig, ax = plt.subplots(1, figsize=(5, 5))
            ax.axis('off')
            ax.set_title('Uploaded File ',
                         fontdict={'fontsize': '15', 'fontweight': '3'})
            ax.table(cellText=df.head().values, colLabels=df.columns, loc="center")
            imgdata = io.StringIO()
            fig.figure.savefig(imgdata, format='svg')
            imgdata.seek(0)
            column = list(df.columns)
            return HttpResponse(json.dumps({'data': column, 'msg': 'File Uploaded','img':imgdata.getvalue()}), content_type="application/json")
        else:
            return HttpResponse(json.dumps({'msg': form.errors}), content_type="application/json")
    else:
        return HttpResponse(json.dumps({'msg': 'Login Required'}), content_type="application/json")


class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(NpEncoder, self).default(obj)


def visualize(request):
    if request.method == 'POST':
        form = Form.FileUploadForm(data=request.POST, files=request.FILES)
        if form.is_valid():
            df = read_file(request)
            label_column = request.POST['label']
            value_column = request.POST['value']

            labels = list(df[label_column])
            values = list(df[value_column])

            fake = Factory.create()
            bg_color = []
            for i in range(len(labels)):
                bg_color.append(fake.hex_color())

            return JsonResponse({
                'title': f'{label_column} vs {value_column}',
                'data': {
                    'name':value_column,
                    'labels': list(labels),
                    'backgroundColor': bg_color,
                    'borderColor': colorPrimary,
                    'data': list(values),
                },
            }, encoder=NpEncoder)
        return HttpResponse(json.dumps({'msg': 'Something went wrong!'}), content_type="application/json")
    return HttpResponse(json.dumps({'msg': 'Something went wrong!'}), content_type="application/json")


def two_variables(request):
    if request.method == 'POST':
        fake = Factory.create()
        form = Form.FileUploadForm(data=request.POST, files=request.FILES)
        if form.is_valid():
            df = read_file(request)
            label_column = request.POST['label']
            value_column_1 = request.POST['value']
            value_column_2 = request.POST['value2']
            labels = list(df[label_column])
            values_1 = list(df[value_column_1])
            values_2 = list(df[value_column_2])



            dataset = []

            value_column_1_dict = {
                'label': value_column_1,
                'backgroundColor': "blue",
                'data': values_1
            }
            value_column_2_dict = {
                'label': value_column_2,
                'backgroundColor': "red",
                'data': values_2
            }
            dataset.append(value_column_1_dict)
            dataset.append(value_column_2_dict)

            return JsonResponse({
                'title': f' {value_column_1} and {value_column_2} vs {label_column}',
                'data': {
                    'labels': labels,
                    'dataset': dataset
                },
            }, encoder=NpEncoder)


def menu(request):
    return render(request,'menu.html')


def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')
    # Redirect to a success page.
