# template_editor/forms.py
from django import forms

class TemplateForm(forms.Form):
    template_content = forms.CharField(widget=forms.Textarea)
