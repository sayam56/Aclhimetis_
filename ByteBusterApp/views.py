from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from paypal.standard.forms import PayPalPaymentsForm
from django.conf import settings
import  uuid
from django.urls import reverse

# Create your views here.

# template_editor/views.py
from django.shortcuts import render
from django.template.loader import render_to_string
from .forms import TemplateForm


def edit_template(request):
    if request.method == 'POST':
        form = TemplateForm(request.POST)
        if form.is_valid():
            template_content = form.cleaned_data['template_content']
            # Render the template with the updated content
            updated_template = render_to_string('template_editor.html', {'template_content': template_content})

            # Generate embedded code
            embedded_code = f'<script>document.write(`{updated_template}`);</script>'

            return render(request, 'template_editor.html', {'form': form, 'embedded_code': embedded_code})
    else:
        form = TemplateForm()
    return render(request, 'template_editor.html', {'form': form})


def homepage(request):
    host = request.get_host()
    paypal_checkout = {
        'bussiness': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': 50,
        'invoice': uuid.uuid4(),
        'currency_code': 'CAD',
        'notify_url': f"https://{host}:{reverse('paypal-ipn')}",
        'return_url': f"https://{host}:{reverse('payment-success')}",
        'cancel_url': f"https://{host}:{reverse('payment-failed')}",
    }

    paypal_payment = PayPalPaymentsForm(initial=paypal_checkout)
    context = {
        'paypal_payment': paypal_payment
    }

    return render(request, 'ByteBusterApp/homepage.html', context)


def temp1(request):
    return render(request, 'ByteBusterApp/template1.html', )


def temp1edit(request):
    return render(request, 'ByteBusterApp/template1editor.html', )


def temp2(request):
    return render(request, 'ByteBusterApp/template2.html', )


def temp3(request):
    return render(request, 'ByteBusterApp/template3.html', )


def load_template(request, template_id):
    template_name = 'ByteBusterApp/' + template_id + '.html'
    html = render_to_string(template_name, request=request)
    return HttpResponse(html)

def checkOut(request):
     host = request.get_host()
     paypal_checkout = {
         'bussiness': settings.PAYPAL_RECEIVER_EMAIL,
         'amount': 50,
         'invoice': uuid.uuid4(),
         'currency_code': 'CAD',
         'notify_url': f"https://{host}:{reverse('paypal-ipn')}",
         'return_url': f"https://{host}:{reverse('payment-success')}",
         'cancel_url': f"https://{host}:{reverse('payment-failed')}",
     }

     paypal_payment = PayPalPaymentsForm(initial=paypal_checkout)
     context ={
         'paypal_payment': paypal_payment
     }

     return render(request,'ByteBusterApp/homepage.html', context)