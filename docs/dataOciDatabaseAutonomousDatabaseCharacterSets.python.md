# `dataOciDatabaseAutonomousDatabaseCharacterSets` Submodule <a name="`dataOciDatabaseAutonomousDatabaseCharacterSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSets <a name="DataOciDatabaseAutonomousDatabaseCharacterSets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets oci_database_autonomous_database_character_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  character_set_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseCharacterSetsFilter]] = None,
  id: str = None,
  is_dedicated: typing.Union[bool, IResolvable] = None,
  is_shared: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.characterSetType">character_set_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.isDedicated">is_dedicated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.isShared">is_shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `character_set_type`<sup>Optional</sup> <a name="character_set_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.characterSetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#filter DataOciDatabaseAutonomousDatabaseCharacterSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_dedicated`<sup>Optional</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.isDedicated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}.

---

##### `is_shared`<sup>Optional</sup> <a name="is_shared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.isShared"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetCharacterSetType">reset_character_set_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsDedicated">reset_is_dedicated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsShared">reset_is_shared</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseCharacterSetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]

---

##### `reset_character_set_type` <a name="reset_character_set_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetCharacterSetType"></a>

```python
def reset_character_set_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_dedicated` <a name="reset_is_dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsDedicated"></a>

```python
def reset_is_dedicated() -> None
```

##### `reset_is_shared` <a name="reset_is_shared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsShared"></a>

```python
def reset_is_shared() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseCharacterSets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseCharacterSets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseCharacterSets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousDatabaseCharacterSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseCharacterSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.autonomousDatabaseCharacterSets">autonomous_database_character_sets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList">DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetTypeInput">character_set_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicatedInput">is_dedicated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isSharedInput">is_shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetType">character_set_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicated">is_dedicated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isShared">is_shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_database_character_sets`<sup>Required</sup> <a name="autonomous_database_character_sets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.autonomousDatabaseCharacterSets"></a>

```python
autonomous_database_character_sets: DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList">DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList</a>

---

##### `character_set_type_input`<sup>Optional</sup> <a name="character_set_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetTypeInput"></a>

```python
character_set_type_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseCharacterSetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_dedicated_input`<sup>Optional</sup> <a name="is_dedicated_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicatedInput"></a>

```python
is_dedicated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shared_input`<sup>Optional</sup> <a name="is_shared_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isSharedInput"></a>

```python
is_shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `character_set_type`<sup>Required</sup> <a name="character_set_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetType"></a>

```python
character_set_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_dedicated`<sup>Required</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicated"></a>

```python
is_dedicated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shared`<sup>Required</sup> <a name="is_shared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isShared"></a>

```python
is_shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets()
```


### DataOciDatabaseAutonomousDatabaseCharacterSetsConfig <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  character_set_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseCharacterSetsFilter]] = None,
  id: str = None,
  is_dedicated: typing.Union[bool, IResolvable] = None,
  is_shared: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.characterSetType">character_set_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isDedicated">is_dedicated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isShared">is_shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `character_set_type`<sup>Optional</sup> <a name="character_set_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.characterSetType"></a>

```python
character_set_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseCharacterSetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#filter DataOciDatabaseAutonomousDatabaseCharacterSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_dedicated`<sup>Optional</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isDedicated"></a>

```python
is_dedicated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}.

---

##### `is_shared`<sup>Optional</sup> <a name="is_shared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isShared"></a>

```python
is_shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}.

---

### DataOciDatabaseAutonomousDatabaseCharacterSetsFilter <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#name DataOciDatabaseAutonomousDatabaseCharacterSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#values DataOciDatabaseAutonomousDatabaseCharacterSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#regex DataOciDatabaseAutonomousDatabaseCharacterSets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#name DataOciDatabaseAutonomousDatabaseCharacterSets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#values DataOciDatabaseAutonomousDatabaseCharacterSets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#regex DataOciDatabaseAutonomousDatabaseCharacterSets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets</a>

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseCharacterSetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]]

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_character_sets

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousDatabaseCharacterSetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>]

---



