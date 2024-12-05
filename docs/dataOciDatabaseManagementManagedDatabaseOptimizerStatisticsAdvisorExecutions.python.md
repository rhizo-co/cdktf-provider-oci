# `dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions oci_database_management_managed_database_optimizer_statistics_advisor_executions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  end_time_less_than_or_equal_to: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter]] = None,
  id: str = None,
  start_time_greater_than_or_equal_to: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#end_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#start_time_greater_than_or_equal_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#managed_database_id}.

---

##### `end_time_less_than_or_equal_to`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.endTimeLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#end_time_less_than_or_equal_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.startTimeGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#start_time_greater_than_or_equal_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetEndTimeLessThanOrEqualTo">reset_end_time_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetStartTimeGreaterThanOrEqualTo">reset_start_time_greater_than_or_equal_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]

---

##### `reset_end_time_less_than_or_equal_to` <a name="reset_end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetEndTimeLessThanOrEqualTo"></a>

```python
def reset_end_time_less_than_or_equal_to() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_start_time_greater_than_or_equal_to` <a name="reset_start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetStartTimeGreaterThanOrEqualTo"></a>

```python
def reset_start_time_greater_than_or_equal_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.optimizerStatisticsAdvisorExecutionsCollection">optimizer_statistics_advisor_executions_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.endTimeLessThanOrEqualToInput">end_time_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.startTimeGreaterThanOrEqualToInput">start_time_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList</a>

---

##### `optimizer_statistics_advisor_executions_collection`<sup>Required</sup> <a name="optimizer_statistics_advisor_executions_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.optimizerStatisticsAdvisorExecutionsCollection"></a>

```python
optimizer_statistics_advisor_executions_collection: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList</a>

---

##### `end_time_less_than_or_equal_to_input`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.endTimeLessThanOrEqualToInput"></a>

```python
end_time_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.startTimeGreaterThanOrEqualToInput"></a>

```python
start_time_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `end_time_less_than_or_equal_to`<sup>Required</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.endTimeLessThanOrEqualTo"></a>

```python
end_time_less_than_or_equal_to: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to`<sup>Required</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  end_time_less_than_or_equal_to: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter]] = None,
  id: str = None,
  start_time_greater_than_or_equal_to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#end_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#start_time_greater_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#managed_database_id}.

---

##### `end_time_less_than_or_equal_to`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.endTimeLessThanOrEqualTo"></a>

```python
end_time_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#end_time_less_than_or_equal_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#start_time_greater_than_or_equal_to}.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#regex}.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbDeploymentType">db_deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbSubType">db_sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbType">db_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_deployment_type`<sup>Required</sup> <a name="db_deployment_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbDeploymentType"></a>

```python
db_deployment_type: str
```

- *Type:* str

---

##### `db_sub_type`<sup>Required</sup> <a name="db_sub_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbSubType"></a>

```python
db_sub_type: str
```

- *Type:* str

---

##### `db_type`<sup>Required</sup> <a name="db_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbType"></a>

```python
db_type: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.executionName">execution_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.findings">findings</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.report">report</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.taskName">task_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.database"></a>

```python
database: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `execution_name`<sup>Required</sup> <a name="execution_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.executionName"></a>

```python
execution_name: str
```

- *Type:* str

---

##### `findings`<sup>Required</sup> <a name="findings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.findings"></a>

```python
findings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `report`<sup>Required</sup> <a name="report" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.report"></a>

```python
report: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `task_name`<sup>Required</sup> <a name="task_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.taskName"></a>

```python
task_name: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.rules"></a>

```python
rules: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList</a>

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.operations">operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.schemas">schemas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.schemas"></a>

```python
schemas: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.objects">objects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `objects`<sup>Required</sup> <a name="objects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.objects"></a>

```python
objects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.recommendations">recommendations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.details"></a>

```python
details: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `recommendations`<sup>Required</sup> <a name="recommendations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.recommendations"></a>

```python
recommendations: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.lines"></a>

```python
lines: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.example">example</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.rationales">rationales</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.example"></a>

```python
example: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `rationales`<sup>Required</sup> <a name="rationales" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.rationales"></a>

```python
rationales: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.findings">findings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `findings`<sup>Required</sup> <a name="findings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.findings"></a>

```python
findings: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_executions

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection</a>

---



