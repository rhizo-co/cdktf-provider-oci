// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasciencePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}
  */
  readonly deleteRelatedPipelineRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}
  */
  readonly projectId: string;
  /**
  * configuration_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#configuration_details DatasciencePipeline#configuration_details}
  */
  readonly configurationDetails?: DatasciencePipelineConfigurationDetails;
  /**
  * infrastructure_configuration_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#infrastructure_configuration_details DatasciencePipeline#infrastructure_configuration_details}
  */
  readonly infrastructureConfigurationDetails?: DatasciencePipelineInfrastructureConfigurationDetails;
  /**
  * log_configuration_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_configuration_details DatasciencePipeline#log_configuration_details}
  */
  readonly logConfigurationDetails?: DatasciencePipelineLogConfigurationDetails;
  /**
  * step_artifact block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_artifact DatasciencePipeline#step_artifact}
  */
  readonly stepArtifact?: DatasciencePipelineStepArtifact[] | cdktf.IResolvable;
  /**
  * step_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_details DatasciencePipeline#step_details}
  */
  readonly stepDetails: DatasciencePipelineStepDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#timeouts DatasciencePipeline#timeouts}
  */
  readonly timeouts?: DatasciencePipelineTimeouts;
}
export interface DatasciencePipelineConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#type DatasciencePipeline#type}
  */
  readonly type: string;
}

export function datasciencePipelineConfigurationDetailsToTerraform(struct?: DatasciencePipelineConfigurationDetailsOutputReference | DatasciencePipelineConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DatasciencePipelineConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLineArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineArguments = this._commandLineArguments;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._maximumRuntimeInMinutes = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
      this._type = value.type;
    }
  }

  // command_line_arguments - computed: true, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: true, required: false
  private _maximumRuntimeInMinutes?: string; 
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
  public set maximumRuntimeInMinutes(value: string) {
    this._maximumRuntimeInMinutes = value;
  }
  public resetMaximumRuntimeInMinutes() {
    this._maximumRuntimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeInMinutesInput() {
    return this._maximumRuntimeInMinutes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}
  */
  readonly ocpus?: number;
}

export function datasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsToTerraform(struct?: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference | DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}

export class DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatasciencePipelineInfrastructureConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}
  */
  readonly shapeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * shape_config_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_config_details DatasciencePipeline#shape_config_details}
  */
  readonly shapeConfigDetails?: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails;
}

export function datasciencePipelineInfrastructureConfigurationDetailsToTerraform(struct?: DatasciencePipelineInfrastructureConfigurationDetailsOutputReference | DatasciencePipelineInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config_details: datasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsToTerraform(struct!.shapeConfigDetails),
  }
}

