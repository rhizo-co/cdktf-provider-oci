# `dataOciDatabaseVmClusterNetworks` Submodule <a name="`dataOciDatabaseVmClusterNetworks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterNetworks <a name="DataOciDatabaseVmClusterNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks oci_database_vm_cluster_networks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks(
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
  exadata_infrastructure_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterNetworksFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#compartment_id DataOciDatabaseVmClusterNetworks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#exadata_infrastructure_id DataOciDatabaseVmClusterNetworks#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#display_name DataOciDatabaseVmClusterNetworks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#id DataOciDatabaseVmClusterNetworks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#state DataOciDatabaseVmClusterNetworks#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#compartment_id DataOciDatabaseVmClusterNetworks#compartment_id}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#exadata_infrastructure_id DataOciDatabaseVmClusterNetworks#exadata_infrastructure_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#display_name DataOciDatabaseVmClusterNetworks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#filter DataOciDatabaseVmClusterNetworks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#id DataOciDatabaseVmClusterNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#state DataOciDatabaseVmClusterNetworks#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterNetworksFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseVmClusterNetworks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseVmClusterNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList">DataOciDatabaseVmClusterNetworksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.vmClusterNetworks">vm_cluster_networks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList">DataOciDatabaseVmClusterNetworksVmClusterNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.exadataInfrastructureIdInput">exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.filter"></a>

```python
filter: DataOciDatabaseVmClusterNetworksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList">DataOciDatabaseVmClusterNetworksFilterList</a>

---

##### `vm_cluster_networks`<sup>Required</sup> <a name="vm_cluster_networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.vmClusterNetworks"></a>

```python
vm_cluster_networks: DataOciDatabaseVmClusterNetworksVmClusterNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList">DataOciDatabaseVmClusterNetworksVmClusterNetworksList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exadata_infrastructure_id_input`<sup>Optional</sup> <a name="exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.exadataInfrastructureIdInput"></a>

```python
exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterNetworksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterNetworksConfig <a name="DataOciDatabaseVmClusterNetworksConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  exadata_infrastructure_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterNetworksFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#compartment_id DataOciDatabaseVmClusterNetworks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#exadata_infrastructure_id DataOciDatabaseVmClusterNetworks#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#display_name DataOciDatabaseVmClusterNetworks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#id DataOciDatabaseVmClusterNetworks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#state DataOciDatabaseVmClusterNetworks#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#compartment_id DataOciDatabaseVmClusterNetworks#compartment_id}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#exadata_infrastructure_id DataOciDatabaseVmClusterNetworks#exadata_infrastructure_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#display_name DataOciDatabaseVmClusterNetworks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterNetworksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#filter DataOciDatabaseVmClusterNetworks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#id DataOciDatabaseVmClusterNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#state DataOciDatabaseVmClusterNetworks#state}.

---

### DataOciDatabaseVmClusterNetworksFilter <a name="DataOciDatabaseVmClusterNetworksFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#name DataOciDatabaseVmClusterNetworks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#values DataOciDatabaseVmClusterNetworks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#regex DataOciDatabaseVmClusterNetworks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#name DataOciDatabaseVmClusterNetworks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#values DataOciDatabaseVmClusterNetworks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#regex DataOciDatabaseVmClusterNetworks#regex}.

---

### DataOciDatabaseVmClusterNetworksVmClusterNetworks <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks()
```


### DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans()
```


### DataOciDatabaseVmClusterNetworksVmClusterNetworksScans <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans()
```


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks()
```


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterNetworksFilterList <a name="DataOciDatabaseVmClusterNetworksFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterNetworksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterNetworksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]]

---


### DataOciDatabaseVmClusterNetworksFilterOutputReference <a name="DataOciDatabaseVmClusterNetworksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseVmClusterNetworksFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter">DataOciDatabaseVmClusterNetworksFilter</a>]

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans">DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans">DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans</a>

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.dns">dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.drScans">dr_scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList">DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.ntp">ntp</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.scans">scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList">DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.validateVmClusterNetwork">validate_vm_cluster_network</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.vmNetworks">vm_networks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks">DataOciDatabaseVmClusterNetworksVmClusterNetworks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dr_scans`<sup>Required</sup> <a name="dr_scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.drScans"></a>

```python
dr_scans: DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList">DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList</a>

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ntp`<sup>Required</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.ntp"></a>

```python
ntp: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.scans"></a>

```python
scans: DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList">DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `validate_vm_cluster_network`<sup>Required</sup> <a name="validate_vm_cluster_network" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.validateVmClusterNetwork"></a>

```python
validate_vm_cluster_network: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `vm_networks`<sup>Required</sup> <a name="vm_networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.vmNetworks"></a>

```python
vm_networks: DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterNetworksVmClusterNetworks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks">DataOciDatabaseVmClusterNetworksVmClusterNetworks</a>

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans">DataOciDatabaseVmClusterNetworksVmClusterNetworksScans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterNetworksVmClusterNetworksScans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans">DataOciDatabaseVmClusterNetworksVmClusterNetworksScans</a>

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.dbServerId">db_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.vip">vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.vipHostname">vip_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_server_id`<sup>Required</sup> <a name="db_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vip`<sup>Required</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.vip"></a>

```python
vip: str
```

- *Type:* str

---

##### `vip_hostname`<sup>Required</sup> <a name="vip_hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.vipHostname"></a>

```python
vip_hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes</a>

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_networks

dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.nodes"></a>

```python
nodes: DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList</a>

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks</a>

---



