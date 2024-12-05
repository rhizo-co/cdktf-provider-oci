// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsmanagementManagedInstanceEventReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#compartment_id DataOciOsmanagementManagedInstanceEventReport#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#id DataOciOsmanagementManagedInstanceEventReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_greater_than_or_equal_to DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_greater_than_or_equal_to}
  */
  readonly latestTimestampGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_less_than DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_less_than}
  */
  readonly latestTimestampLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#managed_instance_id DataOciOsmanagementManagedInstanceEventReport#managed_instance_id}
  */
  readonly managedInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report oci_osmanagement_managed_instance_event_report}
*/
export class DataOciOsmanagementManagedInstanceEventReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osmanagement_managed_instance_event_report";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report oci_osmanagement_managed_instance_event_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsmanagementManagedInstanceEventReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceEventReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance_event_report',
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
    this._latestTimestampGreaterThanOrEqualTo = config.latestTimestampGreaterThanOrEqualTo;
    this._latestTimestampLessThan = config.latestTimestampLessThan;
    this._managedInstanceId = config.managedInstanceId;
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

  // counts - computed: true, optional: false, required: false
  public get counts() {
    return this.getNumberAttribute('counts');
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

  // latest_timestamp_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _latestTimestampGreaterThanOrEqualTo?: string; 
  public get latestTimestampGreaterThanOrEqualTo() {
    return this.getStringAttribute('latest_timestamp_greater_than_or_equal_to');
  }
  public set latestTimestampGreaterThanOrEqualTo(value: string) {
    this._latestTimestampGreaterThanOrEqualTo = value;
  }
  public resetLatestTimestampGreaterThanOrEqualTo() {
    this._latestTimestampGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestTimestampGreaterThanOrEqualToInput() {
    return this._latestTimestampGreaterThanOrEqualTo;
  }

  // latest_timestamp_less_than - computed: false, optional: true, required: false
  private _latestTimestampLessThan?: string; 
  public get latestTimestampLessThan() {
    return this.getStringAttribute('latest_timestamp_less_than');
  }
  public set latestTimestampLessThan(value: string) {
    this._latestTimestampLessThan = value;
  }
  public resetLatestTimestampLessThan() {
    this._latestTimestampLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestTimestampLessThanInput() {
    return this._latestTimestampLessThan;
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      latest_timestamp_greater_than_or_equal_to: cdktf.stringToTerraform(this._latestTimestampGreaterThanOrEqualTo),
      latest_timestamp_less_than: cdktf.stringToTerraform(this._latestTimestampLessThan),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
    };
  }
}
