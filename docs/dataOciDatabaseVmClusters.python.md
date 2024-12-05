# `dataOciDatabaseVmClusters` Submodule <a name="`dataOciDatabaseVmClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusters <a name="DataOciDatabaseVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters oci_database_vm_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClusters(
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
  exadata_infrastructure_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClustersFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#compartment_id DataOciDatabaseVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#display_name DataOciDatabaseVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#exadata_infrastructure_id DataOciDatabaseVmClusters#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#id DataOciDatabaseVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#state DataOciDatabaseVmClusters#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#compartment_id DataOciDatabaseVmClusters#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#display_name DataOciDatabaseVmClusters#display_name}.

---

##### `exadata_infrastructure_id`<sup>Optional</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#exadata_infrastructure_id DataOciDatabaseVmClusters#exadata_infrastructure_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#filter DataOciDatabaseVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#id DataOciDatabaseVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#state DataOciDatabaseVmClusters#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetExadataInfrastructureId">reset_exadata_infrastructure_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClustersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_exadata_infrastructure_id` <a name="reset_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetExadataInfrastructureId"></a>

```python
def reset_exadata_infrastructure_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseVmClusters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList">DataOciDatabaseVmClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.vmClusters">vm_clusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList">DataOciDatabaseVmClustersVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.exadataInfrastructureIdInput">exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.filter"></a>

```python
filter: DataOciDatabaseVmClustersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList">DataOciDatabaseVmClustersFilterList</a>

---

##### `vm_clusters`<sup>Required</sup> <a name="vm_clusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.vmClusters"></a>

```python
vm_clusters: DataOciDatabaseVmClustersVmClustersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList">DataOciDatabaseVmClustersVmClustersList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exadata_infrastructure_id_input`<sup>Optional</sup> <a name="exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.exadataInfrastructureIdInput"></a>

```python
exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClustersConfig <a name="DataOciDatabaseVmClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  exadata_infrastructure_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClustersFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#compartment_id DataOciDatabaseVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#display_name DataOciDatabaseVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#exadata_infrastructure_id DataOciDatabaseVmClusters#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#id DataOciDatabaseVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#state DataOciDatabaseVmClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#compartment_id DataOciDatabaseVmClusters#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#display_name DataOciDatabaseVmClusters#display_name}.

---

##### `exadata_infrastructure_id`<sup>Optional</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#exadata_infrastructure_id DataOciDatabaseVmClusters#exadata_infrastructure_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#filter DataOciDatabaseVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#id DataOciDatabaseVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#state DataOciDatabaseVmClusters#state}.

---

### DataOciDatabaseVmClustersFilter <a name="DataOciDatabaseVmClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#name DataOciDatabaseVmClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#values DataOciDatabaseVmClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#regex DataOciDatabaseVmClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#name DataOciDatabaseVmClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#values DataOciDatabaseVmClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#regex DataOciDatabaseVmClusters#regex}.

---

### DataOciDatabaseVmClustersVmClusters <a name="DataOciDatabaseVmClustersVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters()
```


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails()
```


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference()
```


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod()
```


### DataOciDatabaseVmClustersVmClustersDataCollectionOptions <a name="DataOciDatabaseVmClustersVmClustersDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions()
```


### DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails <a name="DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClustersFilterList <a name="DataOciDatabaseVmClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClustersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]]

---


### DataOciDatabaseVmClustersFilterOutputReference <a name="DataOciDatabaseVmClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseVmClustersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter">DataOciDatabaseVmClustersFilter</a>]

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">apply_update_preferred_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">apply_update_preferred_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_update_preferred_end_time`<sup>Required</sup> <a name="apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```python
apply_update_preferred_end_time: str
```

- *Type:* str

---

##### `apply_update_preferred_start_time`<sup>Required</sup> <a name="apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```python
apply_update_preferred_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freeze_period_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freeze_period_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `freeze_period_end_time`<sup>Required</sup> <a name="freeze_period_end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```python
freeze_period_end_time: str
```

- *Type:* str

---

##### `freeze_period_start_time`<sup>Required</sup> <a name="freeze_period_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```python
freeze_period_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">apply_update_time_preference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freeze_period</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">is_early_adoption_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">is_freeze_period_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_update_time_preference`<sup>Required</sup> <a name="apply_update_time_preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```python
apply_update_time_preference: DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a>

---

##### `freeze_period`<sup>Required</sup> <a name="freeze_period" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```python
freeze_period: DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList</a>

---

##### `is_early_adoption_enabled`<sup>Required</sup> <a name="is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```python
is_early_adoption_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_freeze_period_enabled`<sup>Required</sup> <a name="is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```python
is_freeze_period_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails</a>

---


### DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList <a name="DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference <a name="DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions">DataOciDatabaseVmClustersVmClustersDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClustersVmClustersDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions">DataOciDatabaseVmClustersVmClustersDataCollectionOptions</a>

---


### DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList <a name="DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference <a name="DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">file_system_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails">DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_size_gb`<sup>Required</sup> <a name="file_system_size_gb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```python
file_system_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails">DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails</a>

---


### DataOciDatabaseVmClustersVmClustersList <a name="DataOciDatabaseVmClustersVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClustersVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClustersVmClustersOutputReference <a name="DataOciDatabaseVmClustersVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_clusters

dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cloudAutomationUpdateDetails">cloud_automation_update_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cpusEnabled">cpus_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList">DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.fileSystemConfigurationDetails">file_system_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList">DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.lastPatchHistoryEntryId">last_patch_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.ocpusEnabled">ocpus_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.vmClusterNetworkId">vm_cluster_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters">DataOciDatabaseVmClustersVmClusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `cloud_automation_update_details`<sup>Required</sup> <a name="cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cloudAutomationUpdateDetails"></a>

```python
cloud_automation_update_details: DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus_enabled`<sup>Required</sup> <a name="cpus_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cpusEnabled"></a>

```python
cpus_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataCollectionOptions"></a>

```python
data_collection_options: DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList">DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList</a>

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `file_system_configuration_details`<sup>Required</sup> <a name="file_system_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.fileSystemConfigurationDetails"></a>

```python
file_system_configuration_details: DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList">DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_local_backup_enabled`<sup>Required</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sparse_diskgroup_enabled`<sup>Required</sup> <a name="is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_patch_history_entry_id`<sup>Required</sup> <a name="last_patch_history_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.lastPatchHistoryEntryId"></a>

```python
last_patch_history_entry_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_enabled`<sup>Required</sup> <a name="ocpus_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.ocpusEnabled"></a>

```python
ocpus_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vm_cluster_network_id`<sup>Required</sup> <a name="vm_cluster_network_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.vmClusterNetworkId"></a>

```python
vm_cluster_network_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClustersVmClusters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters">DataOciDatabaseVmClustersVmClusters</a>

---



