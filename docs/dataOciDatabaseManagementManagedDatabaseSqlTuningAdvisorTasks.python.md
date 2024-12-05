# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks oci_database_management_managed_database_sql_tuning_advisor_tasks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None,
  status: str = None,
  time_greater_than_or_equal_to: str = None,
  time_less_than_or_equal_to: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}.

---

##### `time_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.timeGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}.

---

##### `time_less_than_or_equal_to`<sup>Optional</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.timeLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeGreaterThanOrEqualTo">reset_time_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeLessThanOrEqualTo">reset_time_less_than_or_equal_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_time_greater_than_or_equal_to` <a name="reset_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeGreaterThanOrEqualTo"></a>

```python
def reset_time_greater_than_or_equal_to() -> None
```

##### `reset_time_less_than_or_equal_to` <a name="reset_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeLessThanOrEqualTo"></a>

```python
def reset_time_less_than_or_equal_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.sqlTuningAdvisorTaskCollection">sql_tuning_advisor_task_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualToInput">time_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualToInput">time_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList</a>

---

##### `sql_tuning_advisor_task_collection`<sup>Required</sup> <a name="sql_tuning_advisor_task_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.sqlTuningAdvisorTaskCollection"></a>

```python
sql_tuning_advisor_task_collection: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `time_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualToInput"></a>

```python
time_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_less_than_or_equal_to_input`<sup>Optional</sup> <a name="time_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualToInput"></a>

```python
time_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_greater_than_or_equal_to`<sup>Required</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualTo"></a>

```python
time_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_less_than_or_equal_to`<sup>Required</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualTo"></a>

```python
time_less_than_or_equal_to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None,
  status: str = None,
  time_greater_than_or_equal_to: str = None,
  time_less_than_or_equal_to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}.

---

##### `time_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeGreaterThanOrEqualTo"></a>

```python
time_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}.

---

##### `time_less_than_or_equal_to`<sup>Optional</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeLessThanOrEqualTo"></a>

```python
time_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection()
```


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.daysToExpire">days_to_expire</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.instanceId">instance_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.recommendationCount">recommendation_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.taskStatus">task_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionEnded">time_execution_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionStarted">time_execution_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.totalSqlStatements">total_sql_statements</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_to_expire`<sup>Required</sup> <a name="days_to_expire" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.daysToExpire"></a>

```python
days_to_expire: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.instanceId"></a>

```python
instance_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `recommendation_count`<sup>Required</sup> <a name="recommendation_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.recommendationCount"></a>

```python
recommendation_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

##### `task_status`<sup>Required</sup> <a name="task_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.taskStatus"></a>

```python
task_status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_execution_ended`<sup>Required</sup> <a name="time_execution_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionEnded"></a>

```python
time_execution_ended: str
```

- *Type:* str

---

##### `time_execution_started`<sup>Required</sup> <a name="time_execution_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionStarted"></a>

```python
time_execution_started: str
```

- *Type:* str

---

##### `total_sql_statements`<sup>Required</sup> <a name="total_sql_statements" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.totalSqlStatements"></a>

```python
total_sql_statements: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection</a>

---



