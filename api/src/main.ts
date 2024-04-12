import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Ativa o CORS para trabalhar localmente simulando servidores separados
    app.enableCors({
      origin: 'http://localhost:8080', 
      methods: 'GET,POST,PUT,DELETE',   
      allowedHeaders: 'Content-Type, Accept',  
    });

    
  await app.listen(3000);
}
bootstrap();
