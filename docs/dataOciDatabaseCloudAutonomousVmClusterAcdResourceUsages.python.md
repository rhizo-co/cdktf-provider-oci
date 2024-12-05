# `dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages` Submodule <a name="`dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages oci_database_cloud_autonomous_vm_cluster_acd_resource_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_autonomous_vm_cluster_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.cloudAutonomousVmClusterId">cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_autonomous_vm_cluster_id`<sup>Required</sup> <a name="cloud_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.cloudAutonomousVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#cloud_autonomous_vm_cluster_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#filter DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages">autonomous_container_database_resource_usages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterIdInput">cloud_autonomous_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterId">cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_container_database_resource_usages`<sup>Required</sup> <a name="autonomous_container_database_resource_usages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages"></a>

```python
autonomous_container_database_resource_usages: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filter"></a>

```python
filter: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList</a>

---

##### `cloud_autonomous_vm_cluster_id_input`<sup>Optional</sup> <a name="cloud_autonomous_vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterIdInput"></a>

```python
cloud_autonomous_vm_cluster_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `cloud_autonomous_vm_cluster_id`<sup>Required</sup> <a name="cloud_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterId"></a>

```python
cloud_autonomous_vm_cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages()
```


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage()
```


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_autonomous_vm_cluster_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.cloudAutonomousVmClusterId">cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_autonomous_vm_cluster_id`<sup>Required</sup> <a name="cloud_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.cloudAutonomousVmClusterId"></a>

```python
cloud_autonomous_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#cloud_autonomous_vm_cluster_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#filter DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus">provisioned_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus">reclaimable_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus">reserved_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus">used_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provisioned_cpus`<sup>Required</sup> <a name="provisioned_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus"></a>

```python
provisioned_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reclaimable_cpus`<sup>Required</sup> <a name="reclaimable_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus"></a>

```python
reclaimable_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reserved_cpus`<sup>Required</sup> <a name="reserved_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus"></a>

```python
reserved_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_cpus`<sup>Required</sup> <a name="used_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus"></a>

```python
used_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a>

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage">autonomous_container_database_vm_usage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus">available_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus">largest_provisionable_autonomous_database_in_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus">provisionable_cpus</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus">provisioned_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus">reclaimable_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus">reserved_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus">used_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_container_database_vm_usage`<sup>Required</sup> <a name="autonomous_container_database_vm_usage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage"></a>

```python
autonomous_container_database_vm_usage: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a>

---

##### `available_cpus`<sup>Required</sup> <a name="available_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus"></a>

```python
available_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `largest_provisionable_autonomous_database_in_cpus`<sup>Required</sup> <a name="largest_provisionable_autonomous_database_in_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```python
largest_provisionable_autonomous_database_in_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisionable_cpus`<sup>Required</sup> <a name="provisionable_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus"></a>

```python
provisionable_cpus: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `provisioned_cpus`<sup>Required</sup> <a name="provisioned_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus"></a>

```python
provisioned_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reclaimable_cpus`<sup>Required</sup> <a name="reclaimable_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus"></a>

```python
reclaimable_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reserved_cpus`<sup>Required</sup> <a name="reserved_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus"></a>

```python
reserved_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_cpus`<sup>Required</sup> <a name="used_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus"></a>

```python
used_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a>

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]]

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_autonomous_vm_cluster_acd_resource_usages

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>]

---



