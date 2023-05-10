import { ApiModelProperty } from '@nestjs/swagger'
import { IsInt } from 'class-validator'
import { Type } from 'class-transformer'

/**
 * 返回数据
 */
export class ResultSend {
  @ApiModelProperty({ description: 'code', example: 200})
  readonly code: number

  @ApiModelProperty({ description: '是否成功' })
  @Type(() => String)
  readonly message: string
  @ApiModelProperty({ description: '是否成功' })
  content: any
}
