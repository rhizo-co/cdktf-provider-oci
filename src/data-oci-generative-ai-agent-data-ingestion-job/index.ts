// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiAgentDataIngestionJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job#data_ingestion_job_id DataOciGenerativeAiAgentDataIngestionJob#data_ingestion_job_id}
  */
  readonly dataIngestionJobId: string;
}
export interface DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics {
}

export function dataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsToTerraform(struct?: DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }

  // number_of_failed_files - computed: true, optional: false, required: false
  public get numberOfFailedFiles() {
    return this.getNumberAttribute('number_of_failed_files');
  }

  // number_of_ingested_files - computed: true, optional: false, required: false
  public get numberOfIngestedFiles() {
    return this.getNumberAttribute('number_of_ingested_files');
  }
}

export class DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference {
    return new DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job oci_generative_ai_agent_data_ingestion_job}
*/
export class DataOciGenerativeAiAgentDataIngestionJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_data_ingestion_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job oci_generative_ai_agent_data_ingestion_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiAgentDataIngestionJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiAgentDataIngestionJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_data_ingestion_job',
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
    this._dataIngestionJobId = config.dataIngestionJobId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_ingestion_job_id - computed: false, optional: false, required: true
  private _dataIngestionJobId?: string; 
  public get dataIngestionJobId() {
    return this.getStringAttribute('data_ingestion_job_id');
  }
  public set dataIngestionJobId(value: string) {
    this._dataIngestionJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIngestionJobIdInput() {
    return this._dataIngestionJobId;
  }

  // data_ingestion_job_statistics - computed: true, optional: false, required: false
  private _dataIngestionJobStatistics = new DataOciGenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList(this, "data_ingestion_job_statistics", false);
  public get dataIngestionJobStatistics() {
    return this._dataIngestionJobStatistics;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_ingestion_job_id: cdktf.stringToTerraform(this._dataIngestionJobId),
    };
  }
}
