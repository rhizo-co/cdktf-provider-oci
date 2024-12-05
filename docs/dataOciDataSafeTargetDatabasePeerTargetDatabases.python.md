# `dataOciDataSafeTargetDatabasePeerTargetDatabases` Submodule <a name="`dataOciDataSafeTargetDatabasePeerTargetDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabasesA <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesA" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases oci_data_safe_target_database_peer_target_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.targetDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#target_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#filter DataOciDataSafeTargetDatabasePeerTargetDatabasesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabasesA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabasesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeTargetDatabasePeerTargetDatabasesA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeTargetDatabasePeerTargetDatabasesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabasePeerTargetDatabasesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.peerTargetDatabaseCollection">peer_target_database_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.targetDatabaseIdInput">target_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.filter"></a>

```python
filter: DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList</a>

---

##### `peer_target_database_collection`<sup>Required</sup> <a name="peer_target_database_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.peerTargetDatabaseCollection"></a>

```python
peer_target_database_collection: DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `target_database_id_input`<sup>Optional</sup> <a name="target_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.targetDatabaseIdInput"></a>

```python
target_database_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#target_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#filter DataOciDataSafeTargetDatabasePeerTargetDatabasesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#name DataOciDataSafeTargetDatabasePeerTargetDatabasesA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#values DataOciDataSafeTargetDatabasePeerTargetDatabasesA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#regex DataOciDataSafeTargetDatabasePeerTargetDatabasesA#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#name DataOciDataSafeTargetDatabasePeerTargetDatabasesA#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#values DataOciDataSafeTargetDatabasePeerTargetDatabasesA#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#regex DataOciDataSafeTargetDatabasePeerTargetDatabasesA#regex}.

---

### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails()
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]]

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>]

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.databaseDetails">database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.databaseUniqueName">database_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.dataguardAssociationId">dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.key">key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_details`<sup>Required</sup> <a name="database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.databaseDetails"></a>

```python
database_details: DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList</a>

---

##### `database_unique_name`<sup>Required</sup> <a name="database_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.databaseUniqueName"></a>

```python
database_unique_name: str
```

- *Type:* str

---

##### `dataguard_association_id`<sup>Required</sup> <a name="dataguard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.dataguardAssociationId"></a>

```python
dataguard_association_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.key"></a>

```python
key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.tlsConfig"></a>

```python
tls_config: DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.certificateStoreType">certificate_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.keyStoreContent">key_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.storePassword">store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.trustStoreContent">trust_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_type`<sup>Required</sup> <a name="certificate_store_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.certificateStoreType"></a>

```python
certificate_store_type: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.keyStoreContent"></a>

```python
key_store_content: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `store_password`<sup>Required</sup> <a name="store_password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.storePassword"></a>

```python
store_password: str
```

- *Type:* str

---

##### `trust_store_content`<sup>Required</sup> <a name="trust_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.trustStoreContent"></a>

```python
trust_store_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_database_peer_target_databases

dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection</a>

---



