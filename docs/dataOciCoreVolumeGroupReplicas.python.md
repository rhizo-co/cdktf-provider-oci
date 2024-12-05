# `dataOciCoreVolumeGroupReplicas` Submodule <a name="`dataOciCoreVolumeGroupReplicas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeGroupReplicas <a name="DataOciCoreVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas oci_core_volume_group_replicas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeGroupReplicasFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#availability_domain DataOciCoreVolumeGroupReplicas#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#compartment_id DataOciCoreVolumeGroupReplicas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#display_name DataOciCoreVolumeGroupReplicas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#id DataOciCoreVolumeGroupReplicas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#state DataOciCoreVolumeGroupReplicas#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#availability_domain DataOciCoreVolumeGroupReplicas#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#compartment_id DataOciCoreVolumeGroupReplicas#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#display_name DataOciCoreVolumeGroupReplicas#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#filter DataOciCoreVolumeGroupReplicas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#id DataOciCoreVolumeGroupReplicas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#state DataOciCoreVolumeGroupReplicas#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVolumeGroupReplicasFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeGroupReplicas resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVolumeGroupReplicas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVolumeGroupReplicas to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVolumeGroupReplicas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeGroupReplicas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList">DataOciCoreVolumeGroupReplicasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.volumeGroupReplicas">volume_group_replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.filter"></a>

```python
filter: DataOciCoreVolumeGroupReplicasFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList">DataOciCoreVolumeGroupReplicasFilterList</a>

---

##### `volume_group_replicas`<sup>Required</sup> <a name="volume_group_replicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.volumeGroupReplicas"></a>

```python
volume_group_replicas: DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVolumeGroupReplicasFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeGroupReplicasConfig <a name="DataOciCoreVolumeGroupReplicasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeGroupReplicasFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#availability_domain DataOciCoreVolumeGroupReplicas#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#compartment_id DataOciCoreVolumeGroupReplicas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#display_name DataOciCoreVolumeGroupReplicas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#id DataOciCoreVolumeGroupReplicas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#state DataOciCoreVolumeGroupReplicas#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#availability_domain DataOciCoreVolumeGroupReplicas#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#compartment_id DataOciCoreVolumeGroupReplicas#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#display_name DataOciCoreVolumeGroupReplicas#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeGroupReplicasFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#filter DataOciCoreVolumeGroupReplicas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#id DataOciCoreVolumeGroupReplicas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#state DataOciCoreVolumeGroupReplicas#state}.

---

### DataOciCoreVolumeGroupReplicasFilter <a name="DataOciCoreVolumeGroupReplicasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#name DataOciCoreVolumeGroupReplicas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#values DataOciCoreVolumeGroupReplicas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#regex DataOciCoreVolumeGroupReplicas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#name DataOciCoreVolumeGroupReplicas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#values DataOciCoreVolumeGroupReplicas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#regex DataOciCoreVolumeGroupReplicas#regex}.

---

### DataOciCoreVolumeGroupReplicasVolumeGroupReplicas <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas()
```


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeGroupReplicasFilterList <a name="DataOciCoreVolumeGroupReplicasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeGroupReplicasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVolumeGroupReplicasFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]]

---


### DataOciCoreVolumeGroupReplicasFilterOutputReference <a name="DataOciCoreVolumeGroupReplicasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVolumeGroupReplicasFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>]

---


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.membershipState">membership_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.volumeReplicaId">volume_replica_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership_state`<sup>Required</sup> <a name="membership_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.membershipState"></a>

```python
membership_state: str
```

- *Type:* str

---

##### `volume_replica_id`<sup>Required</sup> <a name="volume_replica_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.volumeReplicaId"></a>

```python
volume_replica_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas</a>

---


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_group_replicas

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.memberReplicas">member_replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.timeLastSynced">time_last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas">DataOciCoreVolumeGroupReplicasVolumeGroupReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member_replicas`<sup>Required</sup> <a name="member_replicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.memberReplicas"></a>

```python
member_replicas: DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList</a>

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.sizeInGbs"></a>

```python
size_in_gbs: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_synced`<sup>Required</sup> <a name="time_last_synced" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.timeLastSynced"></a>

```python
time_last_synced: str
```

- *Type:* str

---

##### `volume_group_id`<sup>Required</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumeGroupReplicasVolumeGroupReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas">DataOciCoreVolumeGroupReplicasVolumeGroupReplicas</a>

---



