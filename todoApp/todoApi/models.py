from django.db import models

# Create your models here.
class cathegory(models.Model):
    cathegory = models.CharField(max_length=50, default="General")
    def __str__(self):
        return self.cathegory
class mainItem(models.Model):
    main_title = models.CharField(max_length=100)
    main_description = models.TextField()
    main_creation_date = models.DateField(auto_now=False, auto_now_add=True)
    main_due_date = models.DateField(auto_now=False, auto_now_add=False)
    main_cathegory = models.ForeignKey(cathegory, on_delete=models.CASCADE)

    def __str__(self):
        return self.main_title


class childItem(models.Model):
    child_title = models.CharField(max_length=50)
    child_description = models.TextField()
    child_due_date = models.DateField(auto_now=False, auto_now_add=False)
    child_related_to = models.ForeignKey(mainItem, on_delete=models.CASCADE)

    def __str__(self):
        return self.child_title
