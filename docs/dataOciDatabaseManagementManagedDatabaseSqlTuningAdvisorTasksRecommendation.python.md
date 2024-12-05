# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.executionId">execution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.sqlObjectId">sql_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.executionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#execution_id}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#managed_database_id}.

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.sqlObjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_object_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.sqlTuningAdvisorTaskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_tuning_advisor_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.executionIdInput">execution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlObjectIdInput">sql_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlTuningAdvisorTaskIdInput">sql_tuning_advisor_task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.executionId">execution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlObjectId">sql_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList</a>

---

##### `execution_id_input`<sup>Optional</sup> <a name="execution_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.executionIdInput"></a>

```python
execution_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `sql_object_id_input`<sup>Optional</sup> <a name="sql_object_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlObjectIdInput"></a>

```python
sql_object_id_input: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id_input`<sup>Optional</sup> <a name="sql_tuning_advisor_task_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlTuningAdvisorTaskIdInput"></a>

```python
sql_tuning_advisor_task_id_input: str
```

- *Type:* str

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.executionId"></a>

```python
execution_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlObjectId"></a>

```python
sql_object_id: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig(
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
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.executionId">execution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.sqlObjectId">sql_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.executionId"></a>

```python
execution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#execution_id}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#managed_database_id}.

---

##### `sql_object_id`<sup>Required</sup> <a name="sql_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.sqlObjectId"></a>

```python
sql_object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_object_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_tuning_advisor_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.benefit">benefit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.finding">finding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.implementActionSql">implement_action_sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.isParallelExecution">is_parallel_execution</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.rationale">rationale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendationKey">recommendation_key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendationType">recommendation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">sql_tuning_advisor_task_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `benefit`<sup>Required</sup> <a name="benefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.benefit"></a>

```python
benefit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `finding`<sup>Required</sup> <a name="finding" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.finding"></a>

```python
finding: str
```

- *Type:* str

---

##### `implement_action_sql`<sup>Required</sup> <a name="implement_action_sql" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.implementActionSql"></a>

```python
implement_action_sql: str
```

- *Type:* str

---

##### `is_parallel_execution`<sup>Required</sup> <a name="is_parallel_execution" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.isParallelExecution"></a>

```python
is_parallel_execution: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rationale`<sup>Required</sup> <a name="rationale" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.rationale"></a>

```python
rationale: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `recommendation_key`<sup>Required</sup> <a name="recommendation_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendationKey"></a>

```python
recommendation_key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recommendation_type`<sup>Required</sup> <a name="recommendation_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendationType"></a>

```python
recommendation_type: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_object_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```python
sql_tuning_advisor_task_object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems</a>

---