export class DatasciencePipelineInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSizeInGbs = this._blockStorageSizeInGbs;
    }
    if (this._shapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeName = this._shapeName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfigDetails = this._shapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSizeInGbs = undefined;
      this._shapeName = undefined;
      this._subnetId = undefined;
      this._shapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSizeInGbs = value.blockStorageSizeInGbs;
      this._shapeName = value.shapeName;
      this._subnetId = value.subnetId;
      this._shapeConfigDetails.internalValue = value.shapeConfigDetails;
    }
  }

  // block_storage_size_in_gbs - computed: false, optional: false, required: true
  private _blockStorageSizeInGbs?: number; 
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }
  public set blockStorageSizeInGbs(value: number) {
    this._blockStorageSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInGbsInput() {
    return this._blockStorageSizeInGbs;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config_details - computed: false, optional: true, required: false
  private _shapeConfigDetails = new DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(this, "shape_config_details");
  public get shapeConfigDetails() {
    return this._shapeConfigDetails;
  }
  public putShapeConfigDetails(value: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails) {
    this._shapeConfigDetails.internalValue = value;
  }
  public resetShapeConfigDetails() {
    this._shapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigDetailsInput() {
    return this._shapeConfigDetails.internalValue;
  }
}
export interface DatasciencePipelineLogConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_auto_log_creation DatasciencePipeline#enable_auto_log_creation}
  */
  readonly enableAutoLogCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_logging DatasciencePipeline#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_group_id DatasciencePipeline#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_id DatasciencePipeline#log_id}
  */
  readonly logId?: string;
}

export function datasciencePipelineLogConfigurationDetailsToTerraform(struct?: DatasciencePipelineLogConfigurationDetailsOutputReference | DatasciencePipelineLogConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_log_creation: cdktf.booleanToTerraform(struct!.enableAutoLogCreation),
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}

export class DatasciencePipelineLogConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineLogConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoLogCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoLogCreation = this._enableAutoLogCreation;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineLogConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutoLogCreation = undefined;
      this._enableLogging = undefined;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutoLogCreation = value.enableAutoLogCreation;
      this._enableLogging = value.enableLogging;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // enable_auto_log_creation - computed: true, optional: true, required: false
  private _enableAutoLogCreation?: boolean | cdktf.IResolvable; 
  public get enableAutoLogCreation() {
    return this.getBooleanAttribute('enable_auto_log_creation');
  }
  public set enableAutoLogCreation(value: boolean | cdktf.IResolvable) {
    this._enableAutoLogCreation = value;
  }
  public resetEnableAutoLogCreation() {
    this._enableAutoLogCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoLogCreationInput() {
    return this._enableAutoLogCreation;
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: true, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatasciencePipelineStepArtifact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_disposition DatasciencePipeline#artifact_content_disposition}
  */
  readonly artifactContentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_length DatasciencePipeline#artifact_content_length}
  */
  readonly artifactContentLength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#pipeline_step_artifact DatasciencePipeline#pipeline_step_artifact}
  */
  readonly pipelineStepArtifact: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}
  */
  readonly stepName: string;
}

export function datasciencePipelineStepArtifactToTerraform(struct?: DatasciencePipelineStepArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_content_disposition: cdktf.stringToTerraform(struct!.artifactContentDisposition),
    artifact_content_length: cdktf.stringToTerraform(struct!.artifactContentLength),
    pipeline_step_artifact: cdktf.stringToTerraform(struct!.pipelineStepArtifact),
    step_name: cdktf.stringToTerraform(struct!.stepName),
  }
}

export class DatasciencePipelineStepArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatasciencePipelineStepArtifact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactContentDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactContentDisposition = this._artifactContentDisposition;
    }
    if (this._artifactContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactContentLength = this._artifactContentLength;
    }
    if (this._pipelineStepArtifact !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineStepArtifact = this._pipelineStepArtifact;
    }
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineStepArtifact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactContentDisposition = undefined;
      this._artifactContentLength = undefined;
      this._pipelineStepArtifact = undefined;
      this._stepName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactContentDisposition = value.artifactContentDisposition;
      this._artifactContentLength = value.artifactContentLength;
      this._pipelineStepArtifact = value.pipelineStepArtifact;
      this._stepName = value.stepName;
    }
  }

  // artifact_content_disposition - computed: false, optional: true, required: false
  private _artifactContentDisposition?: string; 
  public get artifactContentDisposition() {
    return this.getStringAttribute('artifact_content_disposition');
  }
  public set artifactContentDisposition(value: string) {
    this._artifactContentDisposition = value;
  }
  public resetArtifactContentDisposition() {
    this._artifactContentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactContentDispositionInput() {
    return this._artifactContentDisposition;
  }

  // artifact_content_length - computed: false, optional: false, required: true
  private _artifactContentLength?: string; 
  public get artifactContentLength() {
    return this.getStringAttribute('artifact_content_length');
  }
  public set artifactContentLength(value: string) {
    this._artifactContentLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactContentLengthInput() {
    return this._artifactContentLength;
  }

  // artifact_content_md5 - computed: true, optional: false, required: false
  public get artifactContentMd5() {
    return this.getStringAttribute('artifact_content_md5');
  }

  // artifact_last_modified - computed: true, optional: false, required: false
  public get artifactLastModified() {
    return this.getStringAttribute('artifact_last_modified');
  }

  // pipeline_step_artifact - computed: false, optional: false, required: true
  private _pipelineStepArtifact?: string; 
  public get pipelineStepArtifact() {
    return this.getStringAttribute('pipeline_step_artifact');
  }
  public set pipelineStepArtifact(value: string) {
    this._pipelineStepArtifact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineStepArtifactInput() {
    return this._pipelineStepArtifact;
  }

  // step_name - computed: false, optional: false, required: true
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }
}

export class DatasciencePipelineStepArtifactList extends cdktf.ComplexList {
  public internalValue? : DatasciencePipelineStepArtifact[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatasciencePipelineStepArtifactOutputReference {
    return new DatasciencePipelineStepArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasciencePipelineStepDetailsStepConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
}

export function datasciencePipelineStepDetailsStepConfigurationDetailsToTerraform(struct?: DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference | DatasciencePipelineStepDetailsStepConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
  }
}

export class DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineStepDetailsStepConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLineArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineArguments = this._commandLineArguments;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineStepDetailsStepConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._maximumRuntimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
    }
  }

  // command_line_arguments - computed: true, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: true, required: false
  private _maximumRuntimeInMinutes?: string; 
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
  public set maximumRuntimeInMinutes(value: string) {
    this._maximumRuntimeInMinutes = value;
  }
  public resetMaximumRuntimeInMinutes() {
    this._maximumRuntimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeInMinutesInput() {
    return this._maximumRuntimeInMinutes;
  }
}
export interface DatasciencePipelineStepDetailsStepContainerConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#cmd DatasciencePipeline#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#container_type DatasciencePipeline#container_type}
  */
  readonly containerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#entrypoint DatasciencePipeline#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image DatasciencePipeline#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_digest DatasciencePipeline#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_signature_id DatasciencePipeline#image_signature_id}
  */
  readonly imageSignatureId?: string;
}

