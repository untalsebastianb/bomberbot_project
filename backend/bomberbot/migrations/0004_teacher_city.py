# Generated by Django 3.1.2 on 2020-10-22 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bomberbot', '0003_auto_20201018_2352'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='city',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
