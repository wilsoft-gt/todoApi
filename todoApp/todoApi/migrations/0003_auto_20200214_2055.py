# Generated by Django 3.0.2 on 2020-02-14 20:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todoApi', '0002_auto_20200213_1627'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainitem',
            name='main_cathegory',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='childItem', to='todoApi.cathegory'),
        ),
    ]
