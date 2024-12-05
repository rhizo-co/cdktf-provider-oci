# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_id: str,
  managed_database_id: str,
  sql_object_id: str,
  sql_tuning_advisor_task_id: str,
  id: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.executionId">execution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.sqlObjectId">sql_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.executionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#execution_id}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#managed_database_id}.

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.sqlObjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_object_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.sqlTuningAdvisorTaskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_tuning_advisor_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.modified">modified</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.original">original</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.executionIdInput">execution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.sqlObjectIdInput">sql_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.sqlTuningAdvisorTaskIdInput">sql_tuning_advisor_task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.executionId">execution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.sqlObjectId">sql_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `modified`<sup>Required</sup> <a name="modified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.modified"></a>

```python
modified: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList</a>

---

##### `original`<sup>Required</sup> <a name="original" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.original"></a>

```python
original: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList</a>

---

##### `execution_id_input`<sup>Optional</sup> <a name="execution_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.executionIdInput"></a>

```python
execution_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `sql_object_id_input`<sup>Optional</sup> <a name="sql_object_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.sqlObjectIdInput"></a>

```python
sql_object_id_input: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id_input`<sup>Optional</sup> <a name="sql_tuning_advisor_task_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.sqlTuningAdvisorTaskIdInput"></a>

```python
sql_tuning_advisor_task_id_input: str
```

- *Type:* str

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.executionId"></a>

```python
execution_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.sqlObjectId"></a>

```python
sql_object_id: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_id: str,
  managed_database_id: str,
  sql_object_id: str,
  sql_tuning_advisor_task_id: str,
  id: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.executionId">execution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.sqlObjectId">sql_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.executionId"></a>

```python
execution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#execution_id}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#managed_database_id}.

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.sqlObjectId"></a>

```python
sql_object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_object_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#sql_tuning_advisor_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified()
```


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.planStats">plan_stats</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.planStatus">plan_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plan_stats`<sup>Required</sup> <a name="plan_stats" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.planStats"></a>

```python
plan_stats: StringMap
```

- *Type:* cdktf.StringMap

---

##### `plan_status`<sup>Required</sup> <a name="plan_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.planStatus"></a>

```python
plan_status: str
```

- *Type:* str

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModifiedOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_execution_plan_stats_comparision

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.planStats">plan_stats</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.planStatus">plan_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plan_stats`<sup>Required</sup> <a name="plan_stats" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.planStats"></a>

```python
plan_stats: StringMap
```

- *Type:* cdktf.StringMap

---

##### `plan_status`<sup>Required</sup> <a name="plan_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.planStatus"></a>

```python
plan_status: str
```

- *Type:* str

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginalOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal</a>

---



