from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.http import FileResponse
from ByteBusterApp.models import PricingTable


# Create your views here.
def homepage(request):
    return render(request, 'ByteBusterApp/homepage.html')


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
    # Get the latest PricingTable object for the current user
    pricing_table = PricingTable.objects.filter(user=request.user).latest('id')

    return render(request, 'ByteBusterApp/pricingpage.html', {'pricing_table': pricing_table})


@login_required
def paymentsuccess(request):
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

