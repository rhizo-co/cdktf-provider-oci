# `dataOciClusterPlacementGroupsClusterPlacementGroups` Submodule <a name="`dataOciClusterPlacementGroupsClusterPlacementGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroups <a name="DataOciClusterPlacementGroupsClusterPlacementGroups" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups oci_cluster_placement_groups_cluster_placement_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ad: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciClusterPlacementGroupsClusterPlacementGroupsFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.ad">ad</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#ad DataOciClusterPlacementGroupsClusterPlacementGroups#ad}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id_in_subtree DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#id DataOciClusterPlacementGroupsClusterPlacementGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#state DataOciClusterPlacementGroupsClusterPlacementGroups#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ad`<sup>Optional</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.ad"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#ad DataOciClusterPlacementGroupsClusterPlacementGroups#ad}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id_in_subtree DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#filter DataOciClusterPlacementGroupsClusterPlacementGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#id DataOciClusterPlacementGroupsClusterPlacementGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#state DataOciClusterPlacementGroupsClusterPlacementGroups#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetAd">reset_ad</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciClusterPlacementGroupsClusterPlacementGroupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]

---

##### `reset_ad` <a name="reset_ad" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetAd"></a>

```python
def reset_ad() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciClusterPlacementGroupsClusterPlacementGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciClusterPlacementGroupsClusterPlacementGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciClusterPlacementGroupsClusterPlacementGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.clusterPlacementGroupCollection">cluster_placement_group_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList">DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.adInput">ad_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.ad">ad</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cluster_placement_group_collection`<sup>Required</sup> <a name="cluster_placement_group_collection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.clusterPlacementGroupCollection"></a>

```python
cluster_placement_group_collection: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.filter"></a>

```python
filter: DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList">DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList</a>

---

##### `ad_input`<sup>Optional</sup> <a name="ad_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.adInput"></a>

```python
ad_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciClusterPlacementGroupsClusterPlacementGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.ad"></a>

```python
ad: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection()
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems()
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities()
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems()
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction()
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsConfig <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ad: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciClusterPlacementGroupsClusterPlacementGroupsFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.ad">ad</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#ad DataOciClusterPlacementGroupsClusterPlacementGroups#ad}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id_in_subtree DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#id DataOciClusterPlacementGroupsClusterPlacementGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#state DataOciClusterPlacementGroupsClusterPlacementGroups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ad`<sup>Optional</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.ad"></a>

```python
ad: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#ad DataOciClusterPlacementGroupsClusterPlacementGroups#ad}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id_in_subtree DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciClusterPlacementGroupsClusterPlacementGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#filter DataOciClusterPlacementGroupsClusterPlacementGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#id DataOciClusterPlacementGroupsClusterPlacementGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#state DataOciClusterPlacementGroupsClusterPlacementGroups#state}.

---

### DataOciClusterPlacementGroupsClusterPlacementGroupsFilter <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#values DataOciClusterPlacementGroupsClusterPlacementGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#regex DataOciClusterPlacementGroupsClusterPlacementGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#values DataOciClusterPlacementGroupsClusterPlacementGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#regex DataOciClusterPlacementGroupsClusterPlacementGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.items"></a>

```python
items: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.clusterPlacementGroupType">cluster_placement_group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.opcDryRun">opc_dry_run</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.placementInstruction">placement_instruction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.capabilities"></a>

```python
capabilities: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList</a>

---

##### `cluster_placement_group_type`<sup>Required</sup> <a name="cluster_placement_group_type" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.clusterPlacementGroupType"></a>

```python
cluster_placement_group_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opc_dry_run`<sup>Required</sup> <a name="opc_dry_run" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.opcDryRun"></a>

```python
opc_dry_run: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `placement_instruction`<sup>Required</sup> <a name="placement_instruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.placementInstruction"></a>

```python
placement_instruction: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.items"></a>

```python
items: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciClusterPlacementGroupsClusterPlacementGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]]

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cluster_placement_groups_cluster_placement_groups

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciClusterPlacementGroupsClusterPlacementGroupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>]

---



