# `dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations oci_database_management_managed_database_optimizer_statistics_collection_aggregations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_type: str,
  managed_database_id: str,
  end_time_less_than_or_equal_to: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter]] = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  start_time_greater_than_or_equal_to: str = None,
  task_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.groupType">group_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#group_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#end_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#task_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_type`<sup>Required</sup> <a name="group_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.groupType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#group_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#group_type}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#managed_database_id}.

---

##### `end_time_less_than_or_equal_to`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.endTimeLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#end_time_less_than_or_equal_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#limit}.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.startTimeGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#start_time_greater_than_or_equal_to}.

---

##### `task_type`<sup>Optional</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.Initializer.parameter.taskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#task_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetEndTimeLessThanOrEqualTo">reset_end_time_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetStartTimeGreaterThanOrEqualTo">reset_start_time_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetTaskType">reset_task_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]

---

##### `reset_end_time_less_than_or_equal_to` <a name="reset_end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetEndTimeLessThanOrEqualTo"></a>

```python
def reset_end_time_less_than_or_equal_to() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit` <a name="reset_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_start_time_greater_than_or_equal_to` <a name="reset_start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetStartTimeGreaterThanOrEqualTo"></a>

```python
def reset_start_time_greater_than_or_equal_to() -> None
```

##### `reset_task_type` <a name="reset_task_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.resetTaskType"></a>

```python
def reset_task_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.optimizerStatisticsCollectionAggregationsCollection">optimizer_statistics_collection_aggregations_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.endTimeLessThanOrEqualToInput">end_time_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.groupTypeInput">group_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.startTimeGreaterThanOrEqualToInput">start_time_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.groupType">group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList</a>

---

##### `optimizer_statistics_collection_aggregations_collection`<sup>Required</sup> <a name="optimizer_statistics_collection_aggregations_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.optimizerStatisticsCollectionAggregationsCollection"></a>

```python
optimizer_statistics_collection_aggregations_collection: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList</a>

---

##### `end_time_less_than_or_equal_to_input`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.endTimeLessThanOrEqualToInput"></a>

```python
end_time_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]

---

##### `group_type_input`<sup>Optional</sup> <a name="group_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.groupTypeInput"></a>

```python
group_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.startTimeGreaterThanOrEqualToInput"></a>

```python
start_time_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `end_time_less_than_or_equal_to`<sup>Required</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.endTimeLessThanOrEqualTo"></a>

```python
end_time_less_than_or_equal_to: str
```

- *Type:* str

---

##### `group_type`<sup>Required</sup> <a name="group_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.groupType"></a>

```python
group_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to`<sup>Required</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_type: str,
  managed_database_id: str,
  end_time_less_than_or_equal_to: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter]] = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  start_time_greater_than_or_equal_to: str = None,
  task_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.groupType">group_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#group_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.endTimeLessThanOrEqualTo">end_time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#end_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#task_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_type`<sup>Required</sup> <a name="group_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.groupType"></a>

```python
group_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#group_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#group_type}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#managed_database_id}.

---

##### `end_time_less_than_or_equal_to`<sup>Optional</sup> <a name="end_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.endTimeLessThanOrEqualTo"></a>

```python
end_time_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#end_time_less_than_or_equal_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#limit}.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#start_time_greater_than_or_equal_to}.

---

##### `task_type`<sup>Optional</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#task_type}.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#regex}.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.completed">completed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.failed">failed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.groupBy">group_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.inProgress">in_progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.pending">pending</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.skipped">skipped</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.timedOut">timed_out</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.unknown">unknown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `completed`<sup>Required</sup> <a name="completed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.completed"></a>

```python
completed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failed`<sup>Required</sup> <a name="failed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.failed"></a>

```python
failed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

---

##### `in_progress`<sup>Required</sup> <a name="in_progress" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.inProgress"></a>

```python
in_progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending`<sup>Required</sup> <a name="pending" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.pending"></a>

```python
pending: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skipped`<sup>Required</sup> <a name="skipped" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.skipped"></a>

```python
skipped: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timed_out`<sup>Required</sup> <a name="timed_out" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.timedOut"></a>

```python
timed_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unknown`<sup>Required</sup> <a name="unknown" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.unknown"></a>

```python
unknown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_aggregations

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection</a>

---



