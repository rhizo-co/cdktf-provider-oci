# `dataOciDatabaseCloudVmClusters` Submodule <a name="`dataOciDatabaseCloudVmClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudVmClusters <a name="DataOciDatabaseCloudVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters oci_database_cloud_vm_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters(
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
  cloud_exadata_infrastructure_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudVmClustersFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#compartment_id DataOciDatabaseCloudVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudVmClusters#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#display_name DataOciDatabaseCloudVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#id DataOciDatabaseCloudVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#state DataOciDatabaseCloudVmClusters#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#compartment_id DataOciDatabaseCloudVmClusters#compartment_id}.

---

##### `cloud_exadata_infrastructure_id`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudVmClusters#cloud_exadata_infrastructure_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#display_name DataOciDatabaseCloudVmClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#filter DataOciDatabaseCloudVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#id DataOciDatabaseCloudVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#state DataOciDatabaseCloudVmClusters#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetCloudExadataInfrastructureId">reset_cloud_exadata_infrastructure_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudVmClustersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]

---

##### `reset_cloud_exadata_infrastructure_id` <a name="reset_cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetCloudExadataInfrastructureId"></a>

```python
def reset_cloud_exadata_infrastructure_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseCloudVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseCloudVmClusters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseCloudVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.cloudVmClusters">cloud_vm_clusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList">DataOciDatabaseCloudVmClustersCloudVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList">DataOciDatabaseCloudVmClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.cloudExadataInfrastructureIdInput">cloud_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cloud_vm_clusters`<sup>Required</sup> <a name="cloud_vm_clusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.cloudVmClusters"></a>

```python
cloud_vm_clusters: DataOciDatabaseCloudVmClustersCloudVmClustersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList">DataOciDatabaseCloudVmClustersCloudVmClustersList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.filter"></a>

```python
filter: DataOciDatabaseCloudVmClustersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList">DataOciDatabaseCloudVmClustersFilterList</a>

---

##### `cloud_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.cloudExadataInfrastructureIdInput"></a>

```python
cloud_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudVmClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClusters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudVmClustersCloudVmClusters <a name="DataOciDatabaseCloudVmClustersCloudVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClusters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClusters()
```


### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails()
```


### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference()
```


### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod()
```


### DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions <a name="DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions()
```


### DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails <a name="DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails()
```


### DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache <a name="DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache()
```


### DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans <a name="DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans()
```


### DataOciDatabaseCloudVmClustersConfig <a name="DataOciDatabaseCloudVmClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  cloud_exadata_infrastructure_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudVmClustersFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#compartment_id DataOciDatabaseCloudVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudVmClusters#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#display_name DataOciDatabaseCloudVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#id DataOciDatabaseCloudVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#state DataOciDatabaseCloudVmClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#compartment_id DataOciDatabaseCloudVmClusters#compartment_id}.

---

##### `cloud_exadata_infrastructure_id`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudVmClusters#cloud_exadata_infrastructure_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#display_name DataOciDatabaseCloudVmClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudVmClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#filter DataOciDatabaseCloudVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#id DataOciDatabaseCloudVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#state DataOciDatabaseCloudVmClusters#state}.

---

### DataOciDatabaseCloudVmClustersFilter <a name="DataOciDatabaseCloudVmClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#name DataOciDatabaseCloudVmClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#values DataOciDatabaseCloudVmClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#regex DataOciDatabaseCloudVmClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#name DataOciDatabaseCloudVmClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#values DataOciDatabaseCloudVmClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_clusters#regex DataOciDatabaseCloudVmClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">apply_update_preferred_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">apply_update_preferred_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_update_preferred_end_time`<sup>Required</sup> <a name="apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```python
apply_update_preferred_end_time: str
```

- *Type:* str

---

##### `apply_update_preferred_start_time`<sup>Required</sup> <a name="apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```python
apply_update_preferred_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freeze_period_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freeze_period_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `freeze_period_end_time`<sup>Required</sup> <a name="freeze_period_end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```python
freeze_period_end_time: str
```

- *Type:* str

---

##### `freeze_period_start_time`<sup>Required</sup> <a name="freeze_period_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```python
freeze_period_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">apply_update_time_preference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freeze_period</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">is_early_adoption_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">is_freeze_period_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_update_time_preference`<sup>Required</sup> <a name="apply_update_time_preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```python
apply_update_time_preference: DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a>

---

##### `freeze_period`<sup>Required</sup> <a name="freeze_period" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```python
freeze_period: DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsFreezePeriodList</a>

