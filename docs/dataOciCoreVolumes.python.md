# `dataOciCoreVolumes` Submodule <a name="`dataOciCoreVolumes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumes <a name="DataOciCoreVolumes" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes oci_core_volumes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str = None,
  cluster_placement_group_id: str = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumesFilter]] = None,
  id: str = None,
  state: str = None,
  volume_group_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#availability_domain DataOciCoreVolumes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#cluster_placement_group_id DataOciCoreVolumes#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#compartment_id DataOciCoreVolumes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#display_name DataOciCoreVolumes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#id DataOciCoreVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#state DataOciCoreVolumes#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.volumeGroupId">volume_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#volume_group_id DataOciCoreVolumes#volume_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#availability_domain DataOciCoreVolumes#availability_domain}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.clusterPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#cluster_placement_group_id DataOciCoreVolumes#cluster_placement_group_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#compartment_id DataOciCoreVolumes#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#display_name DataOciCoreVolumes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#filter DataOciCoreVolumes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#id DataOciCoreVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#state DataOciCoreVolumes#state}.

---

##### `volume_group_id`<sup>Optional</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.Initializer.parameter.volumeGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#volume_group_id DataOciCoreVolumes#volume_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetClusterPlacementGroupId">reset_cluster_placement_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetVolumeGroupId">reset_volume_group_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVolumesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_cluster_placement_group_id` <a name="reset_cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetClusterPlacementGroupId"></a>

```python
def reset_cluster_placement_group_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_volume_group_id` <a name="reset_volume_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.resetVolumeGroupId"></a>

```python
def reset_volume_group_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVolumes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVolumes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVolumes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList">DataOciCoreVolumesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList">DataOciCoreVolumesVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.clusterPlacementGroupIdInput">cluster_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.volumeGroupIdInput">volume_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.filter"></a>

```python
filter: DataOciCoreVolumesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList">DataOciCoreVolumesFilterList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.volumes"></a>

```python
volumes: DataOciCoreVolumesVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList">DataOciCoreVolumesVolumesList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `cluster_placement_group_id_input`<sup>Optional</sup> <a name="cluster_placement_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.clusterPlacementGroupIdInput"></a>

```python
cluster_placement_group_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVolumesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `volume_group_id_input`<sup>Optional</sup> <a name="volume_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.volumeGroupIdInput"></a>

```python
volume_group_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `volume_group_id`<sup>Required</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumesConfig <a name="DataOciCoreVolumesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str = None,
  cluster_placement_group_id: str = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumesFilter]] = None,
  id: str = None,
  state: str = None,
  volume_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#availability_domain DataOciCoreVolumes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#cluster_placement_group_id DataOciCoreVolumes#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#compartment_id DataOciCoreVolumes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#display_name DataOciCoreVolumes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#id DataOciCoreVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#state DataOciCoreVolumes#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#volume_group_id DataOciCoreVolumes#volume_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#availability_domain DataOciCoreVolumes#availability_domain}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#cluster_placement_group_id DataOciCoreVolumes#cluster_placement_group_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#compartment_id DataOciCoreVolumes#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#display_name DataOciCoreVolumes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#filter DataOciCoreVolumes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#id DataOciCoreVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#state DataOciCoreVolumes#state}.

---

##### `volume_group_id`<sup>Optional</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesConfig.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#volume_group_id DataOciCoreVolumes#volume_group_id}.

---

### DataOciCoreVolumesFilter <a name="DataOciCoreVolumesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#name DataOciCoreVolumes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#values DataOciCoreVolumes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#regex DataOciCoreVolumes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#name DataOciCoreVolumes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#values DataOciCoreVolumes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volumes#regex DataOciCoreVolumes#regex}.

---

### DataOciCoreVolumesVolumes <a name="DataOciCoreVolumesVolumes" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumes()
```


### DataOciCoreVolumesVolumesAutotunePolicies <a name="DataOciCoreVolumesVolumesAutotunePolicies" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePolicies()
```


### DataOciCoreVolumesVolumesBlockVolumeReplicas <a name="DataOciCoreVolumesVolumesBlockVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicas()
```


### DataOciCoreVolumesVolumesSourceDetails <a name="DataOciCoreVolumesVolumesSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumesFilterList <a name="DataOciCoreVolumesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVolumesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]]

---


### DataOciCoreVolumesFilterOutputReference <a name="DataOciCoreVolumesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVolumesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesFilter">DataOciCoreVolumesFilter</a>]

---


### DataOciCoreVolumesVolumesAutotunePoliciesList <a name="DataOciCoreVolumesVolumesAutotunePoliciesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumesVolumesAutotunePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumesVolumesAutotunePoliciesOutputReference <a name="DataOciCoreVolumesVolumesAutotunePoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.autotuneType">autotune_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.maxVpusPerGb">max_vpus_per_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePolicies">DataOciCoreVolumesVolumesAutotunePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autotune_type`<sup>Required</sup> <a name="autotune_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.autotuneType"></a>

```python
autotune_type: str
```

- *Type:* str

---

