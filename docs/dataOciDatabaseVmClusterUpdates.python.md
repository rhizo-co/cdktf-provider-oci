# `dataOciDatabaseVmClusterUpdates` Submodule <a name="`dataOciDatabaseVmClusterUpdates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterUpdates <a name="DataOciDatabaseVmClusterUpdates" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates oci_database_vm_cluster_updates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vm_cluster_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdatesFilter]] = None,
  id: str = None,
  state: str = None,
  update_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#vm_cluster_id DataOciDatabaseVmClusterUpdates#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#id DataOciDatabaseVmClusterUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#state DataOciDatabaseVmClusterUpdates#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.updateType">update_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#update_type DataOciDatabaseVmClusterUpdates#update_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.vmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#vm_cluster_id DataOciDatabaseVmClusterUpdates#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#filter DataOciDatabaseVmClusterUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#id DataOciDatabaseVmClusterUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#state DataOciDatabaseVmClusterUpdates#state}.

---

##### `update_type`<sup>Optional</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.Initializer.parameter.updateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#update_type DataOciDatabaseVmClusterUpdates#update_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetUpdateType">reset_update_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdatesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_update_type` <a name="reset_update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.resetUpdateType"></a>

```python
def reset_update_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseVmClusterUpdates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseVmClusterUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList">DataOciDatabaseVmClusterUpdatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.vmClusterUpdates">vm_cluster_updates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList">DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.updateTypeInput">update_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.vmClusterIdInput">vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.filter"></a>

```python
filter: DataOciDatabaseVmClusterUpdatesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList">DataOciDatabaseVmClusterUpdatesFilterList</a>

---

##### `vm_cluster_updates`<sup>Required</sup> <a name="vm_cluster_updates" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.vmClusterUpdates"></a>

```python
vm_cluster_updates: DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList">DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `update_type_input`<sup>Optional</sup> <a name="update_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.updateTypeInput"></a>

```python
update_type_input: str
```

- *Type:* str

---

##### `vm_cluster_id_input`<sup>Optional</sup> <a name="vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.vmClusterIdInput"></a>

```python
vm_cluster_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterUpdatesConfig <a name="DataOciDatabaseVmClusterUpdatesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vm_cluster_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdatesFilter]] = None,
  id: str = None,
  state: str = None,
  update_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#vm_cluster_id DataOciDatabaseVmClusterUpdates#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#id DataOciDatabaseVmClusterUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#state DataOciDatabaseVmClusterUpdates#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.updateType">update_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#update_type DataOciDatabaseVmClusterUpdates#update_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#vm_cluster_id DataOciDatabaseVmClusterUpdates#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#filter DataOciDatabaseVmClusterUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#id DataOciDatabaseVmClusterUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#state DataOciDatabaseVmClusterUpdates#state}.

---

##### `update_type`<sup>Optional</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesConfig.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#update_type DataOciDatabaseVmClusterUpdates#update_type}.

---

### DataOciDatabaseVmClusterUpdatesFilter <a name="DataOciDatabaseVmClusterUpdatesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#name DataOciDatabaseVmClusterUpdates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#values DataOciDatabaseVmClusterUpdates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#regex DataOciDatabaseVmClusterUpdates#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#name DataOciDatabaseVmClusterUpdates#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#values DataOciDatabaseVmClusterUpdates#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_updates#regex DataOciDatabaseVmClusterUpdates#regex}.

---

### DataOciDatabaseVmClusterUpdatesVmClusterUpdates <a name="DataOciDatabaseVmClusterUpdatesVmClusterUpdates" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdates()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterUpdatesFilterList <a name="DataOciDatabaseVmClusterUpdatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterUpdatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]]

---


### DataOciDatabaseVmClusterUpdatesFilterOutputReference <a name="DataOciDatabaseVmClusterUpdatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseVmClusterUpdatesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesFilter">DataOciDatabaseVmClusterUpdatesFilter</a>]

---


### DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList <a name="DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference <a name="DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_updates

dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.availableActions">available_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.lastAction">last_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.timeReleased">time_released</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdates">DataOciDatabaseVmClusterUpdatesVmClusterUpdates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_actions`<sup>Required</sup> <a name="available_actions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.availableActions"></a>

```python
available_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_action`<sup>Required</sup> <a name="last_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.lastAction"></a>

```python
last_action: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_released`<sup>Required</sup> <a name="time_released" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.timeReleased"></a>

```python
time_released: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdatesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterUpdatesVmClusterUpdates
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdates.DataOciDatabaseVmClusterUpdatesVmClusterUpdates">DataOciDatabaseVmClusterUpdatesVmClusterUpdates</a>

---



