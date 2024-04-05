from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.http import FileResponse
from ByteBusterApp.models import PricingTable

from paypal.standard.forms import PayPalPaymentsForm
from django.conf import settings
import  uuid
from django.urls import reverse
from django.shortcuts import render
from django.template.loader import render_to_string
from .forms import TemplateForm
from .models import payment


def edit_template(request):
    if request.method == 'POST':
        form = TemplateForm(request.POST)
        if form.is_valid():
            template_content = form.cleaned_data['template_content']
            # Render the template with the updated content
            updated_template = render_to_string('template_editor.html', {'template_content': template_content})
            embedded_code = f'<script>document.write(`{updated_template}`);</script>'
            return render(request, 'template_editor.html', {'form': form, 'embedded_code': embedded_code})
    else:
        form = TemplateForm()
    return render(request, 'template_editor.html', {'form': form})


def homepage(request):
    detail = ''
    if request.user.is_authenticated:
        detail = payment.objects.get(userid=request.user)

    return render(request, 'ByteBusterApp/homepage.html' , {'detail': detail})


def temp1(request):
    return render(request, 'ByteBusterApp/template1.html')


def temp1edit(request):
    return render(request, 'ByteBusterApp/template1editor.html')


def temp2(request):
    return render(request, 'ByteBusterApp/template2.html')


def temp2edit(request):
    return render(request, 'ByteBusterApp/template2editor.html')


def temp3(request):
    return render(request, 'ByteBusterApp/template3.html')


def temp3edit(request):
    return render(request, 'ByteBusterApp/template3editor.html')


@login_required
def pricingpage(request):
    host = request.get_host()
    paypal_checkout = {
        'business': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': 39.99,
        'invoice': uuid.uuid4(),
        'currency_code': 'CAD',
        'notify_url': f"http://{host}:{reverse('paypal-ipn')}",
        'return_url': f"http://{host}{reverse('ByteBusterApp:paymentsuccess')}",
        'cancel_url': f"http://{host}{reverse('ByteBusterApp:paymentfailed')}",
    }

    paypal_payment = PayPalPaymentsForm(initial=paypal_checkout)

    return render(request, 'ByteBusterApp/pricingpage.html',{'paypal_payment' : paypal_payment})



@login_required
def paymentsuccess(request):
    payer_id = request.GET.get('PayerID', None)
    paymentdone = payment.objects.get(userid = request.user)
    paymentdone.paymentdone = True
    paymentdone.save()
    return render(request, 'ByteBusterApp/paymentsuccess.html')


@login_required
def paymentfailed(request):
    return render(request, 'ByteBusterApp/paymentfailed.html')


def load_template(request, template_id):
    template_name = 'ByteBusterApp/' + template_id + '.html'
    html = render_to_string(template_name, request=request)
    return HttpResponse(html)


@login_required
def save_zip_to_db(request):
    if request.method == 'POST':
        zip_file = request.FILES.get('zip_content')  # Assuming 'zip_content' is the field name
        user = request.user  # Get the logged-in user

        if zip_file:
            # Read the file as binary data
            zip_content = zip_file.read()

            print(len(zip_content))

            # Save zip_content to the database
            PricingTable.objects.create(user=user, zip_content=zip_content)

            # Return success response
            return JsonResponse({'success': True})

    return JsonResponse({'success': False})


@login_required
def download_zip(request, id):  # Add 'id' parameter here
    # Get the PricingTable object with the given id
    pricing_table = PricingTable.objects.get(id=id)

    # Convert the zip content to bytes
    zip_content = bytes(pricing_table.zip_content)

    # Create a FileResponse with the zip content
    response = FileResponse(zip_content, as_attachment=True, filename='pricing_table.zip')

    # Set the Content-Type header to 'application/zip'
    response['Content-Type'] = 'application/zip'

    return response

