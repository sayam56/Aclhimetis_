from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string


# Create your views here.
def homepage(request):
    return render(request, 'ByteBusterApp/homepage.html', )


def temp1(request):
    return render(request, 'ByteBusterApp/template1.html', )


def temp1edit(request):
    return render(request, 'ByteBusterApp/template1editor.html', )


def temp2(request):
    return render(request, 'ByteBusterApp/template2.html', )


def temp2edit(request):
    return render(request, 'ByteBusterApp/template2editor.html', )


def temp3(request):
    return render(request, 'ByteBusterApp/template3.html', )


def temp3edit(request):
    return render(request, 'ByteBusterApp/template3editor.html', )


def load_template(request, template_id):
    template_name = 'ByteBusterApp/' + template_id + '.html'
    html = render_to_string(template_name, request=request)
    return HttpResponse(html)
