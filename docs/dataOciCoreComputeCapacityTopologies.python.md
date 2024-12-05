# `dataOciCoreComputeCapacityTopologies` Submodule <a name="`dataOciCoreComputeCapacityTopologies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologies <a name="DataOciCoreComputeCapacityTopologies" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies oci_core_compute_capacity_topologies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies(
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
  availability_domain: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologiesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#compartment_id DataOciCoreComputeCapacityTopologies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#availability_domain DataOciCoreComputeCapacityTopologies#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#display_name DataOciCoreComputeCapacityTopologies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#id DataOciCoreComputeCapacityTopologies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#compartment_id DataOciCoreComputeCapacityTopologies#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#availability_domain DataOciCoreComputeCapacityTopologies#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#display_name DataOciCoreComputeCapacityTopologies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#filter DataOciCoreComputeCapacityTopologies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#id DataOciCoreComputeCapacityTopologies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologiesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreComputeCapacityTopologies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.computeCapacityTopologyCollection">compute_capacity_topology_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList">DataOciCoreComputeCapacityTopologiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compute_capacity_topology_collection`<sup>Required</sup> <a name="compute_capacity_topology_collection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.computeCapacityTopologyCollection"></a>

```python
compute_capacity_topology_collection: DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.filter"></a>

```python
filter: DataOciCoreComputeCapacityTopologiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList">DataOciCoreComputeCapacityTopologiesFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection()
```


### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems()
```


### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource()
```


### DataOciCoreComputeCapacityTopologiesConfig <a name="DataOciCoreComputeCapacityTopologiesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologiesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#compartment_id DataOciCoreComputeCapacityTopologies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#availability_domain DataOciCoreComputeCapacityTopologies#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#display_name DataOciCoreComputeCapacityTopologies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#id DataOciCoreComputeCapacityTopologies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#compartment_id DataOciCoreComputeCapacityTopologies#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#availability_domain DataOciCoreComputeCapacityTopologies#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#display_name DataOciCoreComputeCapacityTopologies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#filter DataOciCoreComputeCapacityTopologies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#id DataOciCoreComputeCapacityTopologies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologiesFilter <a name="DataOciCoreComputeCapacityTopologiesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#name DataOciCoreComputeCapacityTopologies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#values DataOciCoreComputeCapacityTopologies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#regex DataOciCoreComputeCapacityTopologies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#name DataOciCoreComputeCapacityTopologies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#values DataOciCoreComputeCapacityTopologies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topologies#regex DataOciCoreComputeCapacityTopologies#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.capacityType">capacity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_type`<sup>Required</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySource</a>

---


### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.capacitySource">capacity_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `capacity_source`<sup>Required</sup> <a name="capacity_source" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.capacitySource"></a>

```python
capacity_source: DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsCapacitySourceList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.property.items"></a>

```python
items: DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection">DataOciCoreComputeCapacityTopologiesComputeCapacityTopologyCollection</a>

---


### DataOciCoreComputeCapacityTopologiesFilterList <a name="DataOciCoreComputeCapacityTopologiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]]

---


### DataOciCoreComputeCapacityTopologiesFilterOutputReference <a name="DataOciCoreComputeCapacityTopologiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topologies

dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreComputeCapacityTopologiesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologies.DataOciCoreComputeCapacityTopologiesFilter">DataOciCoreComputeCapacityTopologiesFilter</a>]

---



