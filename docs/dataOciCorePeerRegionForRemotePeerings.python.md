# `dataOciCorePeerRegionForRemotePeerings` Submodule <a name="`dataOciCorePeerRegionForRemotePeerings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCorePeerRegionForRemotePeerings <a name="DataOciCorePeerRegionForRemotePeerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings oci_core_peer_region_for_remote_peerings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCorePeerRegionForRemotePeeringsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#id DataOciCorePeerRegionForRemotePeerings#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#filter DataOciCorePeerRegionForRemotePeerings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#id DataOciCorePeerRegionForRemotePeerings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCorePeerRegionForRemotePeeringsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCorePeerRegionForRemotePeerings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCorePeerRegionForRemotePeerings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCorePeerRegionForRemotePeerings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCorePeerRegionForRemotePeerings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCorePeerRegionForRemotePeerings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList">DataOciCorePeerRegionForRemotePeeringsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.peerRegionForRemotePeerings">peer_region_for_remote_peerings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filter"></a>

```python
filter: DataOciCorePeerRegionForRemotePeeringsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList">DataOciCorePeerRegionForRemotePeeringsFilterList</a>

---

##### `peer_region_for_remote_peerings`<sup>Required</sup> <a name="peer_region_for_remote_peerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.peerRegionForRemotePeerings"></a>

```python
peer_region_for_remote_peerings: DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCorePeerRegionForRemotePeeringsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCorePeerRegionForRemotePeeringsConfig <a name="DataOciCorePeerRegionForRemotePeeringsConfig" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCorePeerRegionForRemotePeeringsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#id DataOciCorePeerRegionForRemotePeerings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCorePeerRegionForRemotePeeringsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#filter DataOciCorePeerRegionForRemotePeerings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#id DataOciCorePeerRegionForRemotePeerings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCorePeerRegionForRemotePeeringsFilter <a name="DataOciCorePeerRegionForRemotePeeringsFilter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#name DataOciCorePeerRegionForRemotePeerings#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#values DataOciCorePeerRegionForRemotePeerings#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#regex DataOciCorePeerRegionForRemotePeerings#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#name DataOciCorePeerRegionForRemotePeerings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#values DataOciCorePeerRegionForRemotePeerings#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#regex DataOciCorePeerRegionForRemotePeerings#regex}.

---

### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCorePeerRegionForRemotePeeringsFilterList <a name="DataOciCorePeerRegionForRemotePeeringsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCorePeerRegionForRemotePeeringsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCorePeerRegionForRemotePeeringsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]]

---


### DataOciCorePeerRegionForRemotePeeringsFilterOutputReference <a name="DataOciCorePeerRegionForRemotePeeringsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCorePeerRegionForRemotePeeringsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>]

---


### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_peer_region_for_remote_peerings

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings</a>

---



