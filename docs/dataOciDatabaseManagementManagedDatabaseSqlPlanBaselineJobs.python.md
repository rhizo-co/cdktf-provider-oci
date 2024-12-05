# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs oci_database_management_managed_database_sql_plan_baseline_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.sqlPlanBaselineJobCollection">sql_plan_baseline_job_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList</a>

---

##### `sql_plan_baseline_job_collection`<sup>Required</sup> <a name="sql_plan_baseline_job_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.sqlPlanBaselineJobCollection"></a>

```python
sql_plan_baseline_job_collection: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection()
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_jobs

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection</a>

---



