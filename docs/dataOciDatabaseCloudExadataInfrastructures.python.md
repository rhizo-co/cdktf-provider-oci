# `dataOciDatabaseCloudExadataInfrastructures` Submodule <a name="`dataOciDatabaseCloudExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudExadataInfrastructures <a name="DataOciDatabaseCloudExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures oci_database_cloud_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures(
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
  cluster_placement_group_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudExadataInfrastructuresFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#compartment_id DataOciDatabaseCloudExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#cluster_placement_group_id DataOciDatabaseCloudExadataInfrastructures#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#display_name DataOciDatabaseCloudExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#id DataOciDatabaseCloudExadataInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#state DataOciDatabaseCloudExadataInfrastructures#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#compartment_id DataOciDatabaseCloudExadataInfrastructures#compartment_id}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.clusterPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#cluster_placement_group_id DataOciDatabaseCloudExadataInfrastructures#cluster_placement_group_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#display_name DataOciDatabaseCloudExadataInfrastructures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#filter DataOciDatabaseCloudExadataInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#id DataOciDatabaseCloudExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#state DataOciDatabaseCloudExadataInfrastructures#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetClusterPlacementGroupId">reset_cluster_placement_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudExadataInfrastructuresFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]

---

##### `reset_cluster_placement_group_id` <a name="reset_cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetClusterPlacementGroupId"></a>

```python
def reset_cluster_placement_group_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseCloudExadataInfrastructures to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseCloudExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.cloudExadataInfrastructures">cloud_exadata_infrastructures</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList">DataOciDatabaseCloudExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.clusterPlacementGroupIdInput">cluster_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cloud_exadata_infrastructures`<sup>Required</sup> <a name="cloud_exadata_infrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.cloudExadataInfrastructures"></a>

```python
cloud_exadata_infrastructures: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.filter"></a>

```python
filter: DataOciDatabaseCloudExadataInfrastructuresFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList">DataOciDatabaseCloudExadataInfrastructuresFilterList</a>

---

##### `cluster_placement_group_id_input`<sup>Optional</sup> <a name="cluster_placement_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.clusterPlacementGroupIdInput"></a>

```python
cluster_placement_group_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures()
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts()
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations()
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow()
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek()
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths()
```


### DataOciDatabaseCloudExadataInfrastructuresConfig <a name="DataOciDatabaseCloudExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  cluster_placement_group_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudExadataInfrastructuresFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#compartment_id DataOciDatabaseCloudExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#cluster_placement_group_id DataOciDatabaseCloudExadataInfrastructures#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#display_name DataOciDatabaseCloudExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#id DataOciDatabaseCloudExadataInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#state DataOciDatabaseCloudExadataInfrastructures#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#compartment_id DataOciDatabaseCloudExadataInfrastructures#compartment_id}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#cluster_placement_group_id DataOciDatabaseCloudExadataInfrastructures#cluster_placement_group_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#display_name DataOciDatabaseCloudExadataInfrastructures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#filter DataOciDatabaseCloudExadataInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#id DataOciDatabaseCloudExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#state DataOciDatabaseCloudExadataInfrastructures#state}.

---

### DataOciDatabaseCloudExadataInfrastructuresFilter <a name="DataOciDatabaseCloudExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#name DataOciDatabaseCloudExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#values DataOciDatabaseCloudExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#regex DataOciDatabaseCloudExadataInfrastructures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#name DataOciDatabaseCloudExadataInfrastructures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#values DataOciDatabaseCloudExadataInfrastructures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#regex DataOciDatabaseCloudExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition">is_backup_partition</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isResizable">is_resizable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.minSizeGb">min_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_backup_partition`<sup>Required</sup> <a name="is_backup_partition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition"></a>

```python
is_backup_partition: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_resizable`<sup>Required</sup> <a name="is_resizable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isResizable"></a>

```python
is_resizable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `min_size_gb`<sup>Required</sup> <a name="min_size_gb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.minSizeGb"></a>

```python
min_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu">skip_ru</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a>

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.months"></a>

```python
months: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList</a>

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `skip_ru`<sup>Required</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu"></a>

```python
skip_ru: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.activatedStorageCount">activated_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.availableStorageSizeInGbs">available_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.customerContacts">customer_contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dbServerVersion">db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.definedFileSystemConfigurations">defined_file_system_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.lastMaintenanceRunId">last_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxCpuCount">max_cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxDataStorageInTbs">max_data_storage_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxDbNodeStorageInGbs">max_db_node_storage_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxMemoryInGbs">max_memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.monthlyDbServerVersion">monthly_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.monthlyStorageServerVersion">monthly_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.storageServerVersion">storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.totalStorageSizeInGbs">total_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activated_storage_count`<sup>Required</sup> <a name="activated_storage_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.activatedStorageCount"></a>

```python
activated_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_storage_count`<sup>Required</sup> <a name="additional_storage_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.additionalStorageCount"></a>

```python
additional_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `available_storage_size_in_gbs`<sup>Required</sup> <a name="available_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.availableStorageSizeInGbs"></a>

```python
available_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.customerContacts"></a>

```python
customer_contacts: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList</a>

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_version`<sup>Required</sup> <a name="db_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dbServerVersion"></a>

```python
db_server_version: str
```

- *Type:* str

---

##### `defined_file_system_configurations`<sup>Required</sup> <a name="defined_file_system_configurations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.definedFileSystemConfigurations"></a>

```python
defined_file_system_configurations: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_maintenance_run_id`<sup>Required</sup> <a name="last_maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.lastMaintenanceRunId"></a>

```python
last_maintenance_run_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList</a>

---

##### `max_cpu_count`<sup>Required</sup> <a name="max_cpu_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxCpuCount"></a>

```python
max_cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_storage_in_tbs`<sup>Required</sup> <a name="max_data_storage_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxDataStorageInTbs"></a>

```python
max_data_storage_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_in_gbs`<sup>Required</sup> <a name="max_db_node_storage_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxDbNodeStorageInGbs"></a>

```python
max_db_node_storage_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_gbs`<sup>Required</sup> <a name="max_memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxMemoryInGbs"></a>

```python
max_memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monthly_db_server_version`<sup>Required</sup> <a name="monthly_db_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.monthlyDbServerVersion"></a>

```python
monthly_db_server_version: str
```

- *Type:* str

---

##### `monthly_storage_server_version`<sup>Required</sup> <a name="monthly_storage_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.monthlyStorageServerVersion"></a>

```python
monthly_storage_server_version: str
```

- *Type:* str

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_count`<sup>Required</sup> <a name="storage_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_server_version`<sup>Required</sup> <a name="storage_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.storageServerVersion"></a>

```python
storage_server_version: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `total_storage_size_in_gbs`<sup>Required</sup> <a name="total_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.totalStorageSizeInGbs"></a>

```python
total_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures</a>

---


### DataOciDatabaseCloudExadataInfrastructuresFilterList <a name="DataOciDatabaseCloudExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]]

---


### DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructures

dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseCloudExadataInfrastructuresFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter">DataOciDatabaseCloudExadataInfrastructuresFilter</a>]

---



