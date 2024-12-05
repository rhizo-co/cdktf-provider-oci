# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter]] = None,
  id: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.executionId">execution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.sqlObjectId">sql_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.executionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}.

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.sqlObjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.sqlTuningAdvisorTaskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskRecommendationCollection">sql_tuning_advisor_task_recommendation_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.executionIdInput">execution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlObjectIdInput">sql_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskIdInput">sql_tuning_advisor_task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.executionId">execution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlObjectId">sql_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList</a>

---

##### `sql_tuning_advisor_task_recommendation_collection`<sup>Required</sup> <a name="sql_tuning_advisor_task_recommendation_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskRecommendationCollection"></a>

```python
sql_tuning_advisor_task_recommendation_collection: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList</a>

---

##### `execution_id_input`<sup>Optional</sup> <a name="execution_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.executionIdInput"></a>

```python
execution_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `sql_object_id_input`<sup>Optional</sup> <a name="sql_object_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlObjectIdInput"></a>

```python
sql_object_id_input: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id_input`<sup>Optional</sup> <a name="sql_tuning_advisor_task_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskIdInput"></a>

```python
sql_tuning_advisor_task_id_input: str
```

- *Type:* str

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.executionId"></a>

```python
execution_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlObjectId"></a>

```python
sql_object_id: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter]] = None,
  id: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.executionId">execution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.sqlObjectId">sql_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.executionId"></a>

```python
execution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}.

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.sqlObjectId"></a>

```python
sql_object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection()
```


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.benefit">benefit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.finding">finding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.implementActionSql">implement_action_sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.isParallelExecution">is_parallel_execution</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.rationale">rationale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendationKey">recommendation_key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendationType">recommendation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">sql_tuning_advisor_task_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `benefit`<sup>Required</sup> <a name="benefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.benefit"></a>

```python
benefit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `finding`<sup>Required</sup> <a name="finding" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.finding"></a>

```python
finding: str
```

- *Type:* str

---

##### `implement_action_sql`<sup>Required</sup> <a name="implement_action_sql" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.implementActionSql"></a>

```python
implement_action_sql: str
```

- *Type:* str

---

##### `is_parallel_execution`<sup>Required</sup> <a name="is_parallel_execution" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.isParallelExecution"></a>

```python
is_parallel_execution: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rationale`<sup>Required</sup> <a name="rationale" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.rationale"></a>

```python
rationale: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `recommendation_key`<sup>Required</sup> <a name="recommendation_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendationKey"></a>

```python
recommendation_key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recommendation_type`<sup>Required</sup> <a name="recommendation_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendationType"></a>

```python
recommendation_type: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_object_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```python
sql_tuning_advisor_task_object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection</a>

---



