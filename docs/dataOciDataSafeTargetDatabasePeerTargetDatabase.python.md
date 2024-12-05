# `dataOciDataSafeTargetDatabasePeerTargetDatabase` Submodule <a name="`dataOciDataSafeTargetDatabasePeerTargetDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabase <a name="DataOciDataSafeTargetDatabasePeerTargetDatabase" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database oci_data_safe_target_database_peer_target_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  peer_target_database_id: str,
  target_database_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.peerTargetDatabaseId">peer_target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#peer_target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#peer_target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#target_database_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peer_target_database_id`<sup>Required</sup> <a name="peer_target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.peerTargetDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#peer_target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#peer_target_database_id}.

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.targetDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#target_database_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeTargetDatabasePeerTargetDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeTargetDatabasePeerTargetDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabasePeerTargetDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.databaseDetails">database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.databaseUniqueName">database_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.dataguardAssociationId">dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.key">key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.tlsConfig">tls_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.peerTargetDatabaseIdInput">peer_target_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.targetDatabaseIdInput">target_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.peerTargetDatabaseId">peer_target_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_details`<sup>Required</sup> <a name="database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.databaseDetails"></a>

```python
database_details: DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList</a>

---

##### `database_unique_name`<sup>Required</sup> <a name="database_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.databaseUniqueName"></a>

```python
database_unique_name: str
```

- *Type:* str

---

##### `dataguard_association_id`<sup>Required</sup> <a name="dataguard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.dataguardAssociationId"></a>

```python
dataguard_association_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.key"></a>

```python
key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.tlsConfig"></a>

```python
tls_config: DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList</a>

---

##### `peer_target_database_id_input`<sup>Optional</sup> <a name="peer_target_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.peerTargetDatabaseIdInput"></a>

```python
peer_target_database_id_input: str
```

- *Type:* str

---

##### `target_database_id_input`<sup>Optional</sup> <a name="target_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.targetDatabaseIdInput"></a>

```python
target_database_id_input: str
```

- *Type:* str

---

##### `peer_target_database_id`<sup>Required</sup> <a name="peer_target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.peerTargetDatabaseId"></a>

```python
peer_target_database_id: str
```

- *Type:* str

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  peer_target_database_id: str,
  target_database_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.peerTargetDatabaseId">peer_target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#peer_target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#peer_target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#target_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peer_target_database_id`<sup>Required</sup> <a name="peer_target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.peerTargetDatabaseId"></a>

```python
peer_target_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#peer_target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#peer_target_database_id}.

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#target_database_id}.

---

### DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_database

dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.certificateStoreType">certificate_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.keyStoreContent">key_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.storePassword">store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.trustStoreContent">trust_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_type`<sup>Required</sup> <a name="certificate_store_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.certificateStoreType"></a>

```python
certificate_store_type: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.keyStoreContent"></a>

```python
key_store_content: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `store_password`<sup>Required</sup> <a name="store_password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.storePassword"></a>

```python
store_password: str
```

- *Type:* str

---

##### `trust_store_content`<sup>Required</sup> <a name="trust_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.trustStoreContent"></a>

```python
trust_store_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig</a>

---



