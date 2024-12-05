# `dataOciFileStorageFilesystemSnapshotPolicy` Submodule <a name="`dataOciFileStorageFilesystemSnapshotPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageFilesystemSnapshotPolicy <a name="DataOciFileStorageFilesystemSnapshotPolicy" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filesystem_snapshot_policy_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.filesystemSnapshotPolicyId">filesystem_snapshot_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filesystem_snapshot_policy_id`<sup>Required</sup> <a name="filesystem_snapshot_policy_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.filesystemSnapshotPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFileStorageFilesystemSnapshotPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFileStorageFilesystemSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageFilesystemSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList">DataOciFileStorageFilesystemSnapshotPolicyLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.policyPrefix">policy_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList">DataOciFileStorageFilesystemSnapshotPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyIdInput">filesystem_snapshot_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyId">filesystem_snapshot_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.locks"></a>

```python
locks: DataOciFileStorageFilesystemSnapshotPolicyLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList">DataOciFileStorageFilesystemSnapshotPolicyLocksList</a>

---

##### `policy_prefix`<sup>Required</sup> <a name="policy_prefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.policyPrefix"></a>

```python
policy_prefix: str
```

- *Type:* str

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.schedules"></a>

```python
schedules: DataOciFileStorageFilesystemSnapshotPolicySchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList">DataOciFileStorageFilesystemSnapshotPolicySchedulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `filesystem_snapshot_policy_id_input`<sup>Optional</sup> <a name="filesystem_snapshot_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyIdInput"></a>

```python
filesystem_snapshot_policy_id_input: str
```

- *Type:* str

---

##### `filesystem_snapshot_policy_id`<sup>Required</sup> <a name="filesystem_snapshot_policy_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyId"></a>

```python
filesystem_snapshot_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageFilesystemSnapshotPolicyConfig <a name="DataOciFileStorageFilesystemSnapshotPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filesystem_snapshot_policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.filesystemSnapshotPolicyId">filesystem_snapshot_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filesystem_snapshot_policy_id`<sup>Required</sup> <a name="filesystem_snapshot_policy_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.filesystemSnapshotPolicyId"></a>

```python
filesystem_snapshot_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}.

---

### DataOciFileStorageFilesystemSnapshotPolicyLocks <a name="DataOciFileStorageFilesystemSnapshotPolicyLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks()
```


### DataOciFileStorageFilesystemSnapshotPolicySchedules <a name="DataOciFileStorageFilesystemSnapshotPolicySchedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageFilesystemSnapshotPolicyLocksList <a name="DataOciFileStorageFilesystemSnapshotPolicyLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference <a name="DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks">DataOciFileStorageFilesystemSnapshotPolicyLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageFilesystemSnapshotPolicyLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks">DataOciFileStorageFilesystemSnapshotPolicyLocks</a>

---


### DataOciFileStorageFilesystemSnapshotPolicySchedulesList <a name="DataOciFileStorageFilesystemSnapshotPolicySchedulesList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference <a name="DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_file_storage_filesystem_snapshot_policy

dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month">month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds">retention_duration_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix">schedule_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart">time_schedule_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules">DataOciFileStorageFilesystemSnapshotPolicySchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month"></a>

```python
month: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `retention_duration_in_seconds`<sup>Required</sup> <a name="retention_duration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds"></a>

```python
retention_duration_in_seconds: str
```

- *Type:* str

---

##### `schedule_prefix`<sup>Required</sup> <a name="schedule_prefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix"></a>

```python
schedule_prefix: str
```

- *Type:* str

---

##### `time_schedule_start`<sup>Required</sup> <a name="time_schedule_start" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart"></a>

```python
time_schedule_start: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFileStorageFilesystemSnapshotPolicySchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules">DataOciFileStorageFilesystemSnapshotPolicySchedules</a>

---



