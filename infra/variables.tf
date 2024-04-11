variable "region" {
  description = "ca-central-1"
  type        = string
}

variable "subnets" {
  description = "Subnets for the ECS tasks"
  type        = list(string)
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}
