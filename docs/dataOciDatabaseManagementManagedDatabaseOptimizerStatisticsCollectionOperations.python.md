# `dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations oci_database_management_managed_database_optimizer_statistics_collection_operations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter]] = None,
  filter_by: str = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  start_time_greater_than_or_equal_to: str = None,
  task_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#end_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.filterBy">filter_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#filter_by DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#filter_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#task_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#managed_database_id}.

---

##### `end_time_less_than_or_equal_to`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.endTimeLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#end_time_less_than_or_equal_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#filter}

---

##### `filter_by`<sup>Optional</sup> <a name="filter_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.filterBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#filter_by DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#filter_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#limit}.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.startTimeGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#start_time_greater_than_or_equal_to}.

---

##### `task_type`<sup>Optional</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.Initializer.parameter.taskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#task_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetEndTimeLessThanOrEqualTo">reset_end_time_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetFilterBy">reset_filter_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetStartTimeGreaterThanOrEqualTo">reset_start_time_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetTaskType">reset_task_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]

---

##### `reset_end_time_less_than_or_equal_to` <a name="reset_end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetEndTimeLessThanOrEqualTo"></a>

```python
def reset_end_time_less_than_or_equal_to() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_filter_by` <a name="reset_filter_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetFilterBy"></a>

```python
def reset_filter_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit` <a name="reset_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_start_time_greater_than_or_equal_to` <a name="reset_start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetStartTimeGreaterThanOrEqualTo"></a>

```python
def reset_start_time_greater_than_or_equal_to() -> None
```

##### `reset_task_type` <a name="reset_task_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.resetTaskType"></a>

```python
def reset_task_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.optimizerStatisticsCollectionOperationsCollection">optimizer_statistics_collection_operations_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.endTimeLessThanOrEqualToInput">end_time_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.filterByInput">filter_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.startTimeGreaterThanOrEqualToInput">start_time_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.filterBy">filter_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList</a>

---

##### `optimizer_statistics_collection_operations_collection`<sup>Required</sup> <a name="optimizer_statistics_collection_operations_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.optimizerStatisticsCollectionOperationsCollection"></a>

```python
optimizer_statistics_collection_operations_collection: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList</a>

---

##### `end_time_less_than_or_equal_to_input`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.endTimeLessThanOrEqualToInput"></a>

```python
end_time_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `filter_by_input`<sup>Optional</sup> <a name="filter_by_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.filterByInput"></a>

```python
filter_by_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.startTimeGreaterThanOrEqualToInput"></a>

```python
start_time_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `end_time_less_than_or_equal_to`<sup>Required</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.endTimeLessThanOrEqualTo"></a>

```python
end_time_less_than_or_equal_to: str
```

- *Type:* str

---

##### `filter_by`<sup>Required</sup> <a name="filter_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.filterBy"></a>

```python
filter_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to`<sup>Required</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  end_time_less_than_or_equal_to: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter]] = None,
  filter_by: str = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  start_time_greater_than_or_equal_to: str = None,
  task_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#end_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.filterBy">filter_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#filter_by DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#filter_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#task_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#managed_database_id}.

---

##### `end_time_less_than_or_equal_to`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.endTimeLessThanOrEqualTo"></a>

```python
end_time_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#end_time_less_than_or_equal_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#filter}

---

##### `filter_by`<sup>Optional</sup> <a name="filter_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.filterBy"></a>

```python
filter_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#filter_by DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#filter_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#limit}.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#start_time_greater_than_or_equal_to}.

---

##### `task_type`<sup>Optional</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#task_type}.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#regex}.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.dbDeploymentType">db_deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.dbSubType">db_sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.dbType">db_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_deployment_type`<sup>Required</sup> <a name="db_deployment_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.dbDeploymentType"></a>

```python
db_deployment_type: str
```

- *Type:* str

---

##### `db_sub_type`<sup>Required</sup> <a name="db_sub_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.dbSubType"></a>

```python
db_sub_type: str
```

- *Type:* str

---

##### `db_type`<sup>Required</sup> <a name="db_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.dbType"></a>

```python
db_type: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.completedCount">completed_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.durationInSeconds">duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.failedCount">failed_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.inProgressCount">in_progress_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.timedOutCount">timed_out_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.totalObjectsCount">total_objects_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `completed_count`<sup>Required</sup> <a name="completed_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.completedCount"></a>

```python
completed_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.database"></a>

```python
database: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList</a>

---

##### `duration_in_seconds`<sup>Required</sup> <a name="duration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.durationInSeconds"></a>

```python
duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `failed_count`<sup>Required</sup> <a name="failed_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.failedCount"></a>

```python
failed_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_progress_count`<sup>Required</sup> <a name="in_progress_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.inProgressCount"></a>

```python
in_progress_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.tasks"></a>

```python
tasks: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList</a>

---

##### `timed_out_count`<sup>Required</sup> <a name="timed_out_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.timedOutCount"></a>

```python
timed_out_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_objects_count`<sup>Required</sup> <a name="total_objects_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.totalObjectsCount"></a>

```python
total_objects_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection</a>

---



