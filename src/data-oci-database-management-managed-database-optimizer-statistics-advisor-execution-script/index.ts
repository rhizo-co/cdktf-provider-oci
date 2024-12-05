// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#execution_name}
  */
  readonly executionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#task_name}
  */
  readonly taskName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script oci_database_management_managed_database_optimizer_statistics_advisor_execution_script}
*/
export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_optimizer_statistics_advisor_execution_script";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script oci_database_management_managed_database_optimizer_statistics_advisor_execution_script} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_optimizer_statistics_advisor_execution_script',
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
    this._executionName = config.executionName;
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._taskName = config.taskName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // execution_name - computed: false, optional: false, required: true
  private _executionName?: string; 
  public get executionName() {
    return this.getStringAttribute('execution_name');
  }
  public set executionName(value: string) {
    this._executionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNameInput() {
    return this._executionName;
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

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_name: cdktf.stringToTerraform(this._executionName),
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      task_name: cdktf.stringToTerraform(this._taskName),
    };
  }
}