export function datasciencePipelineStepDetailsStepContainerConfigurationDetailsToTerraform(struct?: DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference | DatasciencePipelineStepDetailsStepContainerConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cmd),
    container_type: cdktf.stringToTerraform(struct!.containerType),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_signature_id: cdktf.stringToTerraform(struct!.imageSignatureId),
  }
}

export class DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineStepDetailsStepContainerConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._containerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerType = this._containerType;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._imageSignatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSignatureId = this._imageSignatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineStepDetailsStepContainerConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
      this._containerType = undefined;
      this._entrypoint = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._imageSignatureId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
      this._containerType = value.containerType;
      this._entrypoint = value.entrypoint;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._imageSignatureId = value.imageSignatureId;
    }
  }

  // cmd - computed: true, optional: true, required: false
  private _cmd?: string[]; 
  public get cmd() {
    return this.getListAttribute('cmd');
  }
  public set cmd(value: string[]) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // container_type - computed: false, optional: false, required: true
  private _containerType?: string; 
  public get containerType() {
    return this.getStringAttribute('container_type');
  }
  public set containerType(value: string) {
    this._containerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTypeInput() {
    return this._containerType;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_signature_id - computed: true, optional: true, required: false
  private _imageSignatureId?: string; 
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }
  public set imageSignatureId(value: string) {
    this._imageSignatureId = value;
  }
  public resetImageSignatureId() {
    this._imageSignatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSignatureIdInput() {
    return this._imageSignatureId;
  }
}
export interface DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}
  */
  readonly ocpus?: number;
}

export function datasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsToTerraform(struct?: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference | DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}

export class DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}
  */
  readonly shapeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * shape_config_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_config_details DatasciencePipeline#shape_config_details}
  */
  readonly shapeConfigDetails?: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails;
}

export function datasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsToTerraform(struct?: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference | DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config_details: datasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsToTerraform(struct!.shapeConfigDetails),
  }
}

