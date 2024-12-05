// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#compartment_id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#namespace DataOciLogAnalyticsLogAnalyticsEntitiesSummary#namespace}
  */
  readonly namespace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary oci_log_analytics_log_analytics_entities_summary}
*/
export class DataOciLogAnalyticsLogAnalyticsEntitiesSummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_entities_summary";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary oci_log_analytics_log_analytics_entities_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_entities_summary',
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
    this._id = config.id;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_entities_count - computed: true, optional: false, required: false
  public get activeEntitiesCount() {
    return this.getNumberAttribute('active_entities_count');
  }

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

  // entities_with_has_logs_collected_count - computed: true, optional: false, required: false
  public get entitiesWithHasLogsCollectedCount() {
    return this.getNumberAttribute('entities_with_has_logs_collected_count');
  }

  // entities_with_management_agent_count - computed: true, optional: false, required: false
  public get entitiesWithManagementAgentCount() {
    return this.getNumberAttribute('entities_with_management_agent_count');
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
