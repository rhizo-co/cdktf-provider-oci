# `dataOciBlockchainBlockchainPlatformPatches` Submodule <a name="`dataOciBlockchainBlockchainPlatformPatches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatformPatches <a name="DataOciBlockchainBlockchainPlatformPatches" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches oci_blockchain_blockchain_platform_patches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blockchain_platform_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformPatchesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.blockchainPlatformId">blockchain_platform_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#blockchain_platform_id DataOciBlockchainBlockchainPlatformPatches#blockchain_platform_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#id DataOciBlockchainBlockchainPlatformPatches#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blockchain_platform_id`<sup>Required</sup> <a name="blockchain_platform_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.blockchainPlatformId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#blockchain_platform_id DataOciBlockchainBlockchainPlatformPatches#blockchain_platform_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#filter DataOciBlockchainBlockchainPlatformPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#id DataOciBlockchainBlockchainPlatformPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformPatchesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatformPatches resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatformPatches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatformPatches to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBlockchainBlockchainPlatformPatches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatformPatches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformPatchCollection">blockchain_platform_patch_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList">DataOciBlockchainBlockchainPlatformPatchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformIdInput">blockchain_platform_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformId">blockchain_platform_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `blockchain_platform_patch_collection`<sup>Required</sup> <a name="blockchain_platform_patch_collection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformPatchCollection"></a>

```python
blockchain_platform_patch_collection: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filter"></a>

```python
filter: DataOciBlockchainBlockchainPlatformPatchesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList">DataOciBlockchainBlockchainPlatformPatchesFilterList</a>

---

##### `blockchain_platform_id_input`<sup>Optional</sup> <a name="blockchain_platform_id_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformIdInput"></a>

```python
blockchain_platform_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `blockchain_platform_id`<sup>Required</sup> <a name="blockchain_platform_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformId"></a>

```python
blockchain_platform_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection()
```


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems()
```


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems()
```


### DataOciBlockchainBlockchainPlatformPatchesConfig <a name="DataOciBlockchainBlockchainPlatformPatchesConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blockchain_platform_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformPatchesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.blockchainPlatformId">blockchain_platform_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#blockchain_platform_id DataOciBlockchainBlockchainPlatformPatches#blockchain_platform_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#id DataOciBlockchainBlockchainPlatformPatches#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blockchain_platform_id`<sup>Required</sup> <a name="blockchain_platform_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.blockchainPlatformId"></a>

```python
blockchain_platform_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#blockchain_platform_id DataOciBlockchainBlockchainPlatformPatches#blockchain_platform_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#filter DataOciBlockchainBlockchainPlatformPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#id DataOciBlockchainBlockchainPlatformPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBlockchainBlockchainPlatformPatchesFilter <a name="DataOciBlockchainBlockchainPlatformPatchesFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#name DataOciBlockchainBlockchainPlatformPatches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#values DataOciBlockchainBlockchainPlatformPatches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#regex DataOciBlockchainBlockchainPlatformPatches#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#name DataOciBlockchainBlockchainPlatformPatches#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#values DataOciBlockchainBlockchainPlatformPatches#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#regex DataOciBlockchainBlockchainPlatformPatches#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.patchInfoUrl">patch_info_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.serviceVersion">service_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.timePatchDue">time_patch_due</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `patch_info_url`<sup>Required</sup> <a name="patch_info_url" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.patchInfoUrl"></a>

```python
patch_info_url: str
```

- *Type:* str

---

##### `service_version`<sup>Required</sup> <a name="service_version" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.serviceVersion"></a>

```python
service_version: str
```

- *Type:* str

---

##### `time_patch_due`<sup>Required</sup> <a name="time_patch_due" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.timePatchDue"></a>

```python
time_patch_due: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems</a>

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.items"></a>

```python
items: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems</a>

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.items"></a>

```python
items: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection</a>

---


### DataOciBlockchainBlockchainPlatformPatchesFilterList <a name="DataOciBlockchainBlockchainPlatformPatchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciBlockchainBlockchainPlatformPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]]

---


### DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform_patches

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciBlockchainBlockchainPlatformPatchesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>]

---



