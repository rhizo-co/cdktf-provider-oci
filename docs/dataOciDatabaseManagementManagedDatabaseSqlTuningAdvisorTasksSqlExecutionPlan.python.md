# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attribute: str,
  managed_database_id: str,
  sql_object_id: str,
  sql_tuning_advisor_task_id: str,
  id: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#attribute DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.sqlObjectId">sql_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.attribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#attribute DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#attribute}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#managed_database_id}.

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.sqlObjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_object_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.sqlTuningAdvisorTaskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_tuning_advisor_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.plan">plan</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.sqlObjectIdInput">sql_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.sqlTuningAdvisorTaskIdInput">sql_tuning_advisor_task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.sqlObjectId">sql_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `plan`<sup>Required</sup> <a name="plan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.plan"></a>

```python
plan: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList</a>

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `sql_object_id_input`<sup>Optional</sup> <a name="sql_object_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.sqlObjectIdInput"></a>

```python
sql_object_id_input: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id_input`<sup>Optional</sup> <a name="sql_tuning_advisor_task_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.sqlTuningAdvisorTaskIdInput"></a>

```python
sql_tuning_advisor_task_id_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.sqlObjectId"></a>

```python
sql_object_id: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attribute: str,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#attribute DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.sqlObjectId">sql_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#attribute DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#attribute}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#managed_database_id}.

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.sqlObjectId"></a>

```python
sql_object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_object_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#sql_tuning_advisor_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_sql_execution_plan

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.accessPredicates">access_predicates</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.bytes">bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.cardinality">cardinality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.cost">cost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.cpuCost">cpu_cost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.filterPredicates">filter_predicates</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.ioCost">io_cost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.numberOfSearchColumn">number_of_search_column</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.objectNode">object_node</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.objectOwner">object_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.objectPosition">object_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.optimizerMode">optimizer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.other">other</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.otherTag">other_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.parentStepId">parent_step_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.partitionId">partition_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.partitionStart">partition_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.partitionStop">partition_stop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.planHashValue">plan_hash_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.remarks">remarks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.stepId">step_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.tempSpace">temp_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_predicates`<sup>Required</sup> <a name="access_predicates" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.accessPredicates"></a>

```python
access_predicates: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.bytes"></a>

```python
bytes: str
```

- *Type:* str

---

##### `cardinality`<sup>Required</sup> <a name="cardinality" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.cardinality"></a>

```python
cardinality: str
```

- *Type:* str

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.cost"></a>

```python
cost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_cost`<sup>Required</sup> <a name="cpu_cost" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.cpuCost"></a>

```python
cpu_cost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_predicates`<sup>Required</sup> <a name="filter_predicates" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.filterPredicates"></a>

```python
filter_predicates: str
```

- *Type:* str

---

##### `io_cost`<sup>Required</sup> <a name="io_cost" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.ioCost"></a>

```python
io_cost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_search_column`<sup>Required</sup> <a name="number_of_search_column" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.numberOfSearchColumn"></a>

```python
number_of_search_column: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_node`<sup>Required</sup> <a name="object_node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.objectNode"></a>

```python
object_node: str
```

- *Type:* str

---

##### `object_owner`<sup>Required</sup> <a name="object_owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.objectOwner"></a>

```python
object_owner: str
```

- *Type:* str

---

##### `object_position`<sup>Required</sup> <a name="object_position" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.objectPosition"></a>

```python
object_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `optimizer_mode`<sup>Required</sup> <a name="optimizer_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.optimizerMode"></a>

```python
optimizer_mode: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `other`<sup>Required</sup> <a name="other" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.other"></a>

```python
other: str
```

- *Type:* str

---

##### `other_tag`<sup>Required</sup> <a name="other_tag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.otherTag"></a>

```python
other_tag: str
```

- *Type:* str

---

##### `parent_step_id`<sup>Required</sup> <a name="parent_step_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.parentStepId"></a>

```python
parent_step_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partition_id`<sup>Required</sup> <a name="partition_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.partitionId"></a>

```python
partition_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partition_start`<sup>Required</sup> <a name="partition_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.partitionStart"></a>

```python
partition_start: str
```

- *Type:* str

---

##### `partition_stop`<sup>Required</sup> <a name="partition_stop" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.partitionStop"></a>

```python
partition_stop: str
```

- *Type:* str

---

##### `plan_hash_value`<sup>Required</sup> <a name="plan_hash_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.planHashValue"></a>

```python
plan_hash_value: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remarks`<sup>Required</sup> <a name="remarks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.remarks"></a>

```python
remarks: str
```

- *Type:* str

---

##### `step_id`<sup>Required</sup> <a name="step_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.stepId"></a>

```python
step_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `temp_space`<sup>Required</sup> <a name="temp_space" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.tempSpace"></a>

```python
temp_space: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlanOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlan.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlExecutionPlanPlan</a>

---



