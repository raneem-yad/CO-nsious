from openai import OpenAI
import openai
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MotivationalMessage
from .serializers import MotivationalMessageSerializer

# openai.api_key = settings.OPENAI_API_KEY
client = OpenAI(
    api_key=settings.OPENAI_API_KEY,
)

class MotivationalMessageView(APIView):
    def get(self, request):
        """
        Generate a motivational message about being greener and saving energy
        """
        prompt = (
            "Generate a motivational message about how to be greener and save energy. "
            "Make it concise and inspiring."
        )
        try:
            response = client.chat.completions.create(
                messages=[
                    {
                        "role": "user",
                        "content": prompt,
                    }
                ],
                model="gpt-4o",
                max_tokens=50,
            )
            message_content = response.choices[0].message.content.strip()

            # Save to database
            message = MotivationalMessage.objects.create(message=message_content)

            # Serialize and return
            serializer = MotivationalMessageSerializer(message)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except openai.OpenAIError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
