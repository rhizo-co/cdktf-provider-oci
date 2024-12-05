# `dataOciBdsBdsInstancePatchHistories` Submodule <a name="`dataOciBdsBdsInstancePatchHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstancePatchHistories <a name="DataOciBdsBdsInstancePatchHistories" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories oci_bds_bds_instance_patch_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancePatchHistoriesFilter]] = None,
  id: str = None,
  patch_type: str = None,
  patch_version: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#bds_instance_id DataOciBdsBdsInstancePatchHistories#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#id DataOciBdsBdsInstancePatchHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.patchType">patch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_type DataOciBdsBdsInstancePatchHistories#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.patchVersion">patch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_version DataOciBdsBdsInstancePatchHistories#patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#state DataOciBdsBdsInstancePatchHistories#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#bds_instance_id DataOciBdsBdsInstancePatchHistories#bds_instance_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#filter DataOciBdsBdsInstancePatchHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#id DataOciBdsBdsInstancePatchHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patch_type`<sup>Optional</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.patchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_type DataOciBdsBdsInstancePatchHistories#patch_type}.

---

##### `patch_version`<sup>Optional</sup> <a name="patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.patchVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_version DataOciBdsBdsInstancePatchHistories#patch_version}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#state DataOciBdsBdsInstancePatchHistories#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetPatchType">reset_patch_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetPatchVersion">reset_patch_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancePatchHistoriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_patch_type` <a name="reset_patch_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetPatchType"></a>

```python
def reset_patch_type() -> None
```

##### `reset_patch_version` <a name="reset_patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetPatchVersion"></a>

```python
def reset_patch_version() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstancePatchHistories resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBdsBdsInstancePatchHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBdsBdsInstancePatchHistories to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBdsBdsInstancePatchHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstancePatchHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList">DataOciBdsBdsInstancePatchHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchHistories">patch_histories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList">DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchTypeInput">patch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchVersionInput">patch_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchVersion">patch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.filter"></a>

```python
filter: DataOciBdsBdsInstancePatchHistoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList">DataOciBdsBdsInstancePatchHistoriesFilterList</a>

---

##### `patch_histories`<sup>Required</sup> <a name="patch_histories" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchHistories"></a>

```python
patch_histories: DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList">DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList</a>

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancePatchHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `patch_type_input`<sup>Optional</sup> <a name="patch_type_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchTypeInput"></a>

```python
patch_type_input: str
```

- *Type:* str

---

##### `patch_version_input`<sup>Optional</sup> <a name="patch_version_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchVersionInput"></a>

```python
patch_version_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `patch_version`<sup>Required</sup> <a name="patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchVersion"></a>

```python
patch_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstancePatchHistoriesConfig <a name="DataOciBdsBdsInstancePatchHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancePatchHistoriesFilter]] = None,
  id: str = None,
  patch_type: str = None,
  patch_version: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#bds_instance_id DataOciBdsBdsInstancePatchHistories#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#id DataOciBdsBdsInstancePatchHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.patchType">patch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_type DataOciBdsBdsInstancePatchHistories#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.patchVersion">patch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_version DataOciBdsBdsInstancePatchHistories#patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#state DataOciBdsBdsInstancePatchHistories#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#bds_instance_id DataOciBdsBdsInstancePatchHistories#bds_instance_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancePatchHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#filter DataOciBdsBdsInstancePatchHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#id DataOciBdsBdsInstancePatchHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patch_type`<sup>Optional</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_type DataOciBdsBdsInstancePatchHistories#patch_type}.

---

##### `patch_version`<sup>Optional</sup> <a name="patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.patchVersion"></a>

```python
patch_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_version DataOciBdsBdsInstancePatchHistories#patch_version}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#state DataOciBdsBdsInstancePatchHistories#state}.

---

### DataOciBdsBdsInstancePatchHistoriesFilter <a name="DataOciBdsBdsInstancePatchHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#name DataOciBdsBdsInstancePatchHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#values DataOciBdsBdsInstancePatchHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#regex DataOciBdsBdsInstancePatchHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#name DataOciBdsBdsInstancePatchHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#values DataOciBdsBdsInstancePatchHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#regex DataOciBdsBdsInstancePatchHistories#regex}.

---

### DataOciBdsBdsInstancePatchHistoriesPatchHistories <a name="DataOciBdsBdsInstancePatchHistoriesPatchHistories" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstancePatchHistoriesFilterList <a name="DataOciBdsBdsInstancePatchHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancePatchHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancePatchHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]]

---


### DataOciBdsBdsInstancePatchHistoriesFilterOutputReference <a name="DataOciBdsBdsInstancePatchHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciBdsBdsInstancePatchHistoriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>]

---


### DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList <a name="DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference <a name="DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_patch_histories

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories">DataOciBdsBdsInstancePatchHistoriesPatchHistories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancePatchHistoriesPatchHistories
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories">DataOciBdsBdsInstancePatchHistoriesPatchHistories</a>

---