export class DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSizeInGbs = this._blockStorageSizeInGbs;
    }
    if (this._shapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeName = this._shapeName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfigDetails = this._shapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSizeInGbs = undefined;
      this._shapeName = undefined;
      this._subnetId = undefined;
      this._shapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSizeInGbs = value.blockStorageSizeInGbs;
      this._shapeName = value.shapeName;
      this._subnetId = value.subnetId;
      this._shapeConfigDetails.internalValue = value.shapeConfigDetails;
    }
  }

  // block_storage_size_in_gbs - computed: false, optional: false, required: true
  private _blockStorageSizeInGbs?: number; 
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }
  public set blockStorageSizeInGbs(value: number) {
    this._blockStorageSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInGbsInput() {
    return this._blockStorageSizeInGbs;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config_details - computed: false, optional: true, required: false
  private _shapeConfigDetails = new DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(this, "shape_config_details");
  public get shapeConfigDetails() {
    return this._shapeConfigDetails;
  }
  public putShapeConfigDetails(value: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails) {
    this._shapeConfigDetails.internalValue = value;
  }
  public resetShapeConfigDetails() {
    this._shapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigDetailsInput() {
    return this._shapeConfigDetails.internalValue;
  }
}
export interface DatasciencePipelineStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#depends_on DatasciencePipeline#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#is_artifact_uploaded DatasciencePipeline#is_artifact_uploaded}
  */
  readonly isArtifactUploaded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#job_id DatasciencePipeline#job_id}
  */
  readonly jobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}
  */
  readonly stepName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_type DatasciencePipeline#step_type}
  */
  readonly stepType: string;
  /**
  * step_configuration_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_configuration_details DatasciencePipeline#step_configuration_details}
  */
  readonly stepConfigurationDetails?: DatasciencePipelineStepDetailsStepConfigurationDetails;
  /**
  * step_container_configuration_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_container_configuration_details DatasciencePipeline#step_container_configuration_details}
  */
  readonly stepContainerConfigurationDetails?: DatasciencePipelineStepDetailsStepContainerConfigurationDetails;
  /**
  * step_infrastructure_configuration_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_infrastructure_configuration_details DatasciencePipeline#step_infrastructure_configuration_details}
  */
  readonly stepInfrastructureConfigurationDetails?: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails;
}

export function datasciencePipelineStepDetailsToTerraform(struct?: DatasciencePipelineStepDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    description: cdktf.stringToTerraform(struct!.description),
    is_artifact_uploaded: cdktf.booleanToTerraform(struct!.isArtifactUploaded),
    job_id: cdktf.stringToTerraform(struct!.jobId),
    step_name: cdktf.stringToTerraform(struct!.stepName),
    step_type: cdktf.stringToTerraform(struct!.stepType),
    step_configuration_details: datasciencePipelineStepDetailsStepConfigurationDetailsToTerraform(struct!.stepConfigurationDetails),
    step_container_configuration_details: datasciencePipelineStepDetailsStepContainerConfigurationDetailsToTerraform(struct!.stepContainerConfigurationDetails),
    step_infrastructure_configuration_details: datasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsToTerraform(struct!.stepInfrastructureConfigurationDetails),
  }
}

