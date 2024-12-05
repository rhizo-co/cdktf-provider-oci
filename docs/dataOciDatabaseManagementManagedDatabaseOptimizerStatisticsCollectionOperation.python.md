# `dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation oci_database_management_managed_database_optimizer_statistics_collection_operation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation(
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
  optimizer_statistics_collection_operation_id: typing.Union[int, float],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.optimizerStatisticsCollectionOperationId">optimizer_statistics_collection_operation_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#optimizer_statistics_collection_operation_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#optimizer_statistics_collection_operation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#managed_database_id}.

---

##### `optimizer_statistics_collection_operation_id`<sup>Required</sup> <a name="optimizer_statistics_collection_operation_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.optimizerStatisticsCollectionOperationId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#optimizer_statistics_collection_operation_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#optimizer_statistics_collection_operation_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.completedCount">completed_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.durationInSeconds">duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.failedCount">failed_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.inProgressCount">in_progress_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.timedOutCount">timed_out_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.totalObjectsCount">total_objects_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.optimizerStatisticsCollectionOperationIdInput">optimizer_statistics_collection_operation_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.optimizerStatisticsCollectionOperationId">optimizer_statistics_collection_operation_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `completed_count`<sup>Required</sup> <a name="completed_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.completedCount"></a>

```python
completed_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.database"></a>

```python
database: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList</a>

---

##### `duration_in_seconds`<sup>Required</sup> <a name="duration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.durationInSeconds"></a>

```python
duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `failed_count`<sup>Required</sup> <a name="failed_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.failedCount"></a>

```python
failed_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_progress_count`<sup>Required</sup> <a name="in_progress_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.inProgressCount"></a>

```python
in_progress_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.tasks"></a>

```python
tasks: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList</a>

---

##### `timed_out_count`<sup>Required</sup> <a name="timed_out_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.timedOutCount"></a>

```python
timed_out_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_objects_count`<sup>Required</sup> <a name="total_objects_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.totalObjectsCount"></a>

```python
total_objects_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `optimizer_statistics_collection_operation_id_input`<sup>Optional</sup> <a name="optimizer_statistics_collection_operation_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.optimizerStatisticsCollectionOperationIdInput"></a>

```python
optimizer_statistics_collection_operation_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `optimizer_statistics_collection_operation_id`<sup>Required</sup> <a name="optimizer_statistics_collection_operation_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.optimizerStatisticsCollectionOperationId"></a>

```python
optimizer_statistics_collection_operation_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  optimizer_statistics_collection_operation_id: typing.Union[int, float],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.optimizerStatisticsCollectionOperationId">optimizer_statistics_collection_operation_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#optimizer_statistics_collection_operation_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#optimizer_statistics_collection_operation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#managed_database_id}.

---

##### `optimizer_statistics_collection_operation_id`<sup>Required</sup> <a name="optimizer_statistics_collection_operation_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.optimizerStatisticsCollectionOperationId"></a>

```python
optimizer_statistics_collection_operation_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#optimizer_statistics_collection_operation_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#optimizer_statistics_collection_operation_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.dbDeploymentType">db_deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.dbSubType">db_sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.dbType">db_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_deployment_type`<sup>Required</sup> <a name="db_deployment_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.dbDeploymentType"></a>

```python
db_deployment_type: str
```

- *Type:* str

---

##### `db_sub_type`<sup>Required</sup> <a name="db_sub_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.dbSubType"></a>

```python
db_sub_type: str
```

- *Type:* str

---

##### `db_type`<sup>Required</sup> <a name="db_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.dbType"></a>

```python
db_type: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_collection_operation

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks</a>

---



