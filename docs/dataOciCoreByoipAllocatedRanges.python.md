# `dataOciCoreByoipAllocatedRanges` Submodule <a name="`dataOciCoreByoipAllocatedRanges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreByoipAllocatedRanges <a name="DataOciCoreByoipAllocatedRanges" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges oci_core_byoip_allocated_ranges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  byoip_range_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreByoipAllocatedRangesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.byoipRangeId">byoip_range_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `byoip_range_id`<sup>Required</sup> <a name="byoip_range_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.byoipRangeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#filter DataOciCoreByoipAllocatedRanges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreByoipAllocatedRangesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreByoipAllocatedRanges resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreByoipAllocatedRanges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreByoipAllocatedRanges to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreByoipAllocatedRanges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreByoipAllocatedRanges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipAllocatedRangeCollection">byoip_allocated_range_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList">DataOciCoreByoipAllocatedRangesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeIdInput">byoip_range_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeId">byoip_range_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `byoip_allocated_range_collection`<sup>Required</sup> <a name="byoip_allocated_range_collection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipAllocatedRangeCollection"></a>

```python
byoip_allocated_range_collection: DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filter"></a>

```python
filter: DataOciCoreByoipAllocatedRangesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList">DataOciCoreByoipAllocatedRangesFilterList</a>

---

##### `byoip_range_id_input`<sup>Optional</sup> <a name="byoip_range_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeIdInput"></a>

```python
byoip_range_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreByoipAllocatedRangesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `byoip_range_id`<sup>Required</sup> <a name="byoip_range_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeId"></a>

```python
byoip_range_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection()
```


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems()
```


### DataOciCoreByoipAllocatedRangesConfig <a name="DataOciCoreByoipAllocatedRangesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  byoip_range_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreByoipAllocatedRangesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.byoipRangeId">byoip_range_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `byoip_range_id`<sup>Required</sup> <a name="byoip_range_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.byoipRangeId"></a>

```python
byoip_range_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreByoipAllocatedRangesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#filter DataOciCoreByoipAllocatedRanges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreByoipAllocatedRangesFilter <a name="DataOciCoreByoipAllocatedRangesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#name DataOciCoreByoipAllocatedRanges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#values DataOciCoreByoipAllocatedRanges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#regex DataOciCoreByoipAllocatedRanges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#name DataOciCoreByoipAllocatedRanges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#values DataOciCoreByoipAllocatedRanges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#regex DataOciCoreByoipAllocatedRanges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.publicIpPoolId">public_ip_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `public_ip_pool_id`<sup>Required</sup> <a name="public_ip_pool_id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.publicIpPoolId"></a>

```python
public_ip_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems</a>

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.items"></a>

```python
items: DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection</a>

---


### DataOciCoreByoipAllocatedRangesFilterList <a name="DataOciCoreByoipAllocatedRangesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreByoipAllocatedRangesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreByoipAllocatedRangesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]]

---


### DataOciCoreByoipAllocatedRangesFilterOutputReference <a name="DataOciCoreByoipAllocatedRangesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_byoip_allocated_ranges

dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreByoipAllocatedRangesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>]

---



