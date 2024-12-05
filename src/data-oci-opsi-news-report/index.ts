// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_news_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiNewsReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_news_report#news_report_id DataOciOpsiNewsReport#news_report_id}
  */
  readonly newsReportId: string;
}
export interface DataOciOpsiNewsReportContentTypes {
}

export function dataOciOpsiNewsReportContentTypesToTerraform(struct?: DataOciOpsiNewsReportContentTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOpsiNewsReportContentTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiNewsReportContentTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiNewsReportContentTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_planning_resources - computed: true, optional: false, required: false
  public get capacityPlanningResources() {
    return this.getListAttribute('capacity_planning_resources');
  }

  // sql_insights_fleet_analysis_resources - computed: true, optional: false, required: false
  public get sqlInsightsFleetAnalysisResources() {
    return this.getListAttribute('sql_insights_fleet_analysis_resources');
  }

  // sql_insights_performance_degradation_resources - computed: true, optional: false, required: false
  public get sqlInsightsPerformanceDegradationResources() {
    return this.getListAttribute('sql_insights_performance_degradation_resources');
  }

  // sql_insights_plan_changes_resources - computed: true, optional: false, required: false
  public get sqlInsightsPlanChangesResources() {
    return this.getListAttribute('sql_insights_plan_changes_resources');
  }

  // sql_insights_top_databases_resources - computed: true, optional: false, required: false
  public get sqlInsightsTopDatabasesResources() {
    return this.getListAttribute('sql_insights_top_databases_resources');
  }

  // sql_insights_top_sql_by_insights_resources - computed: true, optional: false, required: false
  public get sqlInsightsTopSqlByInsightsResources() {
    return this.getListAttribute('sql_insights_top_sql_by_insights_resources');
  }

  // sql_insights_top_sql_resources - computed: true, optional: false, required: false
  public get sqlInsightsTopSqlResources() {
    return this.getListAttribute('sql_insights_top_sql_resources');
  }
}

export class DataOciOpsiNewsReportContentTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiNewsReportContentTypesOutputReference {
    return new DataOciOpsiNewsReportContentTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_news_report oci_opsi_news_report}
*/
export class DataOciOpsiNewsReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_news_report";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_news_report oci_opsi_news_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiNewsReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiNewsReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_news_report',
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
    this._newsReportId = config.newsReportId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_child_compartments_included - computed: true, optional: false, required: false
  public get areChildCompartmentsIncluded() {
    return this.getBooleanAttribute('are_child_compartments_included');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // content_types - computed: true, optional: false, required: false
  private _contentTypes = new DataOciOpsiNewsReportContentTypesList(this, "content_types", false);
  public get contentTypes() {
    return this._contentTypes;
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
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

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // news_frequency - computed: true, optional: false, required: false
  public get newsFrequency() {
    return this.getStringAttribute('news_frequency');
  }

  // news_report_id - computed: false, optional: false, required: true
  private _newsReportId?: string; 
  public get newsReportId() {
    return this.getStringAttribute('news_report_id');
  }
  public set newsReportId(value: string) {
    this._newsReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newsReportIdInput() {
    return this._newsReportId;
  }

  // ons_topic_id - computed: true, optional: false, required: false
  public get onsTopicId() {
    return this.getStringAttribute('ons_topic_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      news_report_id: cdktf.stringToTerraform(this._newsReportId),
    };
  }
}
