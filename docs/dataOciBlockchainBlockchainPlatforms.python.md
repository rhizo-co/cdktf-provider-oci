# `dataOciBlockchainBlockchainPlatforms` Submodule <a name="`dataOciBlockchainBlockchainPlatforms` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatforms <a name="DataOciBlockchainBlockchainPlatforms" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms oci_blockchain_blockchain_platforms}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#filter DataOciBlockchainBlockchainPlatforms#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatforms to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBlockchainBlockchainPlatforms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatforms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection">blockchain_platform_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `blockchain_platform_collection`<sup>Required</sup> <a name="blockchain_platform_collection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection"></a>

```python
blockchain_platform_collection: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter"></a>

```python
filter: DataOciBlockchainBlockchainPlatformsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection()
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems()
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails()
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns()
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam()
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers()
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam()
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo()
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas()
```


### DataOciBlockchainBlockchainPlatformsConfig <a name="DataOciBlockchainBlockchainPlatformsConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#filter DataOciBlockchainBlockchainPlatforms#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}.

---

### DataOciBlockchainBlockchainPlatformsFilter <a name="DataOciBlockchainBlockchainPlatformsFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpu_allocation_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocpu_allocation_number`<sup>Required</sup> <a name="ocpu_allocation_number" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```python
ocpu_allocation_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad">ad</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">ocpu_allocation_param</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey">osn_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad"></a>

```python
ad: str
```

- *Type:* str

---

##### `ocpu_allocation_param`<sup>Required</sup> <a name="ocpu_allocation_param" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```python
ocpu_allocation_param: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `osn_key`<sup>Required</sup> <a name="osn_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey"></a>

```python
osn_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns">osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers">peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `osns`<sup>Required</sup> <a name="osns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns"></a>

```python
osns: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers"></a>

```python
peers: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpu_allocation_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocpu_allocation_number`<sup>Required</sup> <a name="ocpu_allocation_number" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```python
ocpu_allocation_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad">ad</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam">ocpu_allocation_param</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey">peer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad"></a>

```python
ad: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ocpu_allocation_param`<sup>Required</sup> <a name="ocpu_allocation_param" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```python
ocpu_allocation_param: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `peer_key`<sup>Required</sup> <a name="peer_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey"></a>

```python
peer_key: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">ocpu_capacity_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">ocpu_utilization_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ocpu_capacity_number`<sup>Required</sup> <a name="ocpu_capacity_number" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```python
ocpu_capacity_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_utilization_number`<sup>Required</sup> <a name="ocpu_utilization_number" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```python
ocpu_utilization_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText">ca_cert_archive_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails">component_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape">compute_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId">federated_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo">host_ocpu_utilization_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol">is_byol</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd">is_multi_ad</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape">load_balancer_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole">platform_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType">platform_shape_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint">service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion">service_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs">storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs">storage_used_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity">total_ocpu_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_cert_archive_text`<sup>Required</sup> <a name="ca_cert_archive_text" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText"></a>

```python
ca_cert_archive_text: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `component_details`<sup>Required</sup> <a name="component_details" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails"></a>

```python
component_details: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a>

---

##### `compute_shape`<sup>Required</sup> <a name="compute_shape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape"></a>

```python
compute_shape: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `federated_user_id`<sup>Required</sup> <a name="federated_user_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId"></a>

```python
federated_user_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `host_ocpu_utilization_info`<sup>Required</sup> <a name="host_ocpu_utilization_info" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo"></a>

```python
host_ocpu_utilization_info: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

---

##### `is_byol`<sup>Required</sup> <a name="is_byol" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol"></a>

```python
is_byol: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_multi_ad`<sup>Required</sup> <a name="is_multi_ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd"></a>

```python
is_multi_ad: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `load_balancer_shape`<sup>Required</sup> <a name="load_balancer_shape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape"></a>

```python
load_balancer_shape: str
```

- *Type:* str

---

##### `platform_role`<sup>Required</sup> <a name="platform_role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole"></a>

```python
platform_role: str
```

- *Type:* str

---

##### `platform_shape_type`<sup>Required</sup> <a name="platform_shape_type" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType"></a>

```python
platform_shape_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas"></a>

```python
replicas: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a>

---

##### `service_endpoint`<sup>Required</sup> <a name="service_endpoint" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint"></a>

```python
service_endpoint: str
```

- *Type:* str

---

##### `service_version`<sup>Required</sup> <a name="service_version" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion"></a>

```python
service_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_size_in_tbs`<sup>Required</sup> <a name="storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs"></a>

```python
storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_used_in_tbs`<sup>Required</sup> <a name="storage_used_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs"></a>

```python
storage_used_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_ocpu_capacity`<sup>Required</sup> <a name="total_ocpu_capacity" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity"></a>

```python
total_ocpu_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount">ca_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount">console_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount">proxy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_count`<sup>Required</sup> <a name="ca_count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount"></a>

```python
ca_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `console_count`<sup>Required</sup> <a name="console_count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount"></a>

```python
console_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_count`<sup>Required</sup> <a name="proxy_count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount"></a>

```python
proxy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items"></a>

```python
items: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a>

---


### DataOciBlockchainBlockchainPlatformsFilterList <a name="DataOciBlockchainBlockchainPlatformsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]]

---


### DataOciBlockchainBlockchainPlatformsFilterOutputReference <a name="DataOciBlockchainBlockchainPlatformsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platforms

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciBlockchainBlockchainPlatformsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>]

---