export class DatasciencePipelineStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatasciencePipelineStepDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isArtifactUploaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isArtifactUploaded = this._isArtifactUploaded;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    if (this._stepType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepType = this._stepType;
    }
    if (this._stepConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepConfigurationDetails = this._stepConfigurationDetails?.internalValue;
    }
    if (this._stepContainerConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepContainerConfigurationDetails = this._stepContainerConfigurationDetails?.internalValue;
    }
    if (this._stepInfrastructureConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepInfrastructureConfigurationDetails = this._stepInfrastructureConfigurationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineStepDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependsOn = undefined;
      this._description = undefined;
      this._isArtifactUploaded = undefined;
      this._jobId = undefined;
      this._stepName = undefined;
      this._stepType = undefined;
      this._stepConfigurationDetails.internalValue = undefined;
      this._stepContainerConfigurationDetails.internalValue = undefined;
      this._stepInfrastructureConfigurationDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependsOn = value.dependsOn;
      this._description = value.description;
      this._isArtifactUploaded = value.isArtifactUploaded;
      this._jobId = value.jobId;
      this._stepName = value.stepName;
      this._stepType = value.stepType;
      this._stepConfigurationDetails.internalValue = value.stepConfigurationDetails;
      this._stepContainerConfigurationDetails.internalValue = value.stepContainerConfigurationDetails;
      this._stepInfrastructureConfigurationDetails.internalValue = value.stepInfrastructureConfigurationDetails;
    }
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // is_artifact_uploaded - computed: true, optional: true, required: false
  private _isArtifactUploaded?: boolean | cdktf.IResolvable; 
  public get isArtifactUploaded() {
    return this.getBooleanAttribute('is_artifact_uploaded');
  }
  public set isArtifactUploaded(value: boolean | cdktf.IResolvable) {
    this._isArtifactUploaded = value;
  }
  public resetIsArtifactUploaded() {
    this._isArtifactUploaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isArtifactUploadedInput() {
    return this._isArtifactUploaded;
  }

  // job_id - computed: true, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // step_name - computed: false, optional: false, required: true
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // step_type - computed: false, optional: false, required: true
  private _stepType?: string; 
  public get stepType() {
    return this.getStringAttribute('step_type');
  }
  public set stepType(value: string) {
    this._stepType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepTypeInput() {
    return this._stepType;
  }

  // step_configuration_details - computed: false, optional: true, required: false
  private _stepConfigurationDetails = new DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference(this, "step_configuration_details");
  public get stepConfigurationDetails() {
    return this._stepConfigurationDetails;
  }
  public putStepConfigurationDetails(value: DatasciencePipelineStepDetailsStepConfigurationDetails) {
    this._stepConfigurationDetails.internalValue = value;
  }
  public resetStepConfigurationDetails() {
    this._stepConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepConfigurationDetailsInput() {
    return this._stepConfigurationDetails.internalValue;
  }

  // step_container_configuration_details - computed: false, optional: true, required: false
  private _stepContainerConfigurationDetails = new DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference(this, "step_container_configuration_details");
  public get stepContainerConfigurationDetails() {
    return this._stepContainerConfigurationDetails;
  }
  public putStepContainerConfigurationDetails(value: DatasciencePipelineStepDetailsStepContainerConfigurationDetails) {
    this._stepContainerConfigurationDetails.internalValue = value;
  }
  public resetStepContainerConfigurationDetails() {
    this._stepContainerConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepContainerConfigurationDetailsInput() {
    return this._stepContainerConfigurationDetails.internalValue;
  }

  // step_infrastructure_configuration_details - computed: false, optional: true, required: false
  private _stepInfrastructureConfigurationDetails = new DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference(this, "step_infrastructure_configuration_details");
  public get stepInfrastructureConfigurationDetails() {
    return this._stepInfrastructureConfigurationDetails;
  }
  public putStepInfrastructureConfigurationDetails(value: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails) {
    this._stepInfrastructureConfigurationDetails.internalValue = value;
  }
  public resetStepInfrastructureConfigurationDetails() {
    this._stepInfrastructureConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInfrastructureConfigurationDetailsInput() {
    return this._stepInfrastructureConfigurationDetails.internalValue;
  }
}

export class DatasciencePipelineStepDetailsList extends cdktf.ComplexList {
  public internalValue? : DatasciencePipelineStepDetails[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatasciencePipelineStepDetailsOutputReference {
    return new DatasciencePipelineStepDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasciencePipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#create DatasciencePipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete DatasciencePipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#update DatasciencePipeline#update}
  */
  readonly update?: string;
}

export function datasciencePipelineTimeoutsToTerraform(struct?: DatasciencePipelineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DatasciencePipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasciencePipelineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline oci_datascience_pipeline}
*/
export class DatasciencePipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline oci_datascience_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasciencePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DatasciencePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._deleteRelatedPipelineRuns = config.deleteRelatedPipelineRuns;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._projectId = config.projectId;
    this._configurationDetails.internalValue = config.configurationDetails;
    this._infrastructureConfigurationDetails.internalValue = config.infrastructureConfigurationDetails;
    this._logConfigurationDetails.internalValue = config.logConfigurationDetails;
    this._stepArtifact.internalValue = config.stepArtifact;
    this._stepDetails.internalValue = config.stepDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // delete_related_pipeline_runs - computed: false, optional: true, required: false
  private _deleteRelatedPipelineRuns?: boolean | cdktf.IResolvable; 
  public get deleteRelatedPipelineRuns() {
    return this.getBooleanAttribute('delete_related_pipeline_runs');
  }
  public set deleteRelatedPipelineRuns(value: boolean | cdktf.IResolvable) {
    this._deleteRelatedPipelineRuns = value;
  }
  public resetDeleteRelatedPipelineRuns() {
    this._deleteRelatedPipelineRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRelatedPipelineRunsInput() {
    return this._deleteRelatedPipelineRuns;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // configuration_details - computed: false, optional: true, required: false
  private _configurationDetails = new DatasciencePipelineConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }
  public putConfigurationDetails(value: DatasciencePipelineConfigurationDetails) {
    this._configurationDetails.internalValue = value;
  }
  public resetConfigurationDetails() {
    this._configurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDetailsInput() {
    return this._configurationDetails.internalValue;
  }

  // infrastructure_configuration_details - computed: false, optional: true, required: false
  private _infrastructureConfigurationDetails = new DatasciencePipelineInfrastructureConfigurationDetailsOutputReference(this, "infrastructure_configuration_details");
  public get infrastructureConfigurationDetails() {
    return this._infrastructureConfigurationDetails;
  }
  public putInfrastructureConfigurationDetails(value: DatasciencePipelineInfrastructureConfigurationDetails) {
    this._infrastructureConfigurationDetails.internalValue = value;
  }
  public resetInfrastructureConfigurationDetails() {
    this._infrastructureConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationDetailsInput() {
    return this._infrastructureConfigurationDetails.internalValue;
  }

  // log_configuration_details - computed: false, optional: true, required: false
  private _logConfigurationDetails = new DatasciencePipelineLogConfigurationDetailsOutputReference(this, "log_configuration_details");
  public get logConfigurationDetails() {
    return this._logConfigurationDetails;
  }
  public putLogConfigurationDetails(value: DatasciencePipelineLogConfigurationDetails) {
    this._logConfigurationDetails.internalValue = value;
  }
  public resetLogConfigurationDetails() {
    this._logConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationDetailsInput() {
    return this._logConfigurationDetails.internalValue;
  }

  // step_artifact - computed: false, optional: true, required: false
  private _stepArtifact = new DatasciencePipelineStepArtifactList(this, "step_artifact", false);
  public get stepArtifact() {
    return this._stepArtifact;
  }
  public putStepArtifact(value: DatasciencePipelineStepArtifact[] | cdktf.IResolvable) {
    this._stepArtifact.internalValue = value;
  }
  public resetStepArtifact() {
    this._stepArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepArtifactInput() {
    return this._stepArtifact.internalValue;
  }

  // step_details - computed: false, optional: false, required: true
  private _stepDetails = new DatasciencePipelineStepDetailsList(this, "step_details", false);
  public get stepDetails() {
    return this._stepDetails;
  }
  public putStepDetails(value: DatasciencePipelineStepDetails[] | cdktf.IResolvable) {
    this._stepDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepDetailsInput() {
    return this._stepDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatasciencePipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatasciencePipelineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      delete_related_pipeline_runs: cdktf.booleanToTerraform(this._deleteRelatedPipelineRuns),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      configuration_details: datasciencePipelineConfigurationDetailsToTerraform(this._configurationDetails.internalValue),
      infrastructure_configuration_details: datasciencePipelineInfrastructureConfigurationDetailsToTerraform(this._infrastructureConfigurationDetails.internalValue),
      log_configuration_details: datasciencePipelineLogConfigurationDetailsToTerraform(this._logConfigurationDetails.internalValue),
      step_artifact: cdktf.listMapper(datasciencePipelineStepArtifactToTerraform, true)(this._stepArtifact.internalValue),
      step_details: cdktf.listMapper(datasciencePipelineStepDetailsToTerraform, true)(this._stepDetails.internalValue),
      timeouts: datasciencePipelineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