---

##### `is_early_adoption_enabled`<sup>Required</sup> <a name="is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```python
is_early_adoption_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_freeze_period_enabled`<sup>Required</sup> <a name="is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```python
is_freeze_period_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetails</a>

---


### DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList <a name="DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions">DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions">DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptions</a>

---


### DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList <a name="DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">file_system_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails">DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_size_gb`<sup>Required</sup> <a name="file_system_size_gb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```python
file_system_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails">DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetails</a>

---


### DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList <a name="DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flash_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans">DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `flash_cache_limit`<sup>Required</sup> <a name="flash_cache_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```python
flash_cache_limit: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans">DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlans</a>

---


### DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList <a name="DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.dbPlans">db_plans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList">DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache">DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.dbPlans"></a>

```python
db_plans: DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList">DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheDbPlansList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache">DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCache</a>

---


### DataOciDatabaseCloudVmClustersCloudVmClustersList <a name="DataOciDatabaseCloudVmClustersCloudVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference <a name="DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudAutomationUpdateDetails">cloud_automation_update_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.createAsync">create_async</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList">DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fileSystemConfigurationDetails">file_system_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList">DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.iormConfigCache">iorm_config_cache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList">DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.lastUpdateHistoryEntryId">last_update_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.listenerPort">listener_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.privateZoneId">private_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.securityAttributes">security_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.storageSizeInGbs">storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.vipIds">vip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClusters">DataOciDatabaseCloudVmClustersCloudVmClusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_network_nsg_ids`<sup>Required</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupSubnetId"></a>

```python
backup_subnet_id: str
```

- *Type:* str

---

##### `cloud_automation_update_details`<sup>Required</sup> <a name="cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudAutomationUpdateDetails"></a>

```python
cloud_automation_update_details: DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList">DataOciDatabaseCloudVmClustersCloudVmClustersCloudAutomationUpdateDetailsList</a>

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_async`<sup>Required</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.createAsync"></a>

```python
create_async: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dataCollectionOptions"></a>

```python
data_collection_options: DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList">DataOciDatabaseCloudVmClustersCloudVmClustersDataCollectionOptionsList</a>

---

##### `data_storage_percentage`<sup>Required</sup> <a name="data_storage_percentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dataStoragePercentage"></a>

```python
data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `file_system_configuration_details`<sup>Required</sup> <a name="file_system_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fileSystemConfigurationDetails"></a>

```python
file_system_configuration_details: DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList">DataOciDatabaseCloudVmClustersCloudVmClustersFileSystemConfigurationDetailsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iorm_config_cache`<sup>Required</sup> <a name="iorm_config_cache" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.iormConfigCache"></a>

```python
iorm_config_cache: DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList">DataOciDatabaseCloudVmClustersCloudVmClustersIormConfigCacheList</a>

---

##### `is_local_backup_enabled`<sup>Required</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sparse_diskgroup_enabled`<sup>Required</sup> <a name="is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_update_history_entry_id`<sup>Required</sup> <a name="last_update_history_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.lastUpdateHistoryEntryId"></a>

```python
last_update_history_entry_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.listenerPort"></a>

```python
listener_port: str
```

- *Type:* str

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_zone_id`<sup>Required</sup> <a name="private_zone_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.privateZoneId"></a>

```python
private_zone_id: str
```

- *Type:* str

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.securityAttributes"></a>

```python
security_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_size_in_gbs`<sup>Required</sup> <a name="storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.storageSizeInGbs"></a>

```python
storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vip_ids`<sup>Required</sup> <a name="vip_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.vipIds"></a>

```python
vip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClustersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudVmClustersCloudVmClusters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersCloudVmClusters">DataOciDatabaseCloudVmClustersCloudVmClusters</a>

---


### DataOciDatabaseCloudVmClustersFilterList <a name="DataOciDatabaseCloudVmClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudVmClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudVmClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]]

---


### DataOciDatabaseCloudVmClustersFilterOutputReference <a name="DataOciDatabaseCloudVmClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_vm_clusters

dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseCloudVmClustersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusters.DataOciDatabaseCloudVmClustersFilter">DataOciDatabaseCloudVmClustersFilter</a>]

---