##### `max_vpus_per_gb`<sup>Required</sup> <a name="max_vpus_per_gb" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.maxVpusPerGb"></a>

```python
max_vpus_per_gb: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumesVolumesAutotunePolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePolicies">DataOciCoreVolumesVolumesAutotunePolicies</a>

---


### DataOciCoreVolumesVolumesBlockVolumeReplicasList <a name="DataOciCoreVolumesVolumesBlockVolumeReplicasList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference <a name="DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.blockVolumeReplicaId">block_volume_replica_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.xrrKmsKeyId">xrr_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicas">DataOciCoreVolumesVolumesBlockVolumeReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `block_volume_replica_id`<sup>Required</sup> <a name="block_volume_replica_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.blockVolumeReplicaId"></a>

```python
block_volume_replica_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `xrr_kms_key_id`<sup>Required</sup> <a name="xrr_kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.xrrKmsKeyId"></a>

```python
xrr_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumesVolumesBlockVolumeReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicas">DataOciCoreVolumesVolumesBlockVolumeReplicas</a>

---


### DataOciCoreVolumesVolumesList <a name="DataOciCoreVolumesVolumesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumesVolumesOutputReference <a name="DataOciCoreVolumesVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.autoTunedVpusPerGb">auto_tuned_vpus_per_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.autotunePolicies">autotune_policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList">DataOciCoreVolumesVolumesAutotunePoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.blockVolumeReplicas">block_volume_replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList">DataOciCoreVolumesVolumesBlockVolumeReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.blockVolumeReplicasDeletion">block_volume_replicas_deletion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.isAutoTuneEnabled">is_auto_tune_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.isHydrated">is_hydrated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList">DataOciCoreVolumesVolumesSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.volumeBackupId">volume_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.vpusPerGb">vpus_per_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.xrcKmsKeyId">xrc_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumes">DataOciCoreVolumesVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_tuned_vpus_per_gb`<sup>Required</sup> <a name="auto_tuned_vpus_per_gb" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.autoTunedVpusPerGb"></a>

```python
auto_tuned_vpus_per_gb: str
```

- *Type:* str

---

##### `autotune_policies`<sup>Required</sup> <a name="autotune_policies" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.autotunePolicies"></a>

```python
autotune_policies: DataOciCoreVolumesVolumesAutotunePoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesAutotunePoliciesList">DataOciCoreVolumesVolumesAutotunePoliciesList</a>

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

---

##### `block_volume_replicas`<sup>Required</sup> <a name="block_volume_replicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.blockVolumeReplicas"></a>

```python
block_volume_replicas: DataOciCoreVolumesVolumesBlockVolumeReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesBlockVolumeReplicasList">DataOciCoreVolumesVolumesBlockVolumeReplicasList</a>

---

##### `block_volume_replicas_deletion`<sup>Required</sup> <a name="block_volume_replicas_deletion" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.blockVolumeReplicasDeletion"></a>

```python
block_volume_replicas_deletion: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_tune_enabled`<sup>Required</sup> <a name="is_auto_tune_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.isAutoTuneEnabled"></a>

```python
is_auto_tune_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_hydrated`<sup>Required</sup> <a name="is_hydrated" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.isHydrated"></a>

```python
is_hydrated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.sizeInGbs"></a>

```python
size_in_gbs: str
```

- *Type:* str

---

##### `size_in_mbs`<sup>Required</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.sourceDetails"></a>

```python
source_details: DataOciCoreVolumesVolumesSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList">DataOciCoreVolumesVolumesSourceDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `volume_backup_id`<sup>Required</sup> <a name="volume_backup_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.volumeBackupId"></a>

```python
volume_backup_id: str
```

- *Type:* str

---

##### `volume_group_id`<sup>Required</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

---

##### `vpus_per_gb`<sup>Required</sup> <a name="vpus_per_gb" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.vpusPerGb"></a>

```python
vpus_per_gb: str
```

- *Type:* str

---

##### `xrc_kms_key_id`<sup>Required</sup> <a name="xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.xrcKmsKeyId"></a>

```python
xrc_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumesVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumes">DataOciCoreVolumesVolumes</a>

---


### DataOciCoreVolumesVolumesSourceDetailsList <a name="DataOciCoreVolumesVolumesSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumesVolumesSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumesVolumesSourceDetailsOutputReference <a name="DataOciCoreVolumesVolumesSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volumes

dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.changeBlockSizeInBytes">change_block_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.firstBackupId">first_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.secondBackupId">second_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetails">DataOciCoreVolumesVolumesSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_block_size_in_bytes`<sup>Required</sup> <a name="change_block_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.changeBlockSizeInBytes"></a>

```python
change_block_size_in_bytes: str
```

- *Type:* str

---

##### `first_backup_id`<sup>Required</sup> <a name="first_backup_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.firstBackupId"></a>

```python
first_backup_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `second_backup_id`<sup>Required</sup> <a name="second_backup_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.secondBackupId"></a>

```python
second_backup_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumesVolumesSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumes.DataOciCoreVolumesVolumesSourceDetails">DataOciCoreVolumesVolumesSourceDetails</a>

---



