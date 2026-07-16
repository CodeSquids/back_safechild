import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  constructor(
      @Inject('NOTIFICATION_REPOSITORY')
        private notificationtRepository: typeof Notification,
      ) {}
  
  async create(CreateNotificationDto: CreateNotificationDto): Promise<Notification> {
    const notification = this.notificationtRepository.build(CreateNotificationDto as any);
    return await notification.save();
  }

  async findAll(): Promise<Notification[]> {
    return this.notificationtRepository.findAll<Notification>();
  }

  async findOne(id: number): Promise<Notification> {
    const notification = await this.notificationtRepository.findByPk(id);
    if (!notification) {
      throw new NotFoundException(`Notification with id ${id} not found`);
    }
    return notification;
  }

  async update(id: number, UpdateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    const notification = await this.notificationtRepository.findByPk(id);
    if (!notification) {
      throw new NotFoundException(`Notification with id ${id} not found`);
    }
    await notification.update(UpdateNotificationDto);
    return notification;
  }

  async remove(id: number): Promise<Notification> {
    const notification = await this.notificationtRepository.findByPk(id);
    if (!notification) {
      throw new NotFoundException(`Notification with id ${id} not found`);
    }
    await notification.destroy();
    return notification;
  }
}
